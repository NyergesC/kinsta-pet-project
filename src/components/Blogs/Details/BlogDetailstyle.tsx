import styled from "@emotion/styled"
import {Link} from 'react-router-dom';
import { Button } from "antd";

export const Container = styled.div(() => ({  
    height:"100vh",
    width:"100%",
    position:'relative',
}) )

export const Img = styled.img(() => ({  
    width:'100%',
    height:'100vh',
    objectFit:'cover',
    position:'absolute',
    zIndex:"-1"
}) )   

export const Icon = styled(Link)(() => ({ 
    position:'absolute',
    left:'32px',
    top:'10px',
    textDecoration:"none",
    color:"#fff",
    fontWeight:"700",
    fontSize:"1.5rem",
    letterSpacing: "2px",
    textTransform: "uppercase",

    ':hover':{
        color:" #ffffff",
    },

    '@media screen and (max-width: 480px)':{
    marginLeft:"16px",
    marginTop:"8px"
    }

}) )     
export const Wrapper = styled.div(() => ({  
    height:"100%",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

    '@media screen and (max-width: 400px)':{
    height:"80%"
    },
}) )
    


export const Content = styled.div(() => ({  
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    maxWidth:"700px",
    width:"auto",
    height:"auto",
    background: "rgba(255,255,255, 0.3)",
    padding:"40px 30px",
    borderRadius:"4px",
    boxShadow: "rgb(0 0 0 / 90%) 0px 2px 8px",
    backdropFilter: "blur(10px)",


    '@media screen and (max-width: 480px)':{
    padding:"10px",
    }
}) ) 

export const TitleH2 = styled.h2(() => ({  
    fontSize: "4.5rem",
    marginBottom:"10px",
    lineHeight:"1em",
    
}) ) 
export const AuthorP = styled.p(() => ({  
    fontSize: "1rem",
    textTransform:"uppercase",
    color:"grey"
    
}) ) 
export const AuthorSpan = styled.span(() => ({  
    fontSize: "1rem",
    textTransform:"uppercase",
    color:"grey",
    
}) ) 
export const BodyP = styled.p(() => ({  
    fontSize: "1rem",
    maxWidth:"700px",
    width:"auto",
    
}) ) 
export const QuoteDiv = styled.div(() => ({  
    maxWidth:'400px',
    width:'auto',
    height:'auto',
    margin: '15px auto',
    display:"flex",
    justifyContent:"center",

    
}) ) 
export const SmallH4 = styled.h4(() => ({  
    maxWidth:'380px',
    width:'auto',
    height:'auto',
    fontSize: "1.5rem",
    fontWeight:'400',
    margin:"0 auto",
    color:"black",
    textAlign:'center'

    
}) ) 
export const ButtonDiv = styled.div(() => ({  
    maxWidth:"650px",
    width:"auto",
    display:"flex",
    justifyContent:"space-between"
    
}) ) 
export const ButtonEdit = styled(Button)(() => ({  
    width:"200px",
    background:"#090154",
    border:"none" ,  
    color: "white", 
    
    ':hover': {
        background:"#090154",
        textDecoration: "none",
        border:'none',
        color:'white',
        },   
    
    
}) ) 
export const ButtonDelete = styled(Button)(() => ({  
    width:"200px",
    border:"2px solid #090154 " ,  
    color: "#090154", 
    background:"none",
    
    ':hover': {
        textDecoration: "none",
        background:'none',
        border:"2px solid #090154 " ,
        color: "#090154"
        },   
    
    
}) ) 
