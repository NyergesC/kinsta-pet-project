import { Button, Form, Input, Select,} from 'antd';
import styled from '@emotion/styled';
/* import image from './images/card2.jpg';  */


export const FormContainer = styled.div( () => ({
    width:"100%",
    height:"50vh",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    position:'relative', 
    background:'black',
/*     backgroundImage:`url(${image})`,
    backgroundSize:"cover",
    backgroundPosition:"center center"
 */

  }) )

  export const Main = styled.div( () => ({
      maxWidth:'600px',
      width:'100%',
      padding:' 0 20px',
      margin: ' 0 auto'

  }))
  export const FormWrapper = styled(Form)( () => ({
 /*      position:'absolute',
      top:'-35%',
      left:'50%',
      transform:'translate(-50%)', */
      zIndex:'100', 
      maxWidth: '1200px',
      width:'100%',
      padding:' 30px 40px',
      alignItems:'center',
      background: "rgba(255,255,255, 0.05)",
      backdropFilter: "blur(10px)", 
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255, 0.05)",
      boxShadow:" 0 5px 25px rgba(0 0 0 / 20%)", 
      margin: '0 auto',

  }))
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

