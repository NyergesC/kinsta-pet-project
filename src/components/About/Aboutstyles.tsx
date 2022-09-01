import styled from "@emotion/styled";
import {Space, } from 'antd'


export const AboutSpace = styled.div( () => ({
    width:"100%",
    height:'60vh',
    display:'flex',
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
}) )
export const MainSpace = styled(Space)( () => ({
    maxWidth:'600px',
    width:'100%',
    textAlign:'left',
    margin:'0 5px',
}) )


export const TitleH2 = styled.h2( () => ({
    color:'black',
    fontSize:'1.8em',
    textTransform:'uppercase'

}) )
export const TitleH6 = styled.h2( () => ({
    color:'grey',
    fontSize:'0.8em',
    textTransform:'uppercase',
    letterSpacing:'0.2em'


}) )
export const Image1 = styled.img( () => ({
    position:'absolute',
    maxWidth:'400px',
    width:'100%',
    height:'auto',
    top:'-20%',
    left:'200px',
    transition: '0.3s all ease',

    '@media screen and (max-width: 1650px)': {
        maxWidth:'350px',
        top:'-25%',
    },
    '@media screen and (max-width: 1200px)': {
        left:'50px',
    },
    '@media screen and (max-width: 768px)': {
        maxWidth:'300px',
        left:'20px',
    },


}) )
export const Image2 = styled.img( () => ({
    position:'absolute',
    maxWidth:'400px',
    width:'100%',
    height:'auto',
    bottom:'-32%',
    right:'10%',
    zIndex:'2',

    
    '@media screen and (max-width: 1650px)': {
        maxWidth:'350px',
        right:'5%',
    },
    '@media screen and (max-width: 1200px)': {
        right:'3%px',
        maxWidth:'320px'
    },
    '@media screen and (max-width: 768px)': {
        maxWidth:'250px',
        bottom:'-22%',
    },


}) )
export const Par = styled.p( () => ({
    fontSize:'1em',

}) )
