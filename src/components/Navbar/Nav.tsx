
import {FaBars} from 'react-icons/fa'
import  {IconContext} from 'react-icons'
import {NavBar, NavbarContainer, NavItems, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, UserDiv, OutButton, LogoutOutlinedS} from './NavElements'
import * as data from './links.json'
import { useGlobalContext } from "../../UserContext";
import {LinkR, Links} from './Types'
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../constants';

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

const LinkItem: React.FC<Links> = ( { links }) => {
    return (   
        <NavMenu>{links.map((link: LinkR) => {
            return(
                <NavItem key={link.href}>
                    <NavLinks to={link.href}>{link.label}</NavLinks>
                </NavItem>
            )
        })}
        </NavMenu>
 
    )
};

const Nav: React.FC<{}> = () => {
 
    const {user, setUser} = useGlobalContext()
    const guestUser = 'Guest'
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <IconContext.Provider value={{color:'#fff'}}>
        <NavBar>
            <NavbarContainer>
                <NavLogo to="/">Logo</NavLogo> 
                <NavItems>
                    <MobileIcon >
                        <FaBars />
                    </MobileIcon>
                    <LinkItem links={links} /> 

                    <NavBtn color='white'>{authToken ? <NavBtnLink to="/" onClick={() => { localStorage.removeItem(AUTH_TOKEN);  navigate(`/`); }} color='white' >Logout </NavBtnLink>  : (
                    <NavBtnLink to="/signin" color='white' > Login  </NavBtnLink> )}
                   </NavBtn>

                </NavItems>
            </NavbarContainer>
            <UserDiv>
                <h3>Hello {user}!</h3>
                {user === guestUser! || <OutButton onClick={() => setUser('Guest')}><LogoutOutlinedS/></OutButton>}
            </UserDiv> 
        </NavBar>
    </IconContext.Provider>
  )
} 

export default Nav 
