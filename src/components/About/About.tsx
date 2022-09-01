import React from 'react'
import {AboutSpace, MainSpace, TitleH2, TitleH6, Image1, Image2, Par} from './Aboutstyles'
import image from './images/astronaut2.jpg'
import image2 from './images/astronaut4,5.jpg'


const AboutUs = () => {
  return (
    <AboutSpace>
        <Image1 src={image}></Image1>
        <Image2 src={image2}></Image2>  
        
        <MainSpace direction='vertical'>
            <TitleH6 >Learn by Exploring</TitleH6>
            <TitleH2>Your are only 3 steps away from your biggest journey in your life</TitleH2>
            <Par>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</Par>
        </MainSpace>
    
    </AboutSpace>
  )
}

export default AboutUs
