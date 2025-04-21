import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Sparkles, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-pink-600"
            onClick={closeMenu}
          >
            <Sparkles className="h-6 w-6" />
            <span>GlowCheck<span className="text-violet-600">+</span></span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/saved-products" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/saved-products') 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  My Products
                </Link>
                <Link 
                  to="/profile" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/profile') 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  <User className="h-5 w-5" />
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 transition-colors shadow-sm"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-pink-600 focus:outline-none focus:text-pink-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/saved-products" 
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/saved-products') 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                  onClick={closeMenu}
                >
                  My Products
                </Link>
                <Link 
                  to="/profile" 
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/profile') 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                  onClick={closeMenu}
                >
                  Profile
                </Link>
                <button 
                  onClick={() => {
                    handleSignOut();
                    closeMenu();
                  }}
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600 transition-colors"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}