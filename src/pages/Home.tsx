import Landing from "../components/Landingpage/Landing";
import Nav from "../components/Navbar/Nav";
import Blogs from '../components/Blogs/Bloglist/Blogs'
import Trips from "../components/Trips/Trips";
import AboutUs from "../components/About/About";


const Home: React.FC<{}>  = () => {
    

  return (
    <>
      <Nav />
      <Landing />
      <AboutUs />
      <Trips />
      <Blogs />
    </>
  )
}

export default Home