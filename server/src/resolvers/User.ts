import { PrismaClient } from "@prisma/client";

export const User = {
    reviews: async ({id}:{id: string}, args: any, { prisma }: { prisma: PrismaClient }) => {
        
        const reviews = await prisma.review.findMany({
            where:{
                authorId : id
            }
        })    

        return reviews    
    },

    blog: async ({id}:{id: string}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const blog =  await prisma.blog.findUnique({
            where: {
                 authorId: id
            },
        })

        return blog
    },




}