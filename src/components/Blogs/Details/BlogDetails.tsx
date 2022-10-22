import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBlogDetails } from '../../../hooks/useBlogDetails'
import { DELETE_BLOG } from 'src/hooks/Mutation'
import { useMutation } from '@apollo/client'
import { GET_BLOGS } from 'src/hooks/useBlogs'


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

  const [deleteBlog] = useMutation(DELETE_BLOG)
    /* variables: {id},
    update(cache, {data}) {
      const { blogs } = cache.readQuery<Blog[] | any>({
        query: GET_BLOGS
      });
      cache.writeQuery({
        query:GET_BLOGS,
        data: {
          blogs: blogs.filter((blog: Blog) =>
            blog.id !== data.deleteBlog.id)
        }
      })
    }
  } */
  
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

/*        update(cache, {data: {deleteBlog}}) {
        const { blogs } = cache.readQuery<Blog[] | any>({
          query: GET_BLOGS
        });
        const newBlogs = blogs!.blogs.filter((blog:Blog) => blog.id !== deleteBlog.id)
        cache.writeQuery({
          query:GET_BLOGS,
          data: { blogs: newBlogs         
          }
        })
      }   */ 
  

      navigate("../", { replace: true });   

   }
 

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
                <button  >Edit</button>
                <button onClick={handleDelete} >Delete</button>          
         </article>
      )}
      
    </div>
  )
}

export default BlogDetails
