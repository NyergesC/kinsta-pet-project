import styled from "@emotion/styled"
import { Link as LinkS} from 'react-scroll'


export const SwiperItem = styled.div`
    position:relative;
    height: 100vh;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

  
 `
export const SlideImage = styled.img`    
    position:relative;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    pointer-events: none;
    filter:brightness(80%)

`
export const Content = styled.div`
    position:absolute;
    max-width:1200px;
    top:30%;
    left:0;
    width: 100%;
    color: white;
    margin: 0 200px;
    transition: 0.3 ease;
`

    
export const ContentH2 = styled.h2`
    color: white;
    font-size: 4.5em;
    font-weight: 700;
    text-shadow: 0 5px 25px rgba(0,0,0,0.1);
    margin-bottom: 20px;    
`

export const ContentP = styled.p`
    max-width: 700px;
    background: rgba(255,255,255, 0.1);
    backdrop-filter: blur(10px);
    text-shadow: 0 5px 25px rgba(0,0,0,0.1);
    padding: 20px;
    border-radius: 10px;
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    border-right: 1px solid rgba(255,255,255, 0.1);
    box-shadow: 0 5px 25px rgba(0 0 0 / 20%);
    
`
export const Button = styled(LinkS)`
    position: absolute;
    margin-top: 40px;
    background-color: white;
    color: black;
    font-size: 1em;
    font-weight: 500;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    `
 export const BsArrowRight= styled.i`
    font-size: 1.6em;
    margin-left: 3px;
    transition: 0.3s ease;
    
    &:hover{
        transform: translateX(5px);
    }
    `
