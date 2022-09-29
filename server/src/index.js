import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { Query } from './resolvers/Query.js';
import { Trip } from './resolvers/Trip.js';
import { Blog } from './resolvers/Blog.js';
import { User } from './resolvers/User.js';
import { Review } from './resolvers/Review.js';
import { TripCategory } from './resolvers/TripCategory.js';
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const prisma = new PrismaClient()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
        User
    },
    context: {
      prisma,
    }
  })

  server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  })

