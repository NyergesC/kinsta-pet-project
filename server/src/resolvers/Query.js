
export const Query = {
    trips : async(parent, args, { prisma }) => {
        return await prisma.trip.findMany();
    },

    trip: async (parent, { id }, { prisma }) => {

        const trip = prisma.trip.findUnique({
          where: {
            id: id,
          },
        })    
        return trip ? trip : null 
    },

    tripCategories : async(parent, args, { prisma }) => {
        return await prisma.tripCategory.findMany();
    },

    tripCategory: async (parent, { id }, { prisma }) => {

        const tripCategory = prisma.tripCategory.findUnique({
          where: {
            id: id,
          },
        })    
        return tripCategory ? tripCategory : null 
    },

    reviews : async(parent, args, { prisma }) => {
        return await prisma.review.findMany();
    },

    review: async (parent, { id }, { prisma }) => {

        const review = prisma.review.findUnique({
          where: {
            id: id,
          },
        })    
        return review ? review : null 
    },

    blogs : async(parent, args, { prisma }) => {
        return await prisma.blog.findMany();
    },

    blog: async (parent, { id }, { prisma }) => {

        const blog = prisma.blog.findUnique({
          where: {
            id: id,
          },
        })    
        return blog ? blog : null 
    },

    users: async(parent, args, { prisma }) => {
        return await prisma.user.findMany();
    },

    
    user: async (parent, { id }, { prisma }) => {

        const user = prisma.user.findUnique({
          where: {
            id: id,
          },
        })    
        return user ? user : null 
    },

     
      
}
