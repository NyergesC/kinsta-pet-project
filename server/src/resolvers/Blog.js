export const Blog = {

    author: async ({ authorId }, args, { prisma }) => {

        const author =  await prisma.user.findUnique({
            where: {
                 id: authorId
            },
        })

        return author
    },




}