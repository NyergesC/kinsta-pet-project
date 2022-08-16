import styled from '@emotion/styled'
import { Link as LinkR} from 'react-router-dom'



/*  ${({scrollNav}) => (scrollNav ? '#000000' : 'transparent')}; */
/*     margin-top: -80px; */
export const NavBar = styled.nav`
    width:100%;
    background: #000000;  
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:10; 
    transition-propery:height, backround;
    transition: 0.5s ease;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    padding: 0 24px;
`;

 export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow:0 5px 25px rgba(0,0,0,0.1);

`; 