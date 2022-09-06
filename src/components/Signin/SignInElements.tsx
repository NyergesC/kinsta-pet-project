import styled from "@emotion/styled";
import {Link} from 'react-router-dom'

export const Container = styled.div(() => ({  
    backgroundImage: "url('https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    height:"100vh",
    width:"100%",
    bottom:"0",
    left:"0", 
    top:"0",
    zIndex:"0",
    overflow:"hidden",
    backgroundRepeat:"no-repeat",
    position:"fixed",
    backgroundSize:"cover",
    }) )
    
    
    
    export const FormWrap = styled.div(() => ({  
    height:"100%",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    
    
        '@media screen and (max-width: 400px)':{
        height:"80%"
        },
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
    
    export const FormContent = styled.div(() => ({  
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    
    
    '@media screen and (max-width: 480px)':{
    padding:"10px",
    }
    }) )   
    
    export const FormH1 = styled.h1(() => ({  
    marginBottom:"10px",
    color:"#000000",
    fontSize:"32px",
    fontWeight:"600",
    textAlign:"center",
    
    }) )
    export const FormH4 = styled(FormH1)(() => ({  
    fontSize:"16px",
    marginBottom:"30px",
    color:"#585858",
    fontWeight:600,
    
    }) )
    
    export const FormPassword = styled.div(() => ({ 
    width:"100%",
    textAlign:"center",
    marginBottom:"20px",
    
    }) )
    
    export const FormMember = styled(FormPassword)(() => ({  
    marginBottom:"0",
    }) )
    
    export const MemberP = styled.p(() => ({ 
    color: "grey",
    fontSize:"16px",
    }) )
    export const MemberSpan = styled.span(() => ({ 
    color:"#6C63FF",
    fontSize:"14px",
    fontWeight:"600",
    marginLeft: "3px",
    
    }) )