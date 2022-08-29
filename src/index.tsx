import 'antd/dist/antd.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/Signin/SignIn';
import Create from './pages/Create';
import Details from './pages/Details';
import Notfound from './pages/Notfound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/signin' element={<SignIn  />} />
        <Route path='/add_blog' element={<Create  />} />
        <Route path='/blogs/:id' element={<Details  />} />
        <Route path='*' element={<Notfound  />} />
    </Routes>
  </BrowserRouter>
);



