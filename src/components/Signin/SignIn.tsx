import { Button, Checkbox, Form, Input } from 'antd';
import  { Container,FormContent, FormWrap, Icon, FormH1, FormH4, FormPassword, FormMember, MemberP, MemberSpan} from './SignInElements'
import React from 'react';
import 'antd/dist/antd.css'



const SignIn: React.FC = () => {
 
    return (
    <Container>
        <FormWrap>
            <Icon to="/">Logo</Icon>
            <FormContent>                
                <Form
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
                   {/*  <FormH4>We are really happy to see you again!</FormH4> */}
                    <FormH4>Login to continue</FormH4>
                    <Form.Item
                    label=""
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input placeholder="Username" style={{borderRadius:"4px", width:"300px"}}/>
                    </Form.Item>
            
                    <Form.Item
                    label=""
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    
                    
                    >
                    <Input.Password  placeholder="Password" style={{borderRadius:"4px", width:"300px"}}/>
{/*                     </Form.Item>
            
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 10 }}>
                    <Checkbox style={{color: "#000000"}}>Remember me</Checkbox> */}
                
                    </Form.Item>
                    <FormPassword >
                        <a style={{color:"#585858", fontWeight:"600"}}>Forgot password?</a>
                    </FormPassword>             
                    <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
                    <Button 
                    type="primary" 
                    htmlType="submit"
                    style={
                        {
                        width:"300px",
                        borderRadius: "4px",
                        background:"#6C63FF",
                        border:"none"                    

                    } }  
                    >
                        Sign In                        
                    </Button>
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