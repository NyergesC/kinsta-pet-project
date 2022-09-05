import React from 'react'
import {  Container, Wrapper, ContentText, TitleH1, TitleH3, ContentP, Img1, Square, UserDiv} from './Landingstyles'
import image2 from './images/astronaut.png'; 
import UseButton from '../../useButton';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../UserContext';
import { LogoutOutlined } from '@ant-design/icons';



const Landing: React.FC<{}> = ( 
) => { 

  const {user, setUser} = useGlobalContext()

  const guestUser = 'Guest'

  return(
    <Container>
    <UserDiv>
      <h3>Welcome {user}!</h3>
      {user === guestUser! || <button onClick={() => setUser('Guest')}><LogoutOutlined/>
      </button>}
    </UserDiv>
      <Wrapper>
        <ContentText>
          <TitleH1>Space Travel</TitleH1>
          <TitleH3>is not a dream anymore</TitleH3>
          <ContentP>Our mission is the transportation of passengers to the planets of solar system. Well sit back, and relax because we’ll give you a truly out of this world experience!</ContentP>
          <UseButton  type='link'><Link to='/'></Link>Get Started</UseButton>                     
        </ContentText>
        <Square></Square>
        <Img1 src={image2}></Img1>
      </Wrapper>
    </Container>
  )
}

export default Landing 



