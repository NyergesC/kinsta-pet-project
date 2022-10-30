import { Link } from 'react-router-dom';
import { Wrapper,Blogwrapper, Date, TextH2, TextP,TextRead, ButtonWrap, SortButton, AddButton, Plus} from './BlogsStyle'
import React, {useState} from 'react'
import { Blogs, Blog, SortBlogs } from './Types'
import { timeDifferenceForDate } from '../../../utils';
import { AUTH_TOKEN } from 'src/constants';
import { useMemo } from 'react';


const BlogList: React.FC<Blogs> = ( { blogs }) => {

  const authToken = localStorage.getItem(AUTH_TOKEN);

  const [sortButton, setSortButton] = useState<SortBlogs>(SortBlogs.ASC)

/* 
   const sortedBlogs = useMemo(() => {
    const sortedBlogs = [...blogs].sort((a: Blog,b: Blog) => sortButton === SortBlogs.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);
    return sortedBlogs
 }, [blogs, sortButton])  */



  const sortButtonChangeHandle = () => {
    
     blogs.sort((a: Blog,b: Blog) => sortButton === SortBlogs.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);

  };

/*   useEffect (() => {
    console.warn(blogs)
  })
 */
  
  return (
    <Wrapper>
        <ButtonWrap>
           <SortButton onClick={sortButtonChangeHandle}>{sortButton}</SortButton>
           { authToken && (
              <AddButton to='/add_blog'><Plus />Add story</AddButton>
           )}
        </ButtonWrap>     

      {blogs.map((blog:Blog) => (
        <Blogwrapper key={blog.id} >
              <Link to={`/blogs/${blog.id}`}>
                  <TextH2>{ blog.name }</TextH2>        
                 
                 <Date>
                    by {blog.author ? blog.author.name: 'Unknown'} |
                    created at {timeDifferenceForDate(blog.createdAt)}   
                  </Date>   

                
                  <TextP> { blog.small }</TextP>
                  <TextRead>Read more</TextRead>
              </Link>
            </Blogwrapper>
          )
      
      )}
    </Wrapper>
  )
}
 
export default BlogList;
