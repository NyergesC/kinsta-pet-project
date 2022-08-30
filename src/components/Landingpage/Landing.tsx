import React from 'react'
import {  Container, Wrapper, ContentText, TitleH1, TitleH3, ContentP, Img1, Square, BaseButton} from './Landingstyles'
import image2 from './images/astronaut.png'; 


const Landing: React.FC<{}> = () => { 

  return(
    <Container>
      <Wrapper>
        <ContentText>
          <TitleH1>Space Travel</TitleH1>
          <TitleH3>is not a dream anymore</TitleH3>
          <ContentP>Our mission is the transportation of passengers to the planets of solar system. Well sit back, and relax because we’ll give you a truly out of this world experience!</ContentP>
          <BaseButton>Explore</BaseButton>
        </ContentText>
        <Square></Square>
        <Img1 src={image2}></Img1>
      </Wrapper>
    </Container>
  )
}

export default Landing 



