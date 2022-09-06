import styled from "@emotion/styled";
import {Link} from 'react-router-dom';
import { Button, Form } from 'antd';

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
export const FormWrapper = styled(Form)(() => ({  
    maxWidth:"600px",
    width:"100%",
    height:"auto",
    background: "rgba(255,255,255, 0.3)",
    padding:"70px 12px",
    borderRadius:"4px",
    boxShadow: "rgb(0 0 0 / 90%) 0px 2px 8px",
    backdropFilter: "blur(10px)",
    display:"grid",
    justifyContent:"center"
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
    color:"#090154",
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
export const FP = styled.p(() => ({  
    color:"#090154", 
    fontWeight:"600"
}) )

export const MemberP = styled.p(() => ({ 
    color: "grey",
    fontSize:"16px",
}) )
export const MemberSpan = styled.span(() => ({ 
    color:"#090154",
    fontSize:"14px",
    fontWeight:"600",
    marginLeft: "3px",

}) )
export const LoginButton  = styled(Button)(() => ({ 
    width:"300px",
    background:"#090154",
    border:"none"         

}) )