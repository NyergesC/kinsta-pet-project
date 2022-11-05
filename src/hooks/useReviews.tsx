import { useQuery, gql } from "@apollo/client"

export const GET_REVIEWS = gql`
    query reviews {
        reviews {
            comment
            id
            text
            rating
            tripId
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