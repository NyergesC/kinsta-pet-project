import styled from "@emotion/styled";
import { Card } from 'antd';


export const Slide = styled.div( () => ({
    width:"100%",
    height:"100vh",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    background:'black',
  }) )

export const LeftSide = styled.div( () => ({
    maxWidth:'600px',
    width:"100%",
    margin:'0 10px',
  }) )

export const Img = styled.img( () => ({
    width:'400px'

  }) )

  export const RightSide = styled(Card)( () => ({
    maxWidth:'550px',
    width:"100%",
    height:'500px',
    margin:'0 10px',
    padding: "20px",
    borderRadius: "10px",
    border:'none',
    background:'transparent',
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

