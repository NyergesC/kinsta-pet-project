import { PrismaClient } from "@prisma/client";

export const Review = {

    trip: async ({ tripId } : {tripId:string}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const trip =  await prisma.trip.findUnique({
            where: {
                 id: tripId
            },
        })

        return trip
    },

    author: async ({ authorId } : {authorId: string}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const user =  await prisma.user.findUnique({
            where: {
                 id: authorId
            },
        })

        return user
    },


}