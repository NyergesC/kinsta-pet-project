import React, { useState, useEffect} from 'react'
import BlogList from './BlogList'


const Blogs: React.FC<{}>= () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, SetIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
        fetch("http://localhost:3001/blogs")
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then ((data) =>{
                setBlogs(data)
                SetIsPending(false)
                setError(null)
            })
            .catch(err=>{
                SetIsPending(false)
                setError(err.message)
            })
    }, 1000)
  }, [])


  return (
    <div>
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Blogs
