import BlogList from './BlogList'
import { Container, Image1, Image2, Image3, Three } from './BlogsStyle'
import image from './images/outerspace.jpg'
import image2 from './images/space.jpg'
import image3 from './images/shuttle.jpg'
import  {useBlogs} from '../../../hooks/useBlogs'


 const Blogs = () => {

  const {error, loading, data} = useBlogs()


 
  return (
    <Container>        
        { error && <div>Error</div>}
        { loading && <div>Loading...</div>}
        { data &&  <BlogList blogs={data.blogs} />}    

        <Image1 src={image}></Image1>
        <Image2 src={image2}></Image2>      
        <Image3 src={image3}></Image3> 
        <Three>
         <h2>03</h2><span>Share</span>
        </Three>     

    </Container>
  )
}

export default Blogs





/* const Blogs = () => { 

  const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")    
  

  return (
    <Container>        
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { blogs &&  <BlogList blogs={blogs} />}    

        <Image1 src={image}></Image1>
        <Image2 src={image2}></Image2>      
        <Image3 src={image3}></Image3> 
        <Three>
         <h2>03</h2><span>Share</span>
        </Three>     

    </Container>
  )
}


*/