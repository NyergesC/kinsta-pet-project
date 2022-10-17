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

/* export const AddBlog = (title: String, small: String, body: String, name:String) => {

    const [addBlog, {data, loading, error}] = useMutation(ADD_BLOG, {
        variables:{
            title,
            small,
            body,
            name
        }
    })

  return [
      addBlog,
      {error,
      loading,
      data
  }
]
} */
