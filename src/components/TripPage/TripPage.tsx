import {Container, Icon, SearchDiv, Title, AutoCompleteItem, IconDiv, SubTitle, Icons, IconP, List} from './TripPagestyle'
import {useTrips} from '../../hooks/useTrips'
import { TripCards } from './TripCards'
import Loading from '../Loading/Loading'
import { Input } from 'antd';
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {BiHappyBeaming, BiTransferAlt} from 'react-icons/bi'
import {RiMentalHealthLine} from 'react-icons/ri'
import React, {useState} from 'react'
import { gql, useLazyQuery } from '@apollo/client';
import { Search} from './Search'
import { Trip } from '../Types'

/* const GET_TRIP_NAME = gql`
    query GetTripName ($name: String!) {
        trips (filter:{
        name:$name
        }){
        destination
        }
     }

` */

/* const renderTitle = (title: string) => (
  <span>
    {title}
  </span>
);

const renderItem = (title: string) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}

    </div>
  ),
});

const options = [
  {
    label: renderTitle('Moons'),
    options: [renderItem('Moon'), renderItem('Europa')],
  },
  {
    label: renderTitle('Planets'),
    options: [renderItem('Mars'), renderItem('Jupiter')],
  },
 
]; */

export const Trippage = () => {

const {data, error, loading, } = useTrips()

/* const [getName, {loading, error, data:tripName, called}] = useLazyQuery(GET_TRIP_NAME,{
    variables:{
        name
    }
})
 */
const [name, setName] = useState<string>('');

const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)


 

/* console.log({called,loading, tripName, error}) */
  return (
    <Container>        
        <Icon to="/">Logo</Icon>
        <SearchDiv>
            <Title>Search and Go</Title>
             <Search name={name} inputChangeHandle={inputChangeHandle} />
            {/*  <Search searchInput={searchInput} inputChangeHandle={inputChangeHandle} /> */}
{/*             <div>
                <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="Search your destination" />
                <button onClick={() => getName()}>Search</button>
            </div> */}
{/*             <AutoCompleteItem
                dropdownMatchSelectWidth={500}
                style={{ width: 500 }}
                options={options}
            >
                <Input.Search value={name} onChange={(e) => setName(e.target.value)} size="large" placeholder="Search your destination" />
            </AutoCompleteItem> */}
        </SearchDiv>
        <IconDiv>
            <SubTitle>We are taking responsiblity for</SubTitle>
            <List>
                <Icons>
                    <AiOutlineSafetyCertificate color="white" fontSize="62px" /> 
                    <IconP>Safety</IconP>
                </Icons>
                <Icons>
                    <BiHappyBeaming color="white" fontSize="62px" /> 
                    <IconP>Entertainment</IconP>
                </Icons>
                <Icons>
                    <RiMentalHealthLine color="white" fontSize="62px" /> 
                    <IconP>Mental health</IconP>
                </Icons>
                <Icons>
                    <BiTransferAlt color="white" fontSize="62px"/> 
                    <IconP>Transfer</IconP>
                </Icons>  
            </List>
        </IconDiv>
            { error && <div>{error.message}</div>}
            { loading && <Loading />}
            { data && <TripCards trips={data.trips}  name={name} />}
{/*             {data && data.trips.map((trip: Trip) => trip.destination.toLowerCase().includes(name.toLowerCase()) && <TripCards key={trip.id} trips={data.trips} />)}      
 */}    </Container>
  )
}


