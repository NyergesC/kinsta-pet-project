export const Blog = {

    user: async ({ authorId }, args, { prisma }) => {

        const user =  await prisma.user.findUnique({
            where: {
                 id: authorId
            },
        })

        return user
    },




}