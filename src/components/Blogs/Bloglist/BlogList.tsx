import { Link } from 'react-router-dom';
import { Wrapper,Blogwrapper, Date, TextH2, TextP,TextRead, ButtonWrap, SortButton, AddButton, Plus} from './BlogsStyle'
import React, {useState} from 'react'
import { Blogs, Blog, SortBlogs } from './Types'
import { timeDifferenceForDate } from '../../../utils';
import { useContext } from 'react';
import { LoginContext } from 'src/UserContext'
import { useBlogs} from '../../../hooks/useBlogs'



const BlogList: React.FC<Blogs> = ( { blogs }) => {

  const [sortButton, setSortButton] = useState<SortBlogs>(SortBlogs.ASC)
  const loginContext = useContext(LoginContext)

   const {data, updateQuery} = useBlogs()

  const sortButtonChangeHandle = () => {

    const sortedBlogs = [...data?.blogs].sort((a: Blog, b: Blog) => sortButton === SortBlogs.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    updateQuery(() => ({
        blogs: [...sortedBlogs]
    }));

    setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);

    console.log(sortedBlogs)
};

   
/* 
    const sortedBlogs = useMemo(() => {

        const clonedBlogs = [...blogs]
        clonedBlogs.sort((a: Blog,b: Blog) => sortButton === SortBlogs.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setSortButton(sortButton === SortBlogs.ASC ? SortBlogs.DESC : SortBlogs.ASC);
        return clonedBlogs
    }, [blogs, sortButton]);   
 */


  
  return (
    <Wrapper>
        <ButtonWrap>
           <SortButton onClick={sortButtonChangeHandle}>{sortButton}</SortButton>
           { loginContext.userContext.id !== "" &&  
              <AddButton to='/add_blog'><Plus />Add story</AddButton>
           }
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
