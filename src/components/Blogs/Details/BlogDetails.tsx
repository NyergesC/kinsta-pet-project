import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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

const BlogDetails: React.FC<{}> = () => {

  const { id } = useParams()
  const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
  const navigate = useNavigate()


  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then (() => {
      navigate("../", { replace: true });   
    })
  }

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
           <button onClick={handleDelete}>delete</button>
        </article>
      )}
      
    </div>
  )
}

export default BlogDetails