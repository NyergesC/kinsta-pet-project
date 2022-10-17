
import { useQuery, gql } from "@apollo/client"

export const GET_BLOGS = gql`
    query blogs {
        blogs {
            id
            title
            name
            createdAt
            small
            author {
            name
            }
  } 
}
`;

export const useBlogs = () => {

    const {error, loading, data} = useQuery(GET_BLOGS)


    return {
        error,
        loading,
        data,
    }
}