import styled from "@emotion/styled"
import { Button } from 'antd';


export const UseButton = styled(Button)( () => ({
    //backgroundImage: 'linear-gradient(to right, #DA22FF 0%, #9733EE  51%, #DA22FF  100%)',
    //backgroundImage: 'linear-gradient(to right, #2596be 0%, #5015bd  51%, #2596be 100%)',
    //backgroundImage: 'linear-gradient(to right, #2596be 0%, #093a8f  51%, #2596be 100%)',
    marginTop: '40px',
    padding: '15px 45px',
    textAlign: 'center',
    alignItems:'center',
    justifyContent:'center',
    textTransform: 'uppercase',
    transition: '0.5s all ease-in-out',
    color: 'white',
    fontSize:'1.3em', 
    height:'60px',  
    background:'transparent', 
    border:'2px solid white',       
    //boxShadow: '0 0 5px #eee',
    display: 'block',  


    ':hover': {
        //backgroundPosition: 'right center', /* change the direction of the change here */
        background:'black',
        backgroundImage: "linear-gradient(45deg, #093a8f, #5dc9f0) ",
        textDecoration: "none",
        border:'none',
        color:'white',
    },   
    ':focus': {
        //backgroundPosition: 'right center', /* change the direction of the change here */
        background:'black',
        textDecoration: "none",
        border:'2px solid white', 
        color:'white',
    },   
   
    
    '@media screen and (max-width: 768px)': {
        fontSize: "0.9em",
        padding: "10px 13px",
        marginTop:"30px",
    }
}) )

         

 
         
/* .btn-grad {
    background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
  }

  .btn-grad:hover {
    background-position: right center; 
    color: #fff;
    text-decoration: none;
  }
  */
/* export const UseButton: React.FC<ButtonProps> = styled.button( () => ({
    width:'200px',
    height:'30px',
    marginTop: "40px",
    backgroundColor: `${(props:any) => props.primary ? "red" : "white"}`,
    color: 'black',
    fontSize: "1.1em",
    fontWeight: "600",
    padding: "15px 20px",
    display: "flex",
    alignItems:" center",
    borderRadius: "10px",
    transition:" 0.3s all ease",



    '@media screen and (max-width: 768px)': {
        fontSize: "0.9em",
        padding: "10px 13px",
        marginTop:"30px",
    }
}) ) */
