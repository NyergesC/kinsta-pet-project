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

}