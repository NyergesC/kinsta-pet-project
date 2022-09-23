const { PrismaClient } = require('@prisma/client')
const { ApolloServer } = require("apollo-server")
const fs = require("fs");
const path = require("path");
const Query = require("./resolvers/Query");

const resolvers = {
    Query,   
    /* Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: async (parent, args, context) => {
        return context.prisma.trip.findMany()
      },
    }, */
    /* Mutation: {
      post: (parent, args, context, info) => {
        const newTrip = context.prisma.trip.create({
          data: {
            url: args.url,
            description: args.description,
          },
        })
        return newTrip
        }
      } */
  }

const prisma = new PrismaClient()

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
    ),
    resolvers,
    context: {
      prisma,
    }
  })

  server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  })

/* const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Review } = require("./resolvers/Review");
const { Trip } = require("./resolvers/Trip");
const { User } = require("./resolvers/User");
const { Blog } = require("./resolvers/Blog");
const { TripCategory } = require("./resolvers/TripCategory")
const { Mutation } = require('./resolvers/Mutation')
const { db } = require("./db");



const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation,
        TripCategory,
        Trip, 
        User,
        Review, 
        Blog,
    },

    context: {
        db,
      },
    
  });
  
  server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  }); */