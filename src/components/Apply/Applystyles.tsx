import { Form, Input, Select, Button} from 'antd';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom'

export const Container = styled.div(() => ({  
    height:"100vh",
    width:"100%",
    backgroundImage: "linear-gradient(45deg, #fff , #caa8f7) ",
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
export const FormWrapper = styled(Form)(() => ({  
    maxWidth:"600px",
    width:"100%",
    height:"600px",
    background:'white',
    padding:"20px 12px",
    borderRadius:"4px",
    backdropFilter: "blur(10px)",
    display:"grid",
    justifyContent:"center"
}) )

export const Icon = styled(Link)(() => ({ 
    marginLeft:" 32px",
    textDecoration:"none",
    color:"#090154",
    fontWeight:"700",
    marginTop:"8px",
    fontSize:"1.5rem",
    letterSpacing: "2px",
    textTransform: "uppercase",

    ':hover':{
        color:" #7f33b0",
    },

    '@media screen and (max-width: 480px)':{
    marginLeft:"16px",
    marginTop:"8px"
    }

}) )     

export const FormContent = styled.div(() => ({  
    height:"600px",
    maxWidth:"1200px",
    width:'100%',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:'0 auto',
    boxShadow: "rgb(0 0 0 / 90%) 0px 2px 8px",
    
    '@media screen and (max-width: 480px)':{
    padding:"10px",
    }
    }) )  
        
    export const FormH1 = styled.h1(() => ({  
        marginBottom:"10px",
        color:"#090154",
        fontSize:"28px",
        fontWeight:"600",
        textAlign:"center",
        
        }) )
        

    export const ImgDiv = styled.div(() => ({  
        maxWidth:"600px",
        width:'100%',
        objectFit:'cover',
        height:'100%'
    
    }) )  
    export const Img = styled.img(() => ({  
        width:'100%',
        objectFit:'cover',
        height:'100%',
    
    
    }) ) 

  export const FormItem = styled(Form.Item)( () => ({
      maxWidth:'600px',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      marginBottom:"25px",
      margin: '10px auto',

  }))
  export const Inputfield= styled(Input)( () => ({
      width:'300px',


  }))
  export const SelectField= styled(Select)( () => ({
      width:'300px',

  
  }))

  export const ApplyButton = styled(Button)(() => ({ 
    width:"300px",
    borderRadius: "4px",
    background:"#090154",
    border:"none",
    transition:'0.2s all ease',
    
    ':hover': {
        background:'black',
        backgroundImage: "linear-gradient(45deg, #ca4bcc , #090154) ",
        textDecoration: "none",
        border:'none',
        color:'white',
    }, 

}) )



