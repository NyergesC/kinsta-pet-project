import { Button, Checkbox, Form, Input } from 'antd';
import  { Container,FormContent, FormWrap, Icon, FormH1, FormH4, FormMember, MemberP, MemberSpan} from './SignInElements'
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
                            
                        }
                    }
                >
                    <FormH1>Hello!</FormH1>
                    <FormH4>We are really happy to see you again!</FormH4>
                    <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input style={{borderRadius:"4px"}}/>
                    </Form.Item>
            
                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    
                    >
                    <Input.Password  style={{borderRadius:"4px"}}/>
{/*                     </Form.Item>
            
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 10 }}>
                    <Checkbox style={{color: "#000000"}}>Remember me</Checkbox> */}
                
                    </Form.Item>
            
                    <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                    <Button 
                    type="primary" 
                    htmlType="submit"
                    style={
                        {
                        width:"100%",
                        borderRadius: "4px",
                        background:"#6C63FF",
                        border:"none"
                            


                    } }  
                    >
                        Sign In                        
                    </Button>
                    </Form.Item>
{/*                     <FormPassword >
                        <a style={{color:"grey"}}>Forgot password
                    </a>
                    </FormPassword> */}
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