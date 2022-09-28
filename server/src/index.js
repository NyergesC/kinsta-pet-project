import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { Query } from './resolvers/Query.js';
import { typeDefs } from './schema.js'


const prisma = new PrismaClient()


const server = new ApolloServer({
    typeDefs,
    
    resolvers: {
        Query
    },
    context: {
      prisma,
    }
  })

  server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  })

