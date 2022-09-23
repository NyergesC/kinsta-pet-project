const { v4: uuid } = require("uuid")

exports.Mutation = {
    addBlog: (parent, { input }, { db }) => {
        const { title, date, body, author, userId } = input;
    
        const newBlog = {
          id: uuid(),
          title,
          date,
          body,
          author,
          userId
        };
    
        db.blogs.push(newBlog);
    
        return newBlog;
      },

    addReview: (parent, { input }, { db }) => {
        const { date, comment, text, rating, tripId, userId} = input;
    
        const newReview = {
          id: uuid(),
          date,
          comment,
          text,
          rating,
          tripId,
          userId
        };
    
        db.reviews.push(newReview);
    
        return newReview;
      },

    deleteBlog: (parent, { id }, { db }) => {
      db.blogs = db.blogs.filter(blog => blog.id !== id)
      
      return true

    },

    updateBlog:(parent, { id, input }, { db }) => {
      const index = db.blogs.findIndex(blog => blog.id === id);
      if(index === -1) return null
      db.blogs[index] = {
        ...db.blogs[index],
        ...input
      };
      return db.blogs[index]
    }
};

/* db.users = db.users.map(user => {
  if(user.blogId === id) return {
    ...user,
    blogId: null,
  };
  else return user;
});

return true */