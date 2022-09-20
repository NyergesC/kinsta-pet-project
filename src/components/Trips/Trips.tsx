import TripList from './Triplist'
import useFetch from '../../useFetch'
import { One, Two, Container} from './Tripstyles'


const Trips: React.FC<{}>= () => {
  const {data:trips, isPending, error} = useFetch("http://localhost:8000/trips")  

  return (
    <>
    <Container>
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { trips && <TripList trips={trips} />}
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