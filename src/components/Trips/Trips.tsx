import TripList from './Triplist'
import { One, Two, Container} from './Tripstyles'
import {useTrips} from '../../hooks/useTrips'


const Trips: React.FC<{}>= () => {
  const {data, loading, error} = useTrips()

  return (
    <>
    <Container>
        { error && <div>{error.message}</div>}
        { loading && <div>Loading...</div>}
        { data && <TripList trips={data.trips} />}
     <One>
         <h2>01</h2><span>Pick</span>
     </One>
     <Two>
         <span>Apply</span><h2>02</h2>
     </Two>
    </Container>
   </>
  )
}

export default Trips