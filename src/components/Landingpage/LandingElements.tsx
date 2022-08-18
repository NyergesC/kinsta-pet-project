import styled from "@emotion/styled"
import { SwiperSlide } from "swiper/react"



export const SwiperWrapper = styled.div`
    position:relative;
    width:100%;
    height:100vh; 
    transition: opacity 0.6 ease, transform 0.3s ease   

`

/* backface-visibility: hidden;
overflow:hidden; */
/* export const SwiperSl = styled.(djv)`

    

` */
export const SlideImage = styled.img`
    height: 100vh;
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    pointer-events: none;
`

export const Content = styled.div`
    position:absolute;
    top:30%;
    left:0;
    width: 50%;
    color: white;
    margin: 0 200px;
    transition: 0.3 ease;

`
/* opacity: 0; */
export const ContentH2 = styled.h2`
    color: white;
    font-size: 4em;
    font-weight: 700;
    text-shadow: 0 5px 25px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    transform: translateY(-50px);
    opacity:0;

    &.active{
        transform: translateY(0);
        opacity: 1;
        transition: 1s ease;
        transition-delay: 0.3s;
        transition-property: transform, opacity;
    }

`
export const ContentP = styled.p`
    max-width: 700px;
    background: rgba(255,255,255, 0.1);
    backdrop-filter: blur(10px);
    text-shadow: var(--text-shadow);
    padding: 20px;
    border-radius: 10px;
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    border-right: 1px solid rgba(255,255,255, 0.1);
    box-shadow: 0 5px 25px rgba(0 0 0 / 20%);
    transform: translateX(-80px);
    
    `

