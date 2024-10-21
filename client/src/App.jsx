import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom' ;
import {RegisterUser , AdminLogin , AdminPanel} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/register-user" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Register User
        </Link>
        <Link to="/admin-login" className='font-inter font-medium bg-[#ffa764] text-white px-4 py-2 rounded-md'>
          Admin Login
        </Link>
      </div>

      <main>
        <Routes>
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </main>
    </BrowserRouter>
      
  );
};

export default App
