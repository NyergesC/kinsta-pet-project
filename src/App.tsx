import 'antd/dist/antd.css'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/Signin/SignIn';
import Create from './pages/Create';
import Details from './pages/Details';
import Notfound from './pages/Notfound';
import Apply from './pages/Apply';
import { LoginContextProvider } from './UserContext';


function App() {
  
   return (
  <BrowserRouter>
    <LoginContextProvider>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/signin' element={<SignIn  />} />
          <Route path='/apply' element={<Apply  />} />
          <Route path='/add_blog' element={<Create  />} />
          <Route path='/blogs/:id' element={<Details  />} />
          <Route path='*' element={<Notfound  />} />
        </Routes>
    </LoginContextProvider>
  </BrowserRouter>
);

    }
export default App

