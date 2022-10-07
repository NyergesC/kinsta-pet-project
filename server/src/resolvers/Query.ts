import { PrismaClient } from "@prisma/client";

export const Query = {
    trips : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.trip.findMany();
    },

    trip: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const trip = prisma.trip.findUnique({
          where: {
            id: id,
          },
        })    
        return trip 
    },

    tripCategories : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.tripCategory.findMany();
    },

    tripCategory: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const tripCategory = prisma.tripCategory.findUnique({
          where: {
            id: id,
          },
        })    
        return tripCategory 
    },

    reviews : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.review.findMany();
    },

    review: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const review = prisma.review.findUnique({
          where: {
            id: id,
          },
        })    
        return review 
    },

    blogs : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.blog.findMany();
    },

    blog: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const blog = prisma.blog.findUnique({
          where: {
            id: id,
          },
        })    
        return blog 
    },

    users: async(parent:any, args: any,  { prisma }: { prisma: PrismaClient }) => {
        return await prisma.user.findMany();
    },

    
    user: async (parent: any,{ id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const user = prisma.user.findUnique({
          where: {
            id: id,
          },
        })    
        return user 
    },
    
      
}
