import React, {useState} from 'react'
import {Trips, Trip, Review, Reviews} from '../Types'
import { CardWrapp} from './TripPagestyle'
import { useReviews } from 'src/hooks/useReviews';
import {Card} from './Card'

type Props = {
    name:string,
    trips:Trip[]
}


export const TripCards= ( {trips, name}: Props  ) => {

 const [isModalOpen, setIsModalOpen] = useState(false);  

//MODAL EVENTS:
  
   const showReviews = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  //REVIEW QUERY

  
  return (
      <CardWrapp>
           {trips.map((trip:Trip) => trip.destination.toLowerCase().includes(name.toLowerCase()) && <Card trip={trip}/>)}               

    </CardWrapp>
  )
}
