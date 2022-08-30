import styled from "@emotion/styled";
import { Card } from 'antd';
import image from './images/background.jpg'; 


export const Slide = styled.div( () => ({
    width:"100%",
    height:"100vh",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    backgroundImage:`url(${image})`,
    backgroundSize:"cover",
    backgroundPosition:"center center", 

  }) )

export const LeftSide = styled.div( () => ({
    width:"600px",
  }) )

export const Img = styled.img( () => ({

  }) )

export const RightSide = styled(Card)( () => ({
    width:"600px",
    height:'500px',
    background: "rgba(255,255,255, 0.05)",
    backdropFilter: "blur(10px)", 
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255, 0.05)",
    boxShadow:" 0 5px 25px rgba(0 0 0 / 20%)",
    div:{

        h2:{
            fontSize: '5em',
            color:'white',
            textAlign:'center',
            marginBottom:'50px',
        },
        p:{
            color:'white',
            maxWidth:'400px',
            width:'100%',
            margin:'0 auto',
        }
    },
    
  }) )

export const Details = styled.div( () => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    div:{
        textAlign:'center',
        h4:{
            color:'white',
            fontSize:'2em',
            marginTop:'50px',
        },
        p:{
            fontSize:'1.8em'
        }
    }
}) )

