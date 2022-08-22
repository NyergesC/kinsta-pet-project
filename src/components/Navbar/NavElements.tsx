import styled from '@emotion/styled'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'



/*  ${({scrollNav}) => (scrollNav ? '#000000' : 'transparent')}; */
export const NavBar = styled.nav`
    width:100%;
    background: transparent;  
    height: 60px;
    display: flex;
    margin-top: -60px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:10; 
    transition-propery:height, backround;
    transition: 0.5s ease;
    font-family: 'Poppins', sans-serif;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

/* max-width: 1200px;
padding: 0 24px; */
/* export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 200px;
`; */
export const NavbarContainer = styled.div`
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items:center
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 200px;
    transition: 0.3s all ease;

    @media screen and (max-width: 960px) {
        padding: 0 50px;
    }
    @media screen and (max-width: 768px) {
        padding: 5px 20px;
    }
`;
export const NavItems = styled.div`
    display:flex;
    justify-content:space-between;   

`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow:0 5px 25px rgba(0,0,0,0.1);

    &:hover{
        color: #fff;
    }


    @media screen and (max-width: 768px) {
        margin: 0 0 0 10px;
    }
`; 

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 5%);
        font-size: 1.6rem;
        cursor: pointer;
        color: #fffcfc;
    }

`


export const NavMenu =  styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and (max-width: 768px){
        display: none;

    }
`

export const NavItem = styled.li`
    height: 60px;   

`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    padding: 38px 1rem;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &:hover{
        color: #fff;
        transition: 0.3s all ease-in-out;
        border-bottom: 3px solid #fff;
    }

    &:active{
    }
`
export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 768px){
        display:none
    }

`

export const NavBtnLink = styled(LinkR)`
    border-radius: 12px;
    background: #fff;
    white-space: nowrap;
    color: #000000;
    padding: 8px 18px;
    font-size: 16px;
    font-weight:600;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color:#000000;
    }

`