import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { lightanddark } from "../learn/ContextApi/LightAndDark";
function Header() {
    const {dark,ToggleOption } = useContext(lightanddark);
  return <div>
    <header className="bg-white shadow-lg sticky top-0 z-50 dark:bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center dark:from-blue-600 dark:to-purple-600">
                        <i data-lucide="shopping-cart" className="w-5 h-5 text-white"></i>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">EliteStore</span>
                </div>
                <nav className="hidden md:flex space-x-8 dark:text-white">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 transition-colors'}>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 transition-colors'} >Products</NavLink>
                    <NavLink to="/categories" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 transition-colors'} >Categories</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 transition-colors'}>Blog</NavLink>
                </nav>
                <div className="flex items-center space-x-4 dark:text-white">
                    <NavLink to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <FaShoppingCart  className="w-6 h-6"></FaShoppingCart>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center dark:text-red-500">3</span>
                    </NavLink>
                    <NavLink>
                        <button onClick={ToggleOption} className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                            {dark ? (
                                <FaMoon className="w-6 h-6"></FaMoon>
                            ) : (
                                <FaSun className="w-6 h-6"></FaSun>
                            )}
                        </button>
                    </NavLink>
                    <NavLink to="/login" className="p-2 text-gray-700 hover:text-blue-600 transition-colors dark:text-white">
                        <FaRegUserCircle  className="w-6 h-6"></FaRegUserCircle>
                    </NavLink>
                </div>
            </div>
        </div>
    </header>
  </div>;
}

export default Header;
