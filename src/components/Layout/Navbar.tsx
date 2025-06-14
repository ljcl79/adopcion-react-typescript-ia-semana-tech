import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link de React Router DOM
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
    const { currentUser, logout } = useAuth();

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="Pet Haven Logo" className="h-10" />
                        <span className="text-2xl font-bold text-gray-800">Pet Haven</span>
                    </Link>
                </div>
                <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
                    <li><Link to="/find-a-pet" className="hover:text-blue-600">Find a pet</Link></li>
                    <li><Link to="/how-it-works" className="hover:text-blue-600">How it works</Link></li>
                    <li className="relative group">
                        <a href="#" className="hover:text-blue-600 flex items-center">Adopt <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
                        {/* Dropdown (Placeholder) */}
                        <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 rounded mt-2 z-10">
                            <Link to="/dogs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dogs</Link>
                            <Link to="/cats" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cats</Link>
                        </div>
                    </li>
                    <li><Link to="/about-us" className="hover:text-blue-600">About Us</Link></li>
                    <li><Link to="/donate" className="hover:text-blue-600">Donate</Link></li>
                    {currentUser && (
                        <li id="myprofile_link" data-cy="profile_link"><Link to="/profile" className="hover:text-blue-600">My Profile</Link></li>
                    )}
                </ul>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>

                    {currentUser ? (
                        // Si el usuario está logueado
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-700 font-semibold hidden sm:inline">Hola, {currentUser.username}!</span>
                            <button
                                id="btn_logout"
                                data-cy="btn_logout"
                                onClick={logout}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        // Si el usuario no está logueado
                        <>
                            <Link to="/login" id="link_login" data-cy="link_login" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Sign In</Link>
                            <Link to="/register" id="link_register" data-cy="link_register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;