import React from 'react'
import {  Container, Wrapper, ContentText, TitleH1, TitleH3, ContentP, Img1, Square, BaseButton} from './Landingstyles'
import image2 from './images/astronaut.png'; 
/* import {  SwiperItem, SlideImage, Content, ContentH2, ContentP, Button } from './LandingElements' */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { swipers } from './Swiperdata';
import { EffectFade } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/effect-fade'
import { BsArrowRight} from 'react-icons/bs'


/* interface SlideItem {
    imageSrc: string,
    imageAlt: string,
    title: string,
    text: string,
}

export const Landing: React.FC<{}> = () => { 

  return (
    <Swiper
        loop={true}
        speed={800}
        scrollbar={{ draggable:true}}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
     
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade] }
        effect={'fade'}
        >       
        <>{swipers.map((slide: SlideItem) => {
            return (
                <SwiperSlide  key={slide.imageAlt} > 
                    <SwiperItem>
                        <SlideImage src={slide.imageSrc} alt={slide.imageAlt}></SlideImage>                
                        <Content>
                            <ContentH2>{slide.title}</ContentH2>
                            <ContentP>{slide.text}</ContentP>
                            <Button to="/">Go to Challenge <BsArrowRight style={{marginLeft:"4px", fontSize:"1.4em", transition:"0.3s ease" }} 
                            onMouseOver={({target}:any)=>target.style.transform=" translateX(4px)"}
                            onMouseOut={({target}:any)=>target.style.transform=" translateX(-1px)"}
                            /></Button>             
                        </Content>                         
                    </SwiperItem>     
                </SwiperSlide>        
             )
         })}
        </>
    </Swiper>
  )
  } */
const Landing: React.FC<{}> = () => { 

  return(
    <Container>
      <Wrapper>
        <ContentText>
          <TitleH1>Space Travel</TitleH1>
          <TitleH3>is not a dream anymore</TitleH3>
          <ContentP>Our mission is the transportation of passengers to the planets of solar system</ContentP>
          <BaseButton>Explore</BaseButton>
        </ContentText>
        <Square></Square>
        <Img1 src={image2}></Img1>
      </Wrapper>
    </Container>
  )
}

export default Landing 



