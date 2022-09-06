import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Container, FormWrap, Icon, FormContent, FormWrapper, FormH1, FormButton,ImgDiv, Img} from './Createstyle'
import {  Form, Input, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import image from './images/astronaut2.jpg'

const CreateBlog = () => {

  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")
  const [date, setDate] = useState("")
  const [small, setSmall] = useState("")
  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate()
  const { TextArea } = Input;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const blog = {author, body, date,  small, }

    setIsPending(true)
    
    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(blog)
    }).then(() => {
      console.log("submitted")
      setIsPending(false)
      navigate("../", { replace: true });      
    }).then(() =>{
      console.log('submitted')
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Icon to="/">Logo</Icon>
      <FormWrap>
          <FormContent>   
              <ImgDiv>
                <Img src={image} />                
              </ImgDiv>
              <FormWrapper
                  onSubmitCapture={handleSubmit}
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 10 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  onFinishFailed={onFinishFailed}
            
              >
                  <FormH1>Share your story</FormH1>
                  <Form.Item
                    label="Name:"
                    name="name"
                    rules={[{ required: true, message: 'Please input name you that want to be visible!' }]}
                    >
                    <Input placeholder="name" style={{ width:"300px"}} value={author} onChange={(e) => setAuthor(e.target.value)}/>
                  </Form.Item>

                  <Form.Item
                    label="Date: "
                    name="date"
                    rules={[{ required: true, message: 'Please input date' }]}               
                    
                    >
                    <Input placeholder="2022-01-01" value={date} onChange={(e) => setDate(e.target.value)} style={{ width:"300px"}}/>
            
                  </Form.Item>

                <Form.Item
                    label="Title: "
                    name="title"       
                    
                    >
                    <Input  value={small} onChange={(e) => setSmall(e.target.value)} style={{ width:"300px"}}/>
              
                  </Form.Item>

                  <Form.Item label="Your story" >
                    <TextArea
                      rows={6}
                      value={body}
                      style={{ width:"700px"}}
                      onChange={(e:any) => setBody(e.target.value)}
                    />
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card" >
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }} >Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>

                          
                  <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                     { !isPending && <FormButton type="primary"  htmlType="submit">Add Story</FormButton>}
                     { isPending && <FormButton type="primary" >Adding New Story...</FormButton>}
                  </Form.Item>               
                  <div>
                    <p>{author}</p>
                    <p>{date}</p>
                    <p>{small}</p>
                    <p>{body}</p>

                  </div>
              </FormWrapper>
        
          </FormContent>
      </FormWrap>
  </Container>

  )
}

export default CreateBlog

