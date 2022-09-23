exports.Blog = {
    user: ({userId}, args, { db }) => {
        return db.users.find((user) => user.id === userId)       
    
    },



}