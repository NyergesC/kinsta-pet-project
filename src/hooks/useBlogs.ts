
import { useQuery, gql } from "@apollo/client"

export const GET_BLOGS = gql`
    query blogs {
        blogs {
            id
            title
            name
            createdAt
            small
  } 
}

`;


export const useBlogs = () => {

    const {data, loading, error} = useQuery(GET_BLOGS);

    return {
        error,
        loading,
        data,
    }
}