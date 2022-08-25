
import { Link } from 'react-router-dom';

type Blogs = {
    blogs: Blog[]
}

type Blog = {
    title: string,
    date: string,
    small: string,
    author:string, 
    body:string, 
    read:string,
    id:number 
}


const BlogList: React.FC<Blogs> = ( { blogs }) => {


  return (
    <div>
      {blogs.map((blog:Blog) => {
          
          return(
            <div key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <p>{ blog.date }</p>
                <p> { blog.small }</p>
                <p>Written by { blog.author }</p>
                <p>{blog.read}</p>
            </Link>
            </div>
          )
      }
      )}
    </div>
  );
}
 
export default BlogList;
