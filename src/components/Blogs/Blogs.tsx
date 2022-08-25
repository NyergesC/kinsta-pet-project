import React, { useState, useEffect} from 'react'
import BlogList from './BlogList'


const Blogs: React.FC<{}>= () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, SetIsPending] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        fetch("http://localhost:3001/blogs")
        .then(res => {
            return res.json()
        })
        .then ((data) =>{
            setBlogs(data)
            SetIsPending(false)
        })
    }, 1000)
  }, [])


  return (
    <div>
        { isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Blogs
