import { Button, Form, Input, Select,} from 'antd';
import styled from '@emotion/styled';


export const FormContainer = styled.div( () => ({
    width:"100%",
    height:"80vh",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    position:'relative', 

  }) )

  export const Main = styled.div( () => ({
      maxWidth:'1200px',
      width:'100%',
      padding:' 0 20px',
      background:'purple',
      margin: ' 0 auto'

  }))
  export const FormWrapper = styled(Form)( () => ({
      maxWidth: '800px',
      width:'100%',
      padding:' 30px 40px',
      alignItems:'center',
      background:'red',
      margin: '0 auto',

  }))
  export const FormItem = styled(Form.Item)( () => ({
      maxWidth:'600px',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      marginBottom:"25px",
      background:'yellow'

  }))
  export const Inputfield= styled(Input)( () => ({
      width:'300px',
      padding:'5px 15px'


  }))
  export const SelectField= styled(Select)( () => ({
      width:'300px',

      div:{
          width:'300px'
      }

  }))

