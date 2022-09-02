import React, {useState} from 'react'
import BlogList from './BlogList'
import useFetch from '../../../useFetch'
import { Container } from './BlogsStyle'



const Blogs = () => {

  const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")  
 
  return (
    <Container>
        
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { blogs && <BlogList blogs={blogs} />}
    </Container>
  )
}

export default Blogs
