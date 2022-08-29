import {CarouselContainer} from './Tripstyles'


type Trips = {
    trips: Trip[]
}

type Trip = {
    destination: string,
    description: string,
    distance: string,
    duration:string, 
    src:string,
    alt:string,
    id:number 
}

const TripList: React.FC<Trips> = ( { trips }) => {

  return (
    <CarouselContainer effect="fade">
      {trips.map((trip:Trip) => {          
          return(
            <div key={trip.id} >
                <div>
{/*                     <img src={require(`./images/moon.png`)} alt={trip.alt} /> */}
                    <img src={require(`./images/${trip.src}`)} alt={trip.alt} />
                </div>
                <div>
                    <h2>{ trip.destination }</h2>
                    <p>{ trip.description }</p>
                </div>
            </div>
          )
      }
      )}
    </CarouselContainer>
  );
}
 
export default TripList;