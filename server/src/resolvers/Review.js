export const Review = {

    trip: async ({ tripId }, args, { prisma }) => {

        const trip =  await prisma.trip.findUnique({
            where: {
                 id: tripId
            },
        })

        return trip
    },

    author: async ({ authorId }, args, { prisma }) => {

        const user =  await prisma.user.findUnique({
            where: {
                 id: authorId
            },
        })

        return user
    },


}