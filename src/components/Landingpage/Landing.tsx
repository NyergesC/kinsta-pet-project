import React from 'react'
import { SwiperContainer, SwiperWrapper, SlideImage, Content, ContentH2, ContentP } from './LandingElements'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
/* import SwiperCore from 'swiper' */
import 'swiper/css';
/* import * as data from './Swiper' */
import { swipers } from './Swiperdata';
import 'swiper/css/bundle'


interface SlideItem {
    imageSrc: string,
    imageAlt: string,
    title: string,
    text: string
}

/* const SwiperItem: React.FC<{ swipers: SlideItem[] }> = ( { swipers }) => { 
    console.log(swipers)
    return (
        <SwiperWrapper>{swipers.map((slide: SlideItem) => {
            return (
                <SwiperSlide key={slide.imageAlt}>                
                    <SlideImage src={slide.imageSrc} alt={slide.imageAlt}></SlideImage>                
                    <Content>
                        <ContentH2>{slide.title}</ContentH2>
                        <ContentP>{slide.text}</ContentP>
                    </Content>
                </SwiperSlide>
            )
        })}
        </SwiperWrapper>
)
};

export const Landing: React.FC<{ }> = ( ) => { 
  return (
    <Swiper
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true}}
        scrollbar={{ draggable:true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperContainer>
            <SwiperItem swipers={swipers} />
        </SwiperContainer>
    </Swiper>
  )
}

export default Landing */


/* const SwiperItem: React.FC<{ swipers: SlideItem[] }> = ( { swipers }) => { 
    console.log(swipers)
    return (
            )
        })}

)
};
 */
export const Landing: React.FC<{}> = ( ) => { 
  return (
    <Swiper
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true}}
        scrollbar={{ draggable:true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
       
        <SwiperWrapper>{swipers.map((slide: SlideItem) => {
            return (
                <SwiperSlide key={slide.imageAlt}>                
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
