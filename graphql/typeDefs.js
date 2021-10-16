const {gql} = require("apollo-server")

const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        username: String!
        createdAt: String!
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput{
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }
    type Query{
        getPosts: [Post]
    }
    type Mutation{
        register(registerInput: RegisterInput): User
        login(username: String!, password: String!): User!
    }
`

module.exports = typeDefs