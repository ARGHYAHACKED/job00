import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Category from './components/pages/Catagory';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import Navbar from './components/Navbar';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Apply from './components/pages/Apply';
import Create from './components/pages/Create';
import Applications from './components/pages/Applications';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('Student');
  const [formData, setFormData] = useState({}); // New state for form data

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Profile' element={<Profile role={role} formData={formData} />} /> {/* Pass formData to Profile */}
        <Route path="/create-job" element={<Create />} />
        <Route path='/Jobs' element={<Jobs role={role} />} /> {/* Pass role to Jobs */}
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} setRole={setRole} setFormData={setFormData} />} /> {/* Pass setFormData to SignUp */}
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/apply/:id' element={<Apply />} />
        <Route path="/profile/applications/:jobId" element={<Applications />} /> {/* Route for Applications */}
      </Routes>
    </>
  );
}

export default App;
