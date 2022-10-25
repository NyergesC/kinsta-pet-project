
import {FaBars} from 'react-icons/fa'
import  {IconContext} from 'react-icons'
import {NavBar, NavbarContainer, NavItems, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, UserDiv, OutButton, LogoutOutlinedS} from './NavElements'
import * as data from './links.json'
import {LinkR, Links} from './Types'
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../constants';
import { useContext } from 'react';
import { LoginContext } from 'src/UserContext'
import {useDate} from '../../utils'

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

    const loginContext = useContext(LoginContext)
 
    const guestUser = 'Guest'
    const navigate = useNavigate();
    const { wish } = useDate()
    const authToken = localStorage.getItem(AUTH_TOKEN);

    const logOut = () => {
        loginContext.setUserContext({name:'Guest', email:"", id:""})
        localStorage.removeItem(AUTH_TOKEN)
        navigate(`/`)
    }



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

                    <NavBtn>{authToken ? <NavBtnLink to="/" onClick={() => { logOut() }}  >Logout</NavBtnLink>  : (
                    <NavBtnLink to="/signin" >Login</NavBtnLink> )}
                   </NavBtn>

                </NavItems>
            </NavbarContainer>
            <UserDiv>          
                {loginContext.userContext.name === guestUser ? <h3>Hello</h3> : <h3>{wish}</h3>}   
                <h3>{loginContext.userContext.name}!</h3>
                {loginContext.userContext.name === guestUser! || <OutButton onClick={() => logOut()}><LogoutOutlinedS/></OutButton>}
            </UserDiv> 
        </NavBar>
    </IconContext.Provider>
  )
} 

export default Nav 
