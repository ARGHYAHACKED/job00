import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';

function Navbar({ isLoggedIn, setIsLoggedIn }) { 
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setShowDropdown(false);
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleLoginClick = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex items-center rounded-lg'>
                <img
                    className='h-24 w-28'
                    src={logo}
                    alt="Logo"
                />
            </div>
            <div className="links flex gap-10">
                <Link 
                    to="/" 
                    className="text-black px-4 py-1 rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                >
                    Home
                </Link>
                <Link 
                    to="/Jobs" 
                    className="text-black px-2 py-1 rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                >
                    Jobs
                </Link>
                <Link 
                    to="/Category" 
                    className="text-black px-2 py-1 rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                >
                    Category
                </Link>
                <Link 
                    to="/About" 
                    className="text-black px-2 py-1 rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                >
                    About Us
                </Link>
                {isLoggedIn ? (
                    <div className="relative z-50">
                        <button 
                            onClick={toggleDropdown} 
                            className="text-black pl-[50px] pr-[40px] rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                        >
                            Profile
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                <button 
                                    onClick={handleProfileClick} 
                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                >
                                    Profile
                                </button>
                                <button 
                                    onClick={handleLogout} 
                                    className="w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <button 
                            onClick={handleLoginClick} // Handle login click
                            className="text-black px-4 py-1 rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                        >
                            Login
                        </button>
                        <button 
                            onClick={handleSignUpClick} 
                            className="text-black px-4 py-1 rounded-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                        >
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
