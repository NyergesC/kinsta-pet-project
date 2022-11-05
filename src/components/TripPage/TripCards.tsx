import {Trip, Review} from '../Types'
import { CardWrapp} from './TripPagestyle'
import {Card} from './Card'

type Props = {
    name:string,
    trips:Trip[],
    reviews:Review[],
}


export const TripCards= ( {trips, name, reviews}: Props  ) => {

  
  return (
      <CardWrapp>
           {trips.map((trip:Trip ) => trip.destination.toLowerCase().includes(name.toLowerCase()) && <Card trip={trip} reviews={reviews}/>)}              

      </CardWrapp>
  )
}
