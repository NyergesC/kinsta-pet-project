const { ApolloServer } = require("apollo-server");
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
  });