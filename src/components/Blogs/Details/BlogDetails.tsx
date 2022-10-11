import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBlogDetails } from '../../../hooks/useBlogDetails'


export type Blog = {
  id:string,
  title: string,
  name:string,
  createdAt: string,
  updatedAt: string,
  small:string,
  author:string, 
  body:string, 
}

const BlogDetails: React.FC<{}> = () => {

  const { id } = useParams()

  const {data, error, loading} = useBlogDetails(id)

  const navigate = useNavigate()


/*   const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then (() => {
      navigate("../", { replace: true });   
    })
  } */


  return (
    <div>
      { loading && <div>Loading...</div>}
      { error && <div>{ error.message }</div>}
      { data && (
        <article>
           <h2>{data.blog.title}</h2>
           <p>Written by {data.blog.name}</p>
           <div>
             <p>{data.blog.body}</p>
           </div>
{/*            <button onClick={handleDelete}>delete</button>
 */}        </article>
      )}
      
    </div>
  )
}

export default BlogDetails
