import styled from '@emotion/styled'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
/* import { LogoutOutlined } from '@ant-design/icons'; */
import {HiLogout} from 'react-icons/hi'



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
    font-family:'Kanit', sans-serif;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items:center
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 40px 0 200px;
    transition: 0.3s all ease;

    @media screen and (max-width: 1200px) {
        padding:  0 40px 0 50px;
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
export const NavBtn = styled.nav(() => ({
    display:"flex",
    alignItems:"center",

    '@media screen and (max-width: 768px)': {
        display:"none",
    }

}));

export const NavBtnLink = styled(LinkR)(() => ({
    border: "2px solid white",
    background: "transparent",
    whiteSpace: "nowrap",
    color: "#fff",
    padding:" 8px 18px",
    fontSize: "16px",
    fontWeight:"550",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",

    ':hover': {
        background:'black',
        border: "2px solid #7f33b0 ",
        textDecoration: "none",
        color:'#7f33b0',
    }
}));



export const UserDiv = styled("div")(() => ({
    width:'200px',
    height:"50px",
    display: "flex",
    alignItems:"center",
    gap: "10px",
    color:'#7f33b0e',
    'h3': {
        color:'white',
        marginTop:'5px',
    }
  }));
export const OutButton = styled('button')(() => ({
    background:'transparent',
  }));
export const LogoutOutlinedS = styled(HiLogout)(() => ({
    color:'white ',
    fontWeight:"700",   
    fontSize:'28px',
    marginTop:'5px',
  }));