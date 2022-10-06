export const Trip = {

    reviews: async ({id}, args, {prisma}) => {
        
        const reviews = await prisma.review.findMany({
            where:{
                tripId: id
            }
        })    

        return reviews    
    },

    
    tripCategory: async ({ tripCategoryId }, args, { prisma }) => {

        const tripCategory =  await prisma.tripCategory.findUnique({
            where: {
                 id: tripCategoryId
            },
        })

        return tripCategory
    },



}