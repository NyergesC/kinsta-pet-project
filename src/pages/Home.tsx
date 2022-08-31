import Landing from "../components/Landingpage/Landing";
import Nav from "../components/Navbar/Nav";
import Blogs from '../components/Blogs/Bloglist/Blogs'
import Trips from "../components/Trips/Trips";
import ApplyForm from "../components/Apply/Apply";

const Home: React.FC<{}>  = () => {
    

  return (
    <>
      <Nav />
      <Landing />
      <Trips />
      <ApplyForm />
      <Blogs />
    </>
  )
}

export default Home