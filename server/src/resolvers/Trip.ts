import { PrismaClient } from "@prisma/client";

export const Trip = {

    reviews: async ({id}:{id:string}, args:any, { prisma }: { prisma: PrismaClient }) => {
        
        const reviews = await prisma.review.findMany({
            where:{
                tripId: id
            }
        })    

        return reviews    
    },

    
    tripCategory: async ({ tripCategoryId } : {tripCategoryId: string}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const tripCategory =  await prisma.tripCategory.findUnique({
            where: {
                 id: tripCategoryId
            },
        })

        return tripCategory
    },



}