import React from 'react'
import {FaBars} from 'react-icons/fa'
import  {IconContext} from 'react-icons'
import {NavBar, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavElements'
import * as data from './links.json'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type Link = {
    label: string,
    href: string
}


const Nav: React.FC<{}> = () => {
  return (
    <IconContext.Provider value={{color:'#fff'}}>
        <NavBar>
            <NavbarContainer>
                <NavLogo to="/">Logo</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>{links.map((link: Link) => {
                    return(
                        <NavItem key={link.href}>
                            <NavLinks to={link.href}>{link.label}</NavLinks>
                        </NavItem>
                    )
                })}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </NavBar>
    </IconContext.Provider>
  )
}

export default Nav