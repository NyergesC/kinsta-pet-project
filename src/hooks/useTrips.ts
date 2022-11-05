import { useQuery, gql } from "@apollo/client"

export const GET_TRIPS = gql`
    query Trips {
        trips {
            id
            destination
            description
            distance
            duration
            src
            alt
            averageRating
            
            tripCategory {
            name
            }
            reviews {
            tripId
            comment
            id
            text
            rating
            author {
                name
            }
            }
         }
    }


`;

export const useTrips = () => {

    const {error, loading, data} = useQuery(GET_TRIPS)


    return {
        error,
        loading,
        data,
    }
}