exports.User = {
    review: ({reviewId}, {filter}, { db }) => {
        return db.reviews.find((review) => review.id === reviewId)       

    },

    blog: ({blogId}, args, { db }) => {
        return db.blogs.filter((blog) => blog.id === blogId)
        

    }

}

/* return db.blogs.filter((blog) => blog.id === blogId)   */     

/* blog: ({blogId}, args, { db }) => {
    return db.blogs.filter((blog) => {
       blogId.includes(blog.id)
        
    })   

}   */