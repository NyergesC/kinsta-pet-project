import {Container, Icon, SearchDiv, Title,IconDiv, SubTitle, Icons, IconP, List} from './TripPagestyle'
import {useTrips} from '../../hooks/useTrips'
import { TripCards } from './TripCards'
import Loading from '../Loading/Loading'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {BiHappyBeaming, BiTransferAlt} from 'react-icons/bi'
import {RiMentalHealthLine} from 'react-icons/ri'
import React, {useState} from 'react'
import { Search} from './Search'
import { useReviews } from '../../hooks/useReviews'


export const Trippage = () => {

    const {data, error, loading, } = useTrips()
    const {data:reviews } = useReviews()

    const [name, setName] = useState<string>('');

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
 

    return (
        <Container>        
            <Icon to="/">Logo</Icon>
            <SearchDiv>
                <Title>Search and Go</Title>
                <Search name={name} inputChangeHandle={inputChangeHandle} />
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
                { data && <TripCards trips={data.trips}  name={name} reviews={reviews.reviews}/>}
        </Container>
      )
  }


