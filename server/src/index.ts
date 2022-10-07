import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { Query } from './resolvers/Query';
import { Trip } from './resolvers/Trip';
import { Blog } from './resolvers/Blog';
import { User } from './resolvers/User';
import { Review } from './resolvers/Review';
import { Mutation } from './resolvers/Mutation';
import { getUserId } from './utils';
import { TripCategory } from './resolvers/TripCategory';
import * as fs from 'fs'
import * as path from 'path'
 import { fileURLToPath } from 'url';
 
const prisma = new PrismaClient()

const __filename = fileURLToPath(import.meta.url);

 const __dirname = path.dirname(__filename);

//const { getUserId } = require('./utils');

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
    ),
    resolvers: {
        Query,
        Trip,
        Blog,
        Review,
        TripCategory,
        User,
        Mutation
    },
    context: ({req}:{req:any}, {authToken}:{authToken:any}) => {
      return {
        ...req,
        prisma,
        userId: req && req.headers.authorization ? getUserId(req, authToken) : null
      }
    }
  })

  server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  })

