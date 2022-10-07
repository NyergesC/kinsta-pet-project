import { PrismaClient } from "@prisma/client";

export const TripCategory = {

    trips: async ({id}:{id:string}, args: any, { prisma }: { prisma: PrismaClient }) =>  {

        const trips = await prisma.trip.findMany({
            where:{
                tripCategoryId: id
            }
        })    

        return trips   
    },

}