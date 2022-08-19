import styled from "@emotion/styled"


export const SwiperItem = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center
`
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
    max-width:1200px;
    width: 100%;
    color: white;
    margin: 0 200px;
    transition: 0.3 ease;
`

export const ContentH2 = styled.h2`
    color: white;
    font-size: 4em;
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

