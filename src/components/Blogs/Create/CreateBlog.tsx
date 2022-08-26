import {useState} from 'react'


const CreateBlog = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")

  return (
    <div>
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <label>Blog author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>


    </div>
  )
}

export default CreateBlog
