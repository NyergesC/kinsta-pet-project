import { Link } from 'react-router-dom';
import { Wrapper,Blogwrapper, Date, TextH2, TextP,TextRead, ButtonWrap, SortButton, AddButton, Plus} from './BlogsStyle'
import React, {useState} from 'react'
import { Blogs, Blog, SortBlogs } from './Types'


const BlogList: React.FC<Blogs> = ( { blogs }) => {

/*   const [sort, setSort] = useState<Blog[] | []>([]);
 */  const [sortButton, setSortButton] = useState<SortBlogs>(SortBlogs.ASC)


/* 
  const sortButtonChangeHandle = () => {
    setSort([...blogs.sort( (a: Blog,b: Blog) => sortButton === SortBlogs.ASC ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author))]);
    setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);
  }; */
  const sortButtonChangeHandle = () => {
    blogs.sort((a: Blog,b: Blog) => sortButton === SortBlogs.ASC ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author));
    setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);
  };


  return (
    <Wrapper>
        <ButtonWrap>
           <SortButton onClick={sortButtonChangeHandle}>{sortButton}</SortButton>
           <AddButton to='/add_blog'><Plus />Add story</AddButton>
        </ButtonWrap>     

      {blogs.map((blog:Blog) => {
        
        return(
            <Blogwrapper key={blog.id} >
              <Link to={`/blogs/${blog.id}`}>
                  <TextH2>{ blog.author }</TextH2>
                  <Date>{ blog.date }</Date>
                  <TextP> { blog.small }</TextP>
                  <TextRead>{blog.read}</TextRead>
              </Link>
            </Blogwrapper>
          )
      }
      )}
    </Wrapper>
  );
}
 
export default BlogList;
