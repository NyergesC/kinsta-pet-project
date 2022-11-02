import { useQuery, gql } from "@apollo/client"

export const GET_REVIEWS = gql`
    query Reviews {
            reviews {
            comment
            id
            text
            rating
            author {
                name
            }
            }
         }
    


`;

export const useReviews = () => {

    const {error, loading, data} = useQuery(GET_REVIEWS)


    return {
        error,
        loading,
        data,
    }
}