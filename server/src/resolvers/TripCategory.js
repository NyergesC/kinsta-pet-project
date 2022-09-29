export const TripCategory = {

    trips: async ({id}, args, {prisma}) => {

        const trips = await prisma.trip.findMany({
            where:{
                tripCategoryId: id
            }
        })    

        return trips   
    },

}