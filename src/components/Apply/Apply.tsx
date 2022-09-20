import React, { useState } from 'react';
import { Container, Icon, FormWrap, FormContent, FormWrapper, FormItem , Inputfield, SelectField, ImgDiv, Img, FormH1, ApplyButton } from './Applystyles'
import { Modal,Form, message,Select,} from 'antd';
import image from './images/shuttle.jpg'
  
  const { Option } = Select;    
 
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 8,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 0,
      },
    },
  };
  
  const ApplyForm: React.FC = () => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Your ticket will be sent into your Mail box!');

    //MODAL

    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('Congratulations! Your journey has just begun!');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };

    //POST METHOD
    
    const onFinish = (values:any) => {
      
         
      fetch("http://localhost:8000/applications", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
          firstname:values.firstname,
          surname:values.surname,
          destination:values.destination,
          email:values.email,
          gender:values.gender
        })
      
        }).then(() => {
          console.log("submitted")       

        })
    }
        
    const [form] = Form.useForm();
    
    const onFinishFailed = (errorInfo:any) => {
      message.error('Something went wrong!');
      console.log('Failed:', errorInfo)
    }
    
  
    //FORM
 
    const prefixSelector = (
      <FormItem name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="36">+36</Option>
        </Select>
      </FormItem>
       );    
      
    return (
    <Container>
      <Icon to="/">Logo</Icon>  
      <FormWrap>
          <FormContent>
              <ImgDiv>
                <Img src={image} />                
              </ImgDiv>
              <FormWrapper
                  {...formItemLayout}
                  form={form}
                  name="register"
                  initialValues={{
                    prefix: '36',
                    }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  scrollToFirstError
                  preserve={false}
              >
                 <FormH1>Apply for a journey</FormH1>
                  <FormItem
                  name="firstname"
                  rules={[
                    {
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                    
                  ]}
                  >
                  <Inputfield placeholder='First name'  />
                  </FormItem>
          
                  <FormItem
                  name="surname"
                  rules={[
                      {
                      required: true,
                      message: 'Please input your Surname!',
                      },
                  ]}
                  hasFeedback
                  >
                  <Inputfield placeholder='Surname' />
                  </FormItem>  

                  <FormItem
                  name="destination"
                  rules={[{ required: true, message: 'Please select your destination!' }]}
                  >
                  <SelectField placeholder="select your destination"  style={{ width:"300px"}} >
                      <Option value="moon">Moon</Option>
                      <Option value="mars">Mars</Option>
                      <Option value="europa">Europa</Option>
                      <Option value="jupiter">Jupiter</Option>
                  </SelectField>
                  </FormItem>                 
                  
                  <FormItem
                  name="phone"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                  <Inputfield placeholder="Phone number"addonBefore={prefixSelector} />
                  </FormItem>
          
                  <FormItem
                      name="email"
                      rules={[
                  {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                  },
                  {
                      required: true,
                      message: 'Please input your E-mail!',
                  },
                  ]}
                  >
                  <Inputfield placeholder='E-mail address' />
                  </FormItem>       
          
                  <FormItem
                  name="gender"
                  rules={[{ required: true, message: 'Please select gender!' }]}
                  >
                  <SelectField placeholder="select your gender" style={{ width:"300px"}}>
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                  </SelectField>
                  </FormItem>           
                
                  <FormItem {...tailFormItemLayout}>

                      <ApplyButton type="primary" htmlType="submit" style={{ width:"300px"}} onClick={showModal}>Apply</ApplyButton>
                  </FormItem>
        
          </FormWrapper>
        <Modal
          title="Title"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <>
          <h3>{modalText} </h3>
          </>
        </Modal> 
        </FormContent>
      </FormWrap>
    </Container>
    );
  };

  export default ApplyForm;
