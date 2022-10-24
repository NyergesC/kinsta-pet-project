import styled from "@emotion/styled"
import {Link} from 'react-router-dom';


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
    marginLeft:" 32px",
    textDecoration:"none",
    color:"#fff",
    fontWeight:"700",
    marginTop:"8px",
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
    maxWidth:"1000px",
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
    fontSize: "4rem",
    marginBottom:"0"
}) ) 
export const AuthorP = styled.p(() => ({  
    fontSize: "1rem",
    
}) ) 
export const BodyP = styled.p(() => ({  
    fontSize: "1rem",
    maxWidth:"700px",
    width:"auto",
    
}) ) 
