
import {FaBars} from 'react-icons/fa'
import  {IconContext} from 'react-icons'
import {NavBar, NavbarContainer, NavItems, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, UserDiv, OutButton, LogoutOutlinedS} from './NavElements'
import * as data from './links.json'
import { useGlobalContext } from "../../UserContext";
import {Link, Links} from './Types'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

const LinkItem: React.FC<Links> = ( { links }) => {
    return (   
        <NavMenu>{links.map((link: Link) => {
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
                    <NavBtn>
                        <NavBtnLink to='/signin'>Login</NavBtnLink>
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
