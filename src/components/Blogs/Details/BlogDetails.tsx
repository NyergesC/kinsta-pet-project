import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBlogDetails } from '../../../hooks/useBlogDetails'
import { DELETE_BLOG } from 'src/hooks/Mutation'
import { useMutation } from '@apollo/client'
import { GET_BLOGS} from 'src/hooks/useBlogs'
import { UPDATE_BLOG } from 'src/hooks/Mutation'
import type {Blog} from '../Bloglist/Types'
import { Modal, Form, Input, } from 'antd';
import {Container, Img, Wrapper, Icon, Content, TitleH2, AuthorP, BodyP, ButtonDiv, ButtonEdit, ButtonDelete, AuthorSpan, SmallH4, QuoteDiv} from './BlogDetailstyle'
import image from './images/background.jpg'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const BlogDetails: React.FC<{}> = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);  
  const { id } = useParams()
  const navigate = useNavigate()
  
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
      <Img src={image} />
      <Icon to="/">Logo</Icon>
      <Wrapper>
        <Content>
        { loading && <div>Loading...</div>}
        { error && <div>{ error.message }</div>}
        { data && (
            <article>
              <TitleH2>{data.blog.title}</TitleH2>
              <AuthorP>Written by <AuthorSpan>{data.blog.author.name}</AuthorSpan></AuthorP>
              <QuoteDiv>
                  <SmallH4><FaQuoteLeft /> {data.blog.small} <FaQuoteRight /></SmallH4>
              </QuoteDiv>
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
                  <Input
                    value={blogDetails.body}
                    onChange={(e) =>
                      setBlogDetails({ ...blogDetails, body: e.target.value })
                    }
                  />
                </Form.Item>
              </Form>
                </Modal>
                    <ButtonDelete onClick={handleDelete} >Delete</ButtonDelete> 
                </ButtonDiv>         
              </article>

              )}
          </Content>
        </Wrapper>
      
    </Container>
  )
}

export default BlogDetails
