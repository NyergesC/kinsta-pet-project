import { useQuery, gql } from "@apollo/client"

export const GET_BLOGDETAILS = gql`
    query getBlogDetail($id: ID!) {
        blog (id:$id)  {
            title
            createdAt
            updatedAt
            body
            small
            author {
            name
            }
        } 
}

`;

export const useBlogDetails = (id:any) => {

    const {error, loading, data} = useQuery(GET_BLOGDETAILS, {
        variables:{
            id
        }
    })


    return {
        error,
        loading,
        data,
    }
}