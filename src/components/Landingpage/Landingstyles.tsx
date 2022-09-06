import styled from "@emotion/styled"
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
    fontWeight: "600",
    textTransform:'uppercase',
    marginBottom:'0',
    textShadow:" 0 5px 25px rgba(0,0,0,0.1)",
    
    '@media screen and (max-width: 1350px)': {
        fontSize: "4.5em"
    },
    '@media screen and (max-width: 1200px)': {
        fontSize: "4em"
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
    fontSize: "1.8em",
    marginBottom:'45px',

    '@media screen and (max-width: 768px)': {
        fontSize: "1.8em",
        marginBottom:'25px',
    },
    '@media screen and (max-width: 480px)': {
        fontSize: "1.5em"
    }
  }) )

export const ContentP = styled.p( () => ({
    maxWidth:'450px',
    width:'100%',
    color: "white",
    fontWeight:'300',
    fontSize: "1.5em",
    marginTop:"24px",

    '@media screen and (max-width: 1200px)': {
        maxWidth:'400px'
    },

    '@media screen and (max-width: 768px)': {
        fontSize: "0.8em",
        maxWidth:'250px',
        marginTop:'0',
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
    '@media screen and (max-width: 768px)': {
        maxWidth:'550px',
        transform:'translate(-20%, -50%)'
    },

 }) )

 export const Square= styled.div( () => ({
     width:'130px',
     height:'500px',
     background:'transparent',
     borderStyle: "solid",
     borderWidth:" 5px",
     borderImage: "linear-gradient(45deg, #090154, #5dc9f0) 1",
/*      borderImage: "linear-gradient(45deg, #7f33b0, #5dc9f0) 1",
 */     position:'absolute',
     top:'50%',
     right:"50%",
     transform:'translate(50%, -50%)',
     zIndex:'5',
     transition: '0.3s ease-in-out',

     '@media screen and (max-width: 1550px)': {
         right:"35%",
     },
     '@media screen and (max-width: 768px)': {
        width:'100px',
        height:'400px',
        right:"40%",
     },

}) )

