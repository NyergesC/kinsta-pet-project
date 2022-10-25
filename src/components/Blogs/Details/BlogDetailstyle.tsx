import styled from "@emotion/styled"
import {Link} from 'react-router-dom';
import { Button } from "antd";
import background from "./images/outerspace2.jpg";

export const Container = styled.div(() => ({  
    minHeight:'100vh',
    width:"100%",
    position:'relative',
    background:'black',
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


export const Content = styled.div(() => ({  
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
   
}) ) 

export const Div1 = styled.div(() => ({  
    minHeight:"40vh",
    width:"100%",
    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    background:'black',

    '@media screen and (max-width: 400px)':{

    },
}) )
export const Div2 = styled.div(() => ({  
    position: "relative",
    minHeight:"30vh",
    height:'auto',
    width:"100%",
    display:"flex",
    flexDirection:'column',
    backgroundImage: `url(${background})`,
    justifyContent:"center",
    alignItems:"center",
    backgroundAttachment: 'fixed',
    backgroundPosition: "center top",
    backgroundSize: "cover",
    filter: "contrast(1.3)",
    zIndex: "0",

    '@media screen and (max-width: 400px)':{
    height:"80%"
    },
}) )


export const Div3 = styled.div(() => ({  
    height:'auto',
    width:"100%",
    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    background:'black',

    '@media screen and (max-width: 400px)':{
    height:"80%"
    },
}) )
    

export const TitleH2 = styled.h2(() => ({  
    fontSize: "4.5rem",
    marginBottom:"10px",
    lineHeight:"1em",
    color:'white'
    
}) ) 
export const AuthorP = styled.p(() => ({  
    textTransform:"uppercase",
    fontSize: '1.1em',
    color:'grey',
    textAlign:'left',
    marginBottom:'5px',
    letterSpacing:'0.2em',


    
}) ) 
 
export const QuoteDiv = styled.div(() => ({  
    maxWidth:'500px',
    width:'auto',
    height:'auto',
    marginTop:'20px',
    display:"flex",
    justifyContent:"center",
    

    
}) ) 
export const SmallH4 = styled.h4(() => ({  
    maxWidth:'480px',
    width:'auto',
    height:'auto',
    fontSize: "1.5rem",
    fontWeight:'400',
    margin:"0 auto",
    color:"white",
    textAlign:'center'

    
}) ) 
export const BodyP = styled.p(() => ({  
    fontSize: "1rem",
    maxWidth:"1000px",
    width:"100%",
    color:'white',
    margin:'35px 0',
    letterSpacing:'0.1em',
    fontWeight:'300',
    
}) ) 

export const ButtonDiv = styled.div(() => ({  
    maxWidth:"900px",
    width:'100%',
    display:"flex",
    justifyContent:"space-between",
    marginTop:'20px',
    marginBottom:'40px'
    
}) ) 
export const ButtonEdit = styled(Button)(() => ({  
    width:"200px",
    height:'50px',
    letterSpacing:'0.1em',
    textTransform:'uppercase',
    background:"#7f33b0",
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
    height:'50px',
    letterSpacing:'0.1em',
    textTransform:'uppercase',
    border:"2px solid #7f33b0" ,  
    color: "#7f33b0", 
    background:"none",
    
    ':hover': {
        textDecoration: "none",
        background:'none',
        border:"2px solid #090154 " ,
        color: "#090154"
        },   
    
    
}) ) 
