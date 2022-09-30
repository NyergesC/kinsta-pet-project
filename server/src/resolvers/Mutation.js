export const Mutation = {

    addBlog: async (parent, { input }, { prisma }) => {

        const  { title, body, small, authorId } = input;

        const addBlog = await prisma.blog.create({
            data: { 
                title: title,
                body:body,
                small:small,
                authorId:authorId
            }
        })

        return addBlog
    }, 

    updateBlog: async (parent, { id, input }, { prisma }) => {

        const  { title, body, small } = input;

        const updateBlog = await prisma.blog.update({
            where: {
                id: id
            },
            data: { 
                title: title,
                body:body,
                small:small,

            }
        });

        return updateBlog
    },

    deleteBlog: async (parent, { id }, { prisma }) => {
        await prisma.blog.delete({
            where: {
                id: id,
            },
        })
        return true

    },

    
    addReview: async (parent, { input }, { prisma }) => {

        const  { comment, text, rating, authorId, tripId } = input;

        const addReview = await prisma.review.create({
            data: { 
                comment: comment,
                text:text,
                rating:rating,
                authorId:authorId,
                tripId:tripId
            }
        })

        return addReview
    }, 

    deleteReview: async (parent, { id }, { prisma }) => {
        await prisma.review.delete({
            where: {
                id: id,
            },
        })
        return true

    },

}