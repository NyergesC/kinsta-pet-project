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
    averageRating
    
    tripCategory {
      name
    }
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