const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { validateRegisterInput } = require('../util/validators/register')
const { UserInputError } = require('apollo-server')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    Query: {
        getUsers: () => {
            return User.find({}).populate('posts')
        }
    },
    Mutation: {
        register: async (_, { registerInput: { username, email, password, confirmPassword } }, context, info) => {

            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }
            passwordHash = await bcrypt.hash(password, 12)
            const newUser = new User({
                username,
                email,
                passwordHash
            })
            return await newUser.save()
        },
        login: async (_, args, context, info) => {
            const user = await User.findOne({ username: args.username })
            if (user === null) {
                throw new UserInputError("wrong credentials")
            }
            const match = await bcrypt.compare(args.password, user.passwordHash)
            if (!match) {
                throw new UserInputError("wrong credentials")
            }
            const userForToken = {
                username: user.username,
                id: user._id,
            }
            return { value: jwt.sign(userForToken, SECRET_KEY, { expiresIn: '1h' }) }
        }
    }
}