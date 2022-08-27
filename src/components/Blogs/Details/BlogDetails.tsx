import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../useFetch'

type Blog = {
  title: string,
  date: string,
  small: string,
  author:string, 
  body:string, 
  read:string,
  id:number 
}

const BlogDetails = () => {

  const { id } = useParams()
  const {data: blog, error, isPending} = useFetch("http://localhost:3001/blogs/" + id)

  console.log(blog)  
  return (
    <div>
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
           <h2>{blog.title}</h2>
           <p>Written by {blog.author}</p>
           <div>
             <p>{blog.body}</p>
           </div>
        </article>
      )}
      
    </div>
  )
}

export default BlogDetails
