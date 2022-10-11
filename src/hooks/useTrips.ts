import { useQuery, gql } from "@apollo/client"

export const GET_TRIPS = gql`
    query Trips {
    trips {
        destination
        description
        distance
        duration
        src
        alt
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