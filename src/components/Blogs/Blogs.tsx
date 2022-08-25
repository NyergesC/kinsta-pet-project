import React, { useState, useEffect} from 'react'
import BlogList from './BlogList'


const Blogs: React.FC<{}>= () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
      fetch("http://localhost:3001/blogs")
        .then(res => {
            return res.json()
        })
        .then ((data) =>{
            setBlogs(data)
        })
  }, [])


  return (
    <div>
        {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Blogs
