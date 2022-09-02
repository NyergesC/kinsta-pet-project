import { Link } from 'react-router-dom';
import { Wrapper} from './BlogsStyle'
import {useState} from 'react'
import { Blogs, Blog, SortBlogs } from './Types'



const BlogList: React.FC<Blogs> = ( { blogs }) => {

  const [sort, setSort] = useState<Blog[] | []>([]);
  const [sortButton, setSortButton] = useState<SortBlogs>(SortBlogs.ASC)

  const sortButtonChangeHandle = () => {
    setSort([...blogs.sort( (a: Blog,b: Blog) => sortButton === SortBlogs.ASC ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author))]);
    setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);
};


  return (
    <Wrapper>
      <button onClick={sortButtonChangeHandle}  >{sortButton}</button>
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
    </Wrapper>
  );
}
 
export default BlogList;
