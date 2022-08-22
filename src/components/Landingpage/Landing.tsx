import React from 'react'
import {  SwiperItem, SlideImage, Content, ContentH2, ContentP, Button } from './LandingElements'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { swipers } from './Swiperdata';
import { EffectFade } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/effect-fade'
import { BsArrowRight} from 'react-icons/bs'


interface SlideItem {
    imageSrc: string,
    imageAlt: string,
    title: string,
    text: string,
}

export const Landing: React.FC<{}> = () => { 

  return (
    <Swiper
        loop={true}
        speed={900}
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
/*         navigation={true} */
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
                            <Button to="/">Go to Challenge <BsArrowRight style={{marginLeft:"4px", fontSize:"1.6em", transition:"0.3s ease" }} 
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
  }

export default Landing 

/*  export const Landing: React.FC<{}> = () => { 

  return (
    <Swiper
        loop={true}
        speed={500}
        scrollbar={{ draggable:true}}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination, Navigation] }

        >       
        <>{swipers.map((slide: SlideItem) => {
            return (
                <SwiperSlide  key={slide.imageAlt}>
                    <SwiperItem> 
                        {( { isActive }: boolean ) => (
                          <div>Current Slide Is {isActive ? 'active' : 'not Active'}</div>
                          )
                        }                   
                        <SlideImage src={slide.imageSrc} alt={slide.imageAlt}></SlideImage>                
                            <Content>
                                <ContentH2>{slide.title}</ContentH2>
                                <ContentP>{slide.text}</ContentP>
                            </Content>          
                        
                    </SwiperItem>   
                </SwiperSlide>        
             )
         })}
        </>
    </Swiper>
  )
    }

export default Landing  */

