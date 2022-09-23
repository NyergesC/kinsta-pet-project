exports.Query = {
    trips: (parent, args, { db }) => db.trips,

    trip: (parent, {id}, { db }) => {
        return db.trips.find((trip) => trip.id === id);
    },

    blogs: (parent, args, { db }) => db.blogs,

    blog: (parent, {id}, { db }) => {
        return db.blogs.find((blog) => blog.id === id);
    },

    tripCategories: (parent, args, { db }) => db.tripCategories,

    tripCategory: (parent, { id }, { db }) => {
        return db.tripCategories.find((tripCategory) => tripCategory.id === id)
    },

    users: (parent, args, { db }) =>  db.users,

    user: (parent, {id}, { db }) => {
        return db.users.find((user) => user.id === id);
    },

    reviews: (parent, {filter}, { db }) => {        
        return filter ?
        db.reviews.filter(review => review.rating === filter.rating) : db.reviews
    },

    review: (parent, {id}, { db }) => {
        return db.reviews.find((review) => review.id === id);
    },

}