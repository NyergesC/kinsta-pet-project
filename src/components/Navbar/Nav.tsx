
import React, { useContext, useState } from "react";
import {FaBars} from 'react-icons/fa'
import  {IconContext} from 'react-icons'
import {NavBar, NavbarContainer, NavItems, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavElements'
import * as data from './links.json'
import { useGlobalContext } from "../../UserContext";

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

interface Link {
    label: string,
    href: string
}

type Links = {
    links: Link[]
}

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

    const msg = useGlobalContext().user
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
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                    <div>
                        <h2 style={{color:'white'}}>Hello {msg}</h2>
                    </div>  
                </NavItems>
            </NavbarContainer>
        </NavBar>
    </IconContext.Provider>
  )
}

export default Nav 
