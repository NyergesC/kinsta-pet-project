import TripList from './Triplist'
import useFetch from '../../useFetch'


const Trips: React.FC<{}>= () => {
  const {data:trips, isPending, error} = useFetch("http://localhost:8000/trips")  

  return (
    <div>
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { trips && <TripList trips={trips} />}
    </div>
  )
}

export default Trips