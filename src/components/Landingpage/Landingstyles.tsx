import styled from "@emotion/styled"
import {  Link as LinkS} from 'react-scroll'
import { Button} from "antd";
import image from './images/background.jpg'; 

export const Container = styled.div( () => ({
    width:"100%",
    height:"100vh",
    backgroundImage:`url(${image})`,
    backgroundSize:"cover",
    backgroundPosition:"center center",    
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:"-1",
    fontFamily:"'Kanit', sans-serif",

  }) )

export const Wrapper = styled.div( () => ({
    position:'relative',
    width:"100%",
    height:"80vh",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",

    '@media screen and (max-width: 768px)': {
        display:"grid",
    }
    

  }) )

export const ContentText = styled.div( () => ({
    maxWidth:"600px",
    width:"100%",
    marginLeft:'200px',
    transition:" 0.3s all ease",

    '@media screen and (max-width: 1200px)': {
        marginLeft: "50px",
    },
    '@media screen and (max-width: 768px)': {
        margin: "5px 20px",
    }

  }) )

export const TitleH1 = styled.h1( () => ({
    color: "white",
    textAlign:'left',
    fontSize: "6em",
    fontWeight: "700",
    textShadow:" 0 5px 25px rgba(0,0,0,0.1)",
    
    '@media screen and (max-width: 1200px)': {
        fontSize: "5em"
    },
    '@media screen and (max-width: 768px)': {
        fontSize: "3em"
    },
  
    '@media screen and (max-width: 480px)': {
        fontSize: "2.7em"
    }
  }) )

export const TitleH3 = styled.h3( () => ({
    color: "white",
    fontSize: "2em",

    '@media screen and (max-width: 768px)': {
        fontSize: "1.8em"
    },
    '@media screen and (max-width: 480px)': {
        fontSize: "1.5em"
    }
  }) )

export const ContentP = styled.p( () => ({
    maxWidth:'400px',
    width:'100%',
    color: "white",
    fontWeight:'300',
    fontSize: "1.5em",
    marginTop:"24px",

    '@media screen and (max-width: 768px)': {
        fontSize: "0.8em"
    },
    '@media screen and (max-width: 480px)': {
        fontSize: "0.6em"
    }
  }) )

export const Img1 = styled.img( () => ({
    position:'absolute',
    maxWidth:'1000px',
    width: "100%",
    left:'50%',
    top:'50%',
    transform:'translate(-35%, -50%)',
    zIndex:'100',
    transition: 'all 0.3s ease-in-out',

    '@media screen and (max-width: 1550px)': {
        transform:'translate(-15%, -50%)',
    },
    '@media screen and (max-width: 1200px)': {
        maxWidth:'750px',
    },

 }) )

 export const Square= styled.div( () => ({
     width:'130px',
     height:'500px',
     background:'transparent',
     borderStyle: "solid",
     borderWidth:" 5px",
     borderImage: "linear-gradient(45deg, blue, white) 1",
     position:'absolute',
     top:'50%',
     right:"50%",
     transform:'translate(50%, -50%)',
     zIndex:'5',
     transition: '0.3s ease-in-out',

     '@media screen and (max-width: 1550px)': {
         right:"35%",
     },

}) )

export const BaseButton= styled(Button)( () => ({
    position: "absolute",
    marginTop: "40px",
    backgroundColor: "white",
    color: "black",
    fontSize: "1.1em",
    fontWeight: "600",
    padding: "15px 20px",
    display: "flex",
    alignItems:" center",
    borderRadius: "10px",
    transition:" 0.3s all ease",

   " &:hover":{
        color:"#000000",
    },

    '@media screen and (max-width: 768px)': {
        fontSize: "0.9em",
        padding: "10px 13px",
        marginTop:"30px",
    }

 }) )




/*  export const Button = styled(LinkS)`
    position: absolute;
    margin-top: 40px;
    background-color: white;
    color: black;
    font-size: 1.1em;
    font-weight: 600;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: 0.3s all ease;

    &:hover{
        color:#000000;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.9em;
        padding: 10px 13px;
        margin-top:30px
    }
   
`
 
 */