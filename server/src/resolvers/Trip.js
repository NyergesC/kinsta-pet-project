exports.Trip = {
    tripCategory: ({tripCategoryId}, args, { db }) => {
        return db.tripCategories.find((tripCategory) => tripCategory.id === tripCategoryId)
    },

    reviews: ({id}, args, { db }) => {
        return db.reviews.filter(review => review.tripId === id )
    }

   
}
