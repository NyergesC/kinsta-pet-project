import { createContext, useContext } from "react"

export type GlobalContent = {
  user: string
  setUser:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
user: 'Guest', // set a default value
setUser: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)

/* 
const SignIn: React.FC = () => {

    
    const [user, setUser] = useState({
        login: true,
        email: '',
        password: '',
        name: '',
        age: 0
      })

    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate();

    const [login] = useMutation(LOGIN_MUTATION, {        
        variables: {
          email: user.email,
          password: user.password
        },
        onCompleted: ({ login }) => {
          localStorage.setItem(AUTH_TOKEN, login.token);
          navigate('/');
        }
      });
      
      const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
          name: user.name,
          email: user.email,
          password: user.password,
          age: user.age
        },
        onCompleted: ({ signup }) => {
          localStorage.setItem(AUTH_TOKEN, signup.token);
          navigate('/');
        }
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
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
                    <FormH1>{user.login ? "Welcome Back" : "Welcome"}</FormH1>
                    <FormH4>{user.login ? "Login" : "Sign Up"} to continue</FormH4>
                    {!user.login && ( 
                    <>             
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                     <Input value={user.email}  onChange={(e) =>setUser({...user, email: e.target.value,})}  placeholder="Email" style={{width:"300px"}}/>
                    </Form.Item>

                   <Form.Item
                    label=""
                    name="age"                    
                    rules={[{ required: true, message: 'Please input your age!' }]}
                      >
                    <Input value={user.age} onChange={(e) => setUser({...user, age: e.target.valueAsNumber})} placeholder="age" style={{width:"300px"}}/>
                    </Form.Item>
                   </> 
                    )}
                   
                    <Form.Item
                    label=""
                    name="name"                    
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                    <Input value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Username" style={{width:"300px"}}/>
                    </Form.Item>
        
                    <Form.Item
                    label=""
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    
                    
                    >
                    <Input.Password value={user.password} onChange={(e) => setUser({...user,password: e.target.value})} placeholder="Password" style={{ width:"300px"}}/>
              
                    </Form.Item>
                    <FormPassword >
                        <FP>Forgot password?</FP>
                    </FormPassword>
                    
                    <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
          
                      <LoginButton   onClick={() => { setUser({...user,login: !user.login, });
                      }}
                       >
                      {user.login ? "Login" : "Create Account"}
                      </LoginButton >
              
                    </Form.Item>
                    <FormMember>
                         <MemberP>{user.login ? 'Need to create an account?' : 'Already have an account?'}</MemberP>
                    </FormMember>
 
                </Form>
                {error && <h2>Something went wrong. Error message: {error}</h2>}
            </FormContent>
        </FormWrap>
      </Container>
    );
  };
  
  export default SignIn; 
 */