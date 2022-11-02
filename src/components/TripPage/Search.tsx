import { gql, useLazyQuery } from '@apollo/client';

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
            <input value={name} onChange={inputChangeHandle} placeholder="Search your destination" />
            <button onClick={() => getName()}>Search</button>
            {loading && <div>spinner...</div>}
        </div>
  )
  }