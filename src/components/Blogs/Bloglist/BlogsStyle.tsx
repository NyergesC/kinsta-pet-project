import styled from "@emotion/styled";
import {Button} from 'antd';
import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';

export const Container = styled.div(() => ({
    width:'100%',
    minHeight:'100vh',
    position:'relative',
    background:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',


}) )
export const Wrapper = styled.div(() => ({
    maxWidth:'600px',
    width:'100%',
    minHeight:'100vh',
    margin: '0 10px',
    display:'block',
    justifyContent:'center',
    alignItems:'center',
    
}) )
export const Blogwrapper = styled.div(() => ({
    maxWidth:'600px',
    width:'100%',
    margin: '50px 0',
    transition:'0.2s all ease-in-out',

    ':hover':{
        boxShadow:" 0 5px 25px rgba(0 0 0 / 10%)", 
    },

    '@media screen and (max-width: 1650px)': {
        maxWidth:'500px',
        width:'100%',
    }


}) )
export const ButtonWrap = styled.div(() => ({
    maxWidth:'600px',
    width:'100%',
    margin: '50px 0',
    display:"flex",
    justifyContent:'space-between'
    
}) )


export const Date = styled.p(() => ({
    fontSize:'1em',
    color:'grey',
    marginTop:'5px',

}) )
export const TextH2 = styled.h2(() => ({
    color:'black',
    marginBottom:'0',
    fontSize:'1.8em',
    

}) )
export const TextP = styled.p(() => ({
    fontSize:'1em',
    maxWidth:'600px',
    width:'100%',
    color:'black',
    

}) )
export const TextRead = styled(TextP)(() => ({
    fontSize:'0.8em',
    color:'#7f33b0', 
    textTransform:'uppercase',
    letterSpacing:'0.1em'   

}) )
export const StarSpan = styled.span(() => ({
    
    'ul':{
        color:'#7f33b0',
    }   
    
}) )
export const SortButton = styled(Button)(() => ({
    width:'150px',
    height:"50px",
    border:'2px #7f33b0 solid',
    color:'#7f33b0',
    transition:'0.2s all ease',
    textTransform:'uppercase',

    ':hover': {
        border:'2px solid black',
        color:'black',
    }
    
      

}) )
export const AddButton = styled(Link)(() => ({  
    backgroundImage: "linear-gradient(45deg, #7f33b0, #7f33b0) ",
    color:'white',
    display:'flex',
    width:'150px',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    textTransform:'uppercase',
    transition:'0.2s all ease',
    
    ':hover': {
            backgroundImage: "linear-gradient(45deg, #7f33b0, #ca4bcc ) ",
            textDecoration: "none",
            color:'white',
        }

}) )
export const Plus = styled(PlusOutlined)(() => ({  
        marginRight:'10px',
    

}) )
export const Image1 = styled.img(() => ({  
        position:'absolute',
        width:'350px',
        top:'-5%',
        left:'200px',
        transition:'0.3s all ease',
        zIndex:"1",

        '@media screen and (max-width: 1650px)': {
            width:"300px",
            left:'100px'

         },
    

}) )
export const Image2 = styled.img(() => ({  
        position:'absolute',
        width:'350px',
        bottom:'100px',
        left:'200px',
        transition:'0.3s all ease',

        '@media screen and (max-width: 1650px)': {
            width:"300px",
            left:'100px'

         },
            

    

}) )
export const Image3 = styled.img(() => ({  
        position:'absolute',
        width:'350px',
        bottom:'100px',
        right:'140px',
        transition:'0.3s all ease',

        
    '@media screen and (max-width: 1650px)': {
        width:"300px",
        right:'100px',
     },
        

}) )

export const Three = styled.div( () => ({
    display:'flex',
    alignItems:'center',
    maxWidth:'100px',
    width:'100%',
    position:'absolute',
    top:"12%",
    right:'20%',
    zIndex:'100',
    transition:'0.3s all ease',
        h2:{
            color:'#7f33b0',
            fontSize:'15em',
            textTransform:'uppercase',
            fontWeight:'300',
        },
        span:{
            fontSize:'1.8em',
            color:'grey',
            textTransform:'uppercase',
            marginTop:'20px',
            marginRight:'5px',
        },

    '@media screen and (max-width: 1650px)': {
       h2:{
        fontSize:'12em',
    },
       span:{
        fontSize:'1.6em',
    },
    
    },
    '@media screen and (max-width: 1200px)': {
        top:"20%",
        h2:{
            fontSize:'10em',
        },
           span:{
            fontSize:'1.4em',
        }
    },
        
    '@media screen and (max-width: 960px)': {
        right:'15%',

    },
    
}) )
