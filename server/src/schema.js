const { gql } = require('apollo-server');


exports.typeDefs = gql`
    type Query{
        trips: [Trip!]!
        trip(id:ID!): Trip
        blogs: [Blog!]!
        blog(id: ID!): Blog
        tripCategories: [TripCategory!]!
        tripCategory(id:ID!): TripCategory
        users: [User!]!
        user(id: ID!): User
        reviews(filter: ReviewsFilterInput): [Review!]!
        review(id: ID!): Review
    }

    type Mutation {
        addBlog(input: AddBlogInput!): Blog!
        addReview(input: AddReviewInput!): Review!
        deleteBlog(id: ID!): Boolean!
        updateBlog(id:ID!, input:UpdateBlogInput!): Blog!
    }

    type Trip {
    id: ID!,
    destination: String!,
    description: String!,
    distance: String!,
    duration: String!,
    src: String!,
    alt: String!,
    tripCategory: TripCategory
    reviews:[Review!]!
  }
    type Blog {
    id: ID!,
    title: String!,
    date: String!,
    small: String!,
    body: String!,
    author: String!,
    read: String!,
    value: Int!,
    user: User
  }

    type TripCategory {
      id: ID!
      name: String!
      trips: [Trip!]!
  }

    type User {
    id: ID!
    name: String!
    email: String!
    age:Int!
    review: Review
    blog:Blog

  }
    type Review {
    id: ID!
    date:String!
    comment: String!
    text:String!
    rating: Int!
    user: User
  }

  input ReviewsFilterInput {
      rating:Int
  }

  input AddBlogInput {
      title:String!
      date: String!,
      body: String!,
      author: String!,
      userId:String!

  }

  input UpdateBlogInput {
      title:String!
      date: String!,
      body: String!,
      author: String!,
      userId: String

  }
  input AddReviewInput {
      date:String!
      comment: String!,
      text: String!,
      rating:Int!
      tripId: String!
      userId: String!

  }

`