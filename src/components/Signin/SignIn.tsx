import { Button, Form, Input } from 'antd';
import  { Container,FormContent, FormWrap, Icon, FormH1, FormH4, FormPassword, FormMember, MemberP, MemberSpan, Img, LoginButton, FP } from './SignInElements'
import React from 'react';
import { useGlobalContext } from '../../UserContext';
import { useNavigate } from "react-router-dom";
import image from './images/background.jpg'



const SignIn: React.FC = () => {

    const { user, setUser } = useGlobalContext()
    const navigate = useNavigate();

    const guestUser = 'Guest'

    const onFinish = (e: { username: string; }) => {
        console.log(e.username);
        setUser(e.username);
        navigate("/");
      };
    
 
    return (
    <Container>
            <Img src={image} />
        <FormWrap>
            <Icon to="/">Logo</Icon>
            <FormContent>                
                <Form
                    onFinish={onFinish}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    style={
                        {
                            maxWidth:"600px",
                            width:"100%",
                            height:"auto",
                            background: "rgba(255,255,255, 0.3)",
                            padding:"70px 12px",
                            borderRadius:"4px",
                            boxShadow: "rgb(0 0 0 / 90%) 0px 2px 8px",
                            backdropFilter: "blur(10px)",
                            display:"grid",
                            justifyContent:"center"
                            
                        }
                    }
                >
                    <FormH1>Welcome Back!</FormH1>
                    <FormH4>Login to continue</FormH4>
                    <Form.Item
                    label=""
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input placeholder="Username" style={{width:"300px"}}/>
                    </Form.Item>
            
                    <Form.Item
                    label=""
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    
                    
                    >
                    <Input.Password  placeholder="Password" style={{ width:"300px"}}/>
              
                    </Form.Item>
                    <FormPassword >
                        <FP>Forgot password?</FP>
                    </FormPassword>             
                    <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
                    <LoginButton 
                    type="primary" 
                    htmlType="submit"
                    >
                        Sign In                        
                    </LoginButton >
                    </Form.Item>
                    <FormMember>
                        <MemberP>New member?<MemberSpan>Sign Up here</MemberSpan></MemberP>
                    </FormMember>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    );
  };
  
  export default SignIn; 
