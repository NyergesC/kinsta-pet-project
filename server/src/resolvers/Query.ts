import { PrismaClient } from "@prisma/client";

export const Query = {
    trips : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.trip.findMany();
    },

    trip: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const trip = await prisma.trip.findUnique({
          where: {
            id: id,
          },
        })    
        return trip ? trip : null
    },

    tripCategories : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.tripCategory.findMany();
    },

    tripCategory: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const tripCategory = await prisma.tripCategory.findUnique({
          where: {
            id: id,
          },
        })    
        return tripCategory ? tripCategory : null
    },

    reviews : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.review.findMany();
    },

    review: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const review = await prisma.review.findUnique({
          where: {
            id: id,
          },
        })    
        return review ? review : null
    },

    blogs : async(parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
        return await prisma.blog.findMany();
    },

    blog: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        const blog = await prisma.blog.findUnique({
          where: {
            id: id,
              
          },
        })    
        return blog ? blog : null
    },

    users: async(parent:any, args: any,  { prisma }: { prisma: PrismaClient }) => {
        return await prisma.user.findMany();
    },

    user: async (parent: any,{ id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {


        const user = await prisma.user.findUnique({
         
          where: {
            id: id,
          },
        })    
        return user ? user : null
    },
    

      
}
