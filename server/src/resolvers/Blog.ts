import { PrismaClient } from "@prisma/client";

export const Blog = {

    author: async ({ authorId }:{ authorId: string}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const author =  await prisma.user.findUnique({
            where: {
                 id: authorId
            },
        })

        return author
    },


}