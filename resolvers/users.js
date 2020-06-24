const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    Query: {
        getUsers: () => {
            return User.find({})
        }
    },
    Mutation: {
        register: async (_, { registerInput: { username, password, confirmPassword } }, context, info) => {
            passwordHash = await bcrypt.hash(password, 12)
            const newUser = new User({
                username,
                passwordHash
            })
            await newUser.save()
            return newUser
        },
        login: async (_, args, context, info) => {
            const user = await User.findOne({ username: args.username })
            const match = await bcrypt.compare(args.password, user.passwordHash)
            if (!user || !match) {
                throw new UserInputError("wrong credentials")
            }
            const userForToken = {
                username: user.username,
                id: user._id,
            }
            return { value: jwt.sign(userForToken, SECRET_KEY) }
        }
    }
}