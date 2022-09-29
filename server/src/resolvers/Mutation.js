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

}