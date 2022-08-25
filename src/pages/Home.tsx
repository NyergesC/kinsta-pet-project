import Landing from "../components/Landingpage/Landing";
import Nav from "../components/Navbar/Nav";
import Blogs from '../components/Blogs/Blogs'

const Home: React.FC<{}>  = () => {
    

  return (
    <>
      <Nav />
      <Landing />
      <Blogs />
    </>
  )
}

export default Home