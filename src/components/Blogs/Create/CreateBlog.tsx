import {useState} from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const blog = {title, body, author}

    setIsPending(true)
    
    fetch("http://localhost:3001/blogs", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(blog)
    }).then(() => {
      console.log("submitted")
      setIsPending(false)
    })

  }

  return (
    <div>
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <label>Blog author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding New Blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>


    </div>
  )
}

export default CreateBlog
