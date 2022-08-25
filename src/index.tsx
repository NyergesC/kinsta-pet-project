import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import SignIn from './components/Signin/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/signin' element={<SignIn  />} />
    </Routes>
  </BrowserRouter>
);



