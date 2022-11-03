import { gql, useLazyQuery } from '@apollo/client';
import {SearchInput, SearchBtn} from './TripPagestyle'


 type Props = {
    name: string,
    inputChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void,
};
 

const GET_TRIP_NAME = gql`
    query GetTripName ($name: String!) {
        trips (filter:{
        name:$name
        }){
        destination
        }
     }

`
export const Search = ({name, inputChangeHandle}: Props) => {

    const [getName, {loading, error, data, called}] = useLazyQuery(GET_TRIP_NAME,{
        variables:{
            name
        }
    })

    console.log({called,loading, data, error})

  return (
        <div>
            {loading && <div>spinner...</div>}
            <SearchInput value={name} onChange={inputChangeHandle} placeholder="Search your destination" />
            <SearchBtn onClick={() => getName()}>Search</SearchBtn>
        </div>
  )
  }