import React, { useState } from 'react';
import { FormContainer, Main, FormWrapper, FormItem , Inputfield, SelectField} from './Applystyles'
import { Button, Form, Input,Select,} from 'antd';
  
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

    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    const prefixSelector = (
      <FormItem name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="36">+36</Option>
        </Select>
      </FormItem>
       );
    
      
    return (
    <FormContainer>
        <Main>
            <FormWrapper
                 {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                prefix: '36',
                }}
                scrollToFirstError
            >
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
                <Inputfield placeholder='First name' />
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

                    <Button type="primary" htmlType="submit" style={{ width:"300px"}}>Apply</Button>
                </FormItem>
      
        </FormWrapper>
      </Main>
    </FormContainer>
    );
  };

  export default ApplyForm;
