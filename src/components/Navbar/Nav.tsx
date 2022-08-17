import React from 'react'
import {FaBars} from 'react-icons/fa'
import  {IconContext} from 'react-icons'
import {NavBar, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavElements'
import * as data from './links.json'
/* import { animateScroll as scroll} from 'react-scroll' */

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

interface Link {
    label: string,
    href: string
}

const Links: React.FC<{ links: Link[] }> = ( { links }) => {
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
  return (
    <IconContext.Provider value={{color:'#fff'}}>
        <NavBar>
            <NavbarContainer>
                <NavLogo to="/">Logo</NavLogo> 
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <Links links={links} /> 
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>  
            </NavbarContainer>
        </NavBar>
    </IconContext.Provider>
  )
}

export default Nav