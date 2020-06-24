const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

module.exports = {
    Query: {
        getUsers: () => {
            console.log("getuserissa")
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
        }
    }
}