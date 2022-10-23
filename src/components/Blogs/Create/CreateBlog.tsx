import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Container, FormWrap, Icon, FormContent, FormWrapper, FormH1, FormButton,ImgDiv, Img} from './Createstyle'
import {  Form, Input, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import image from './images/astronaut2.jpg'
import {useMutation} from '@apollo/client'
import { ADD_BLOG } from '../../../hooks/Mutation';
import { GET_BLOGS } from 'src/hooks/useBlogs';
import type { FormInstance } from 'antd/es/form';
import {Blog} from '../../Blogs/Bloglist/Types'
/* import Loading from 'src/components/Loading/Loading';
 */

const CreateBlog = () => {

  const [name, setName] = useState("")
  const [body, setBody] = useState("")
  const [title, setTitle] = useState("")
  const [small, setSmall] = useState("")
  const [isPending, setIsPending] = useState(false)
  const { TextArea } = Input;
  const formRef = React.createRef<FormInstance>();
  const navigate = useNavigate()

/*   const onReset = () => {
    formRef.current!.resetFields();
  };
 */
  
  const [addBlog, { error}] = useMutation(ADD_BLOG); 
    

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsPending(!isPending);
    console.log(isPending)
    addBlog({
      variables:{
        title:title,
        small: small,
        body: body,
        name: name
      },
      update: (cache, {data}) => {
        const { blogs }  = cache.readQuery<Blog[] | any>({
          query:GET_BLOGS
        });
        cache.writeQuery({
          query:GET_BLOGS,
          data:{          
            blogs:[
              ...blogs,
              data.addBlog
            ]
          },  
         })
        }  
     });
      
     setIsPending(false);
     console.log(isPending)
            
    if(error) {
      console.log(error)
    }
    
      navigate("../", { replace: true });   

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
                  ref={formRef}
              >
                  <FormH1>Share your story</FormH1>
                  <Form.Item
                    label="Name:"
                    name="name"
                    rules={[{ required: true, message: 'Please input name you that want to be visible!' }]}
                    >
                    <Input placeholder="name" style={{ width:"300px"}} value={name} onChange={(e) => setName(e.target.value)}/>
                  </Form.Item>

                <Form.Item
                    label="Title: "
                    name="title"       
                    
                    >
                    <Input  value={title} onChange={(e) => setTitle(e.target.value)} style={{ width:"300px"}}/>
              
                  </Form.Item>
                <Form.Item
                    label="Starter: "
                    name="starter"       
                    
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
                 {isPending ? (
                    <FormButton disabled htmlType="submit" >Adding your new story...</FormButton>
                   ) : (
                <FormButton type="primary"  htmlType="submit">Submit</FormButton>
               )}
                </Form.Item>
                <div>
                  {/* <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                    { isPending ? <FormButton type="primary"  htmlType="submit"  >Add Story</FormButton> :
                   <FormButton type="primary" >Adding New Story...</FormButton>}
                  </Form.Item>               
                  <div> */}
                    <p>{title}</p>
                    <p>{name}</p>
                    <p>{small}</p>
                    <p>{body}</p>

                  </div>
              </FormWrapper>
        
          </FormContent>
      </FormWrap>
  </Container>

  )
};

export default CreateBlog

