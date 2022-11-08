import styled from "@emotion/styled";
import {Link} from 'react-router-dom'
import { Card} from 'antd';
import background from "./images/shuttle.jpg";


export const Container = styled.div(() => ({  
    minHeight:'100vh',
    width:"100%",
    position:'relative',
    background:'black',
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
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

export const SearchDiv = styled.div(() => ({  
    height:'35vh',
    width:"100%",
    background:  `linear-gradient(360deg, black 20%, transparent 78%), url(${background})`,
    /* linear-gradient(325deg, black 58%, transparent 68%), */
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundPosition: "center",
    backgroundSize: "cover",

}) )

export const Title = styled.h2(() => ({  
    fontSize: "5rem",
    marginBottom:"50px",
    lineHeight:"1em",
    color:'white'
    
}) ) 

export const IconDiv = styled.div(() => ({  
    height:'220px',
    maxWidth:'1200px',
    width:"100%",
    background:  'black',
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderTop:'1px solid white',
    padding:'40px 0'

}) )
export const List = styled.div(() => ({  
    height:'150px',
    maxWidth:'1200px',
    width:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',


}) )
export const Icons= styled.div(() => ({  
    height:'100px',
    width:"100%",
    background:  'black',
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'

}) )
export const SubTitle = styled.h3(() => ({  
    color:'white',
    fontSize:'2rem',
    textAligns:'center',

}) )
export const IconP = styled.p(() => ({  
    color:'white',
    fontSize:'1rem',
    textAligns:'center',
    marginTop:'10px',

}) )
export const CardWrapp = styled.div(() => ({  
    minHeight:'50vh',
    maxWidth:'1900px',
    width:"100%",
    background:'black',
    display:"flex",
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    padding: "20px 10px"

}) )
export const CardS = styled.div(() => ({  
    height:'600px',
    maxWidth:'850px',
    width:"100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:"70px 12px",
    borderRadius:"4px",
    boxShadow: "rgb(47 79 79/ 80%) 0px 2px 8px",
    margin:'30px 30px',
    gap:'0 30px',

}) )

export const LeftSide = styled.div( () => ({
    maxWidth:'300px',
    width:"100%",
    transition:'0.3s all ease',   
    display:'flex',
    alignItems:'center',
    justifyContent:'cennter',

 

  }) )

export const Img = styled.img( () => ({
    width:'300px',
    '@media screen and (max-width: 960px)': {
        maxWidth:'350px',
     
     },     

  }) )

  export const RightSide = styled(Card)( () => ({
    maxWidth:'400px',
    width:"100%",
    height:'500px',
    borderRadius: "10px",
    border:'none',
    background:'transparent',
    transition:'0.3s all ease',
    div:{
        h6:{
            fontSize: '1.3em',
            color:'grey',
            textAlign:'left',
            marginBottom:'5px',
            textTransform:'uppercase',
            letterSpacing:'0.2em',

        },

        h2:{
            fontSize: '5em',
            color:'white',
            textAlign:'left',
            marginBottom:'40px',
            textTransform:'uppercase',
        },
        p:{
            color:'white',
            maxWidth:'400px',
            width:'100%',
        }
    },
    '@media screen and (max-width: 1200px)': {
        maxWidth:'400px',
     
     },
    
  }) )

export const Details = styled.div( () => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    maxWidth:'350px',
    width:'100%',
    div:{
        textAlign:'center',
        h4:{
            color:'white',
            fontSize:'1.6em',
            marginTop:'50px',
            textTransform:'uppercase',
            letterSpacing:'0.1em',
        },
        p:{
            fontSize:'1.6em'
        }
    }
}) )
export const SearchInput = styled.input( () => ({
  background:'transparent',
  border:'1px solid white',
  color:"white",
  width:"400px",
  height:'39px',
  padding:'0 5px'

  
}) ) 
export const SearchBtn = styled.button( () => ({
  height:'39px',
  width:'70px',

  
}) ) 
export const RevBtn = styled.button( () => ({

  
}) ) 
