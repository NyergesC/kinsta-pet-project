
import { useQuery, gql } from "@apollo/client"

export const GET_BLOGS = gql`
    query blogs {
        blogs  {
            id
            title
            name
            createdAt
            updatedAt
            small
            author{
                name
            }
  } 
}

`;


export const useBlogs = () => {
    
    const {data, loading, error, updateQuery} = useQuery(GET_BLOGS);

    return {
        error,
        loading,
        data,
        updateQuery
    }
}