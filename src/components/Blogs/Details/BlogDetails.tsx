import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBlogDetails } from '../../../hooks/useBlogDetails'
import { DELETE_BLOG } from 'src/hooks/Mutation'
import { useMutation } from '@apollo/client'
import { GET_BLOGS} from 'src/hooks/useBlogs'
import { UPDATE_BLOG } from 'src/hooks/Mutation'
import type {Blog} from '../Bloglist/Types'
import { Modal, Form, Input} from 'antd';
import {Container, Icon, Content, TitleH2, AuthorP, BodyP, ButtonDiv, ButtonEdit, ButtonDelete, SmallH4, QuoteDiv, Div1, Div2, Div3} from './BlogDetailstyle'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import { timeDifferenceForDate } from 'src/utils'


const BlogDetails: React.FC<{}> = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);  
  const { id } = useParams()
  const navigate = useNavigate()
  const { TextArea } = Input;
  
  //MUTATIONS:
  
  const {data, error, loading, refetch} = useBlogDetails(id)
  const [deleteBlog] = useMutation(DELETE_BLOG)
  const [updateBlog] = useMutation(UPDATE_BLOG)

 
  //MODAL EVENTS:
  
  const updateBlogDetails = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  //BLOGDETAIL INPUT USESTATE:

  type blogDetailsInput = {
    title: string,
    body:string,
    small:string,
  }

  const [blogDetails, setBlogDetails] = useState<blogDetailsInput>({
    title: "",
    body: "",
    small: "",
  });

  useEffect(() => {
    setBlogDetails({
      title: data?.blog?.title,
      body: data?.blog?.body,
      small:data?.blog?.small,
    });
  }, [data]);


  //UPDATE EVENT:

  const handleUpdate =  (e:React.MouseEvent) => {
    e.preventDefault()
    console.log(id)
    
    updateBlog({
      variables:{
        updateBlogId:id,
        input: blogDetails
      },
    });
    refetch()

    setIsModalOpen(false)
  }

  //DELETE EVENT:
  
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    deleteBlog({
      variables: {
        id:id
      },
      update:(cache, {data}) => {
        const { blogs } = cache.readQuery<Blog[] | any>({
          query: GET_BLOGS
        });
        cache.writeQuery({
          query:GET_BLOGS,        
          data: {
            blogs: blogs.filter((blog: Blog) => 
            blog.id !== data.deleteBlog.id            
            )
          },
        })
      }
    }) 
    navigate("../", { replace: true });   
   }
 

   //RENDERING:

  return (
    <Container>
      <Icon to="/">Logo</Icon>
        { loading && <div>Loading...</div>}
        { error && <div>{ error.message }</div>}
        { data && (
           <Content>
                <Div1>
                  <TitleH2>{data.blog.title}</TitleH2>
                  <AuthorP>
                        by {data.blog.author.name} |
                        created at {timeDifferenceForDate(data.blog.createdAt)} |
                        updated at {timeDifferenceForDate(data.blog.updatedAt)}
      
                  </AuthorP>      

                  <QuoteDiv>
                      <SmallH4><FaQuoteLeft style={{fontSize:"1.4em"}} /> {data.blog.small} <FaQuoteRight style={{fontSize:"1.4em"}} /></SmallH4>
                  </QuoteDiv> 
                </Div1>
                <Div2></Div2>
                <Div3>
                  <BodyP>{data.blog.body}</BodyP>
                  <ButtonDiv>
                    <ButtonEdit type="primary" onClick={updateBlogDetails}>Edit</ButtonEdit>
            <Modal 
              title="Edit your story"
              onOk={handleUpdate} 
              onCancel={handleCancel}
              centered
              visible={isModalOpen} 
              >
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              >
                <Form.Item
                  label="Title"
                  rules={[{ required: true, message: "Please add a new title!" }]}
                >
                  <Input
                    value={blogDetails.title}
                    onChange={(e) =>
                      setBlogDetails({ ...blogDetails, title: e.target.value })
                    }
                  />
                </Form.Item>

                <Form.Item label="Quote">
                  <Input
                    value={blogDetails.small}
                    onChange={(e) =>
                      setBlogDetails({ ...blogDetails, small: e.target.value })
                    }
                  />
                </Form.Item>

                <Form.Item label="Content">
                    <TextArea rows={6} 
                    value={blogDetails.body}
                    onChange={(e) =>
                      setBlogDetails({ ...blogDetails, body: e.target.value })
                    }
                    />

                 </Form.Item>
                {/* <Form.Item label="Content">
                  <Input
                    value={blogDetails.body}
                    onChange={(e) =>
                      setBlogDetails({ ...blogDetails, body: e.target.value })
                    }
                  />
                </Form.Item> */}
              </Form>
                </Modal>
                    <ButtonDelete onClick={handleDelete} >Delete</ButtonDelete> 
                </ButtonDiv> 
              </Div3>        
            

          </Content>
              )}
     
    </Container>
  )
}

export default BlogDetails

