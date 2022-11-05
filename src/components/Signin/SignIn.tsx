import {  Form, Input , Button,} from 'antd';
 import  { Container,FormContent, FormWrap, Icon, FormH1, FormH4,  Img, LoginButton,  } from './SignInElements'
 import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import image from './images/background.jpg'
import { useMutation} from '@apollo/client';
import { LoginContext} from 'src/UserContext';
import { AUTH_TOKEN } from '../../constants';
import { LOGIN_MUTATION } from '../../hooks/Mutation';
import { SIGNUP_MUTATION } from '../../hooks/Mutation';  


const Login: React.FC = () => { 

  const loginContext = useContext(LoginContext)

  const [user, setUser] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
    age:1
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: user.email,
      password: user.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);      
      loginContext.setUserContext({ name: login.user.name, email: login.user.email, id: login.user.id,}); 
      navigate("/");
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: user.name,
      email: user.email,
      password: user.password,
      age:user.age
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      loginContext.setUserContext({ name: signup.user.name, email: signup.user.email, id: signup.user.id,}); 
      navigate("/");
    },
  });

  const onFinish = () => {
    user.login ? login() : signup();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    setError(errorInfo.message);
  };

  return (
    <Container>
        <Img src={image} />
      <FormWrap>
          <Icon to="/">Logo</Icon>
          <FormContent>         
        {user.login ? "Login" : "Sign Up"}
             <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
            <FormH1>{user.login ? "Welcome Back" : "Welcome"}</FormH1>
            <FormH4>{user.login ? "Login" : "Sign Up"} to continue</FormH4>

           {!user.login && (
            <>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
              placeholder="Username"
              style={{width:"300px"}}
            />
          </Form.Item>
          <Form.Item
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <Input
              value={user.age}
              onChange={(e) =>
                setUser({
                  ...user,
                 age: parseInt(e.target.value)
                })
              }
              placeholder="age"
              style={{width:"300px"}}
            />
          </Form.Item>
          </>
        )}

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
          ]}
        >
          <Input
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
            placeholder="Email" 
            style={{width:"300px"}}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            placeholder="Password" 
            style={{width:"300px"}}
          />
        </Form.Item>

        <Form.Item>
          <Button
            onClick={() => {
              setUser({
                ...user,
                login: !user.login,
              });
            }}
            style={{width:"300px", color:"#090154", border:"2px solid #090154", background:"none"}}
          >
            {user.login
              ? "Need to create an account?"
              : "Already have an account?"}
          </Button>
        </Form.Item>

       
        <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
          <LoginButton htmlType="submit">
            {user.login ? "Login" : "Create account"}
          </LoginButton>
        </Form.Item>
      </Form>
      {error && <h2>Something went wrong. Error message: {error}</h2>}

        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
