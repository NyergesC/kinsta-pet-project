export const User = {
    reviews: async ({id}, args, {prisma}) => {
        
        const reviews = await prisma.review.findMany({
            where:{
                authorId : id
            }
        })    

        return reviews    
    },

    blog: async ({ id }, args, { prisma }) => {

        const blog =  await prisma.blog.findUnique({
            where: {
                 authorId: id
            },
        })

        return blog
    },




}