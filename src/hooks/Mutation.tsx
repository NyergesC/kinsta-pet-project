import {gql} from '@apollo/client'

export const ADD_BLOG = gql`
    mutation addBlog($title: String!, $small: String!, $body:String!, $name:String!){
        addBlog(input: {
            title: $title,
            small:$small,
            body:$body,
            name:$name,
        }) {
            title
            body
            small 
            name 
            id
            createdAt
            
        }
    }

`;

export const DELETE_BLOG = gql`
  mutation DeleteBlog($id: ID!) {
    deleteBlog(id:$id) {
      id
    }
  }  
`;


export const UPDATE_BLOG = gql`
  mutation UpdateBlog($updateBlogId: ID!, $input: UpdateBlogInput!) {
    updateBlog(id: $updateBlogId, input: $input) {
     title,
     body,
     small,
     id  
    }
  }
`;

export const SIGNUP_MUTATION = gql`
mutation SignupMutation($email: String!, $password: String!, $name: String!, $age:Int!) {
  signup(email: $email, password: $password, name: $name, age:$age) {
    token
  }
}
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user{
        id
        name
        email
      }
    }
  }
`;


