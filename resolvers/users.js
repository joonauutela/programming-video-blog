const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { validateRegisterInput } = require('../util/validators/register')
const { validateLoginInput } = require('../util/validators/login')
const { UserInputError } = require('apollo-server')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

function generateToken(user) {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            username: user.username,
        },
        SECRET_KEY,
        { expiresIn: '1h' }
    );
}

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
        login: async (_, { username, password }) => {

            const { errors, valid } = validateLoginInput(username, password)

            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }
            const user = await User.findOne({ username })
            if (user === null) {
                errors.general = 'Wrong credentials'
                throw new UserInputError("Wrong credentials", { errors })
            }

            const match = await bcrypt.compare(password, user.passwordHash)
            if (!match) {
                errors.general = 'Wrong credentials'
                throw new UserInputError("Wrong credentials", { errors })
            }

            const token = generateToken(user)

            const loggedUser = {
                id: user._id,
                email: user.email,
                username: user.username,
                posts: user.posts,
                token
            }
            return loggedUser
        }
    }
}