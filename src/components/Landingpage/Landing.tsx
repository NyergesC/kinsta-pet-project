import React from 'react'
import {  SwiperWrapper, SlideImage, Content, ContentH2, ContentP } from './LandingElements'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';
import { swipers } from './Swiperdata';
import 'swiper/css/bundle'
import { EffectFade } from 'swiper'
import 'swiper/css/effect-fade'


interface SlideItem {
    imageSrc: string,
    imageAlt: string,
    title: string,
    text: string
}



export const Landing: React.FC<{}> = () => { 

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
/*         navigation={true} */
        modules={[Autoplay, Pagination, Navigation, EffectFade] }
        effect={'fade'}

        >
       
        <SwiperWrapper>{swipers.map((slide: SlideItem) => {
            return (
                <SwiperSlide  key={slide.imageAlt} >      
                    <SlideImage src={slide.imageSrc} alt={slide.imageAlt}></SlideImage>                
                    <Content>
                        <ContentH2>{slide.title}</ContentH2>
                        <ContentP>{slide.text}</ContentP>
                    </Content>
                </SwiperSlide>
        
             )
         })}
        </SwiperWrapper>
    </Swiper>
  )
    }

export default Landing
