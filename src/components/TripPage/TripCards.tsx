import React from 'react'
import {Trips, Trip} from '../Types'
import {CardS, LeftSide, Img,RightSide, Details, CardWrapp} from './TripPagestyle'

export const TripCards: React.FC<Trips>  = ( {trips} ) => {


  return (
    <CardWrapp>
        <>
        {trips.map((trip:Trip) => {
            return(
                <CardS key={trip.id}>
                     <LeftSide>                   
                        <Img src={require(`./images/${trip.src}`)} alt={trip.alt} />
                    </LeftSide>
                    <RightSide>
                        <h6>Category: {trip.tripCategory.name}</h6>
                        <h2>{ trip.destination }</h2>
                        <p>{ trip.description }</p>         
                        <Details>
                            <div>
                                <h4>Distance:</h4>
                                <p>{trip.distance}</p>
                            </div>
                            <div>
                                <h4>Duration:</h4>
                                <p>{trip.duration}</p>
                            </div>
                        </Details>  
                    </RightSide>         

                </CardS>
            )
        })

    }
        
        
        </>

    </CardWrapp>
  )
}
