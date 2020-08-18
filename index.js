const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const express = require('express')
const resolvers = require('./resolvers/index')
const typeDefs = require('./typeDefs')
const User = require('./models/User')

require('dotenv').config()

const MONGODB_URI = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.6n5us.mongodb.net/<dbname>?retryWrites=true&w=majority`
const SECRET_KEY = process.env.SECRET_KEY

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

const server = new ApolloServer({
    cors: false,
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        const auth = req ? req.headers.authorization : null
        if (auth && auth.toLowerCase().startsWith('bearer ')) {
            const decodedToken = jwt.verify(
                auth.substring(7), SECRET_KEY
            )
            const currentUser = await User.findById(decodedToken.id)
            return { currentUser }
        }
    }
})

const app = express()
server.applyMiddleware({ app, cors: { origin: 'http://localhost:3000', credentials: true } });

app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)