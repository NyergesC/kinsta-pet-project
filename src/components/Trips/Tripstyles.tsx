import styled from "@emotion/styled";
import { Card} from 'antd';


export const Slide = styled.div( () => ({
    width:"100%",
    height:"100vh",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    background:'black',
  }) )

export const Container = styled.div( () => ({
    width:"100%",
    height:"100vh",
    position:'relative',
    zIndex:'-1',
  }) )

export const LeftSide = styled.div( () => ({
    maxWidth:'600px',
    width:"100%",
    margin:'0 10px',
    transition:'0.3s all ease',
    

    '@media screen and (max-width: 1200px)': {
        maxWidth:'400px',
     
     },    

  }) )

export const Img = styled.img( () => ({
    width:'400px',
    '@media screen and (max-width: 960px)': {
        maxWidth:'350px',
     
     },     

  }) )

  export const RightSide = styled(Card)( () => ({
    maxWidth:'550px',
    width:"100%",
    height:'500px',
    padding: "0 10px",
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
export const One = styled.div( () => ({
    display:'flex',
    alignItems:'center',
    maxWidth:'100px',
    width:'100%',
    position:'absolute',
    top:"20%",
    right:'18%',
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
       right:'12%',
       h2:{
        fontSize:'12em',
    },
       span:{
        fontSize:'1.6em',
    },
    
    },
    '@media screen and (max-width: 1200px)': {
        right:'10%',
        top:"20%",
        h2:{
            fontSize:'10em',
        },
           span:{
            fontSize:'1.4em',
        }
    },
        
    '@media screen and (max-width: 960px)': {
        left:'5%',
        top:"10%",
    },
    
}) )
export const Two = styled(One)( () => ({
    display:'flex',
    bottom:"-55%",
    right:'62%',

    '@media screen and (max-width: 1650px)': {
        right:'60%',
        h2:{
         fontSize:'12em',
     },
        span:{
         fontSize:'1.6em',
     },
     '@media screen and (max-width: 1200px)': {
        h2:{
            fontSize:'10em',
        },
           span:{
            fontSize:'1.4em',
        }
    },
     
     },
     '@media screen and (max-width: 960px)': {
        left:'28%',
        bottom:"-75%",
    },
        
}) )



