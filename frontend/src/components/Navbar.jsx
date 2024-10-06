import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import logo1 from "../assets/craftcircle.png"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#f4f4f4] p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          {/* <Link to="/about" className="text-black hover:underline">
            About
          </Link> */}
          <Link to="/crafts" className="text-black hover:underline">
            Crafts
          </Link>
          {/* <Link to="#" className="text-black hover:underline">
            Contact
          </Link> */}
          <Link to="/artisans" className="text-black hover:underline">
            Artisans
          </Link>
          <Link to="/postcraftform" className="text-black hover:underline">
            Post Craft
          </Link>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="CraftCircle Logo" className="h-8 w-8" /> */}
          <span className="text-black text-xl font-semibold"><img className=" w-[45%] h-5 md:w-[70%] md:h-16" src={logo1} alt="" /></span>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6 text-black" />
            ) : (
              <FiMenu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/login" className="text-black hover:underline">
            Login
          </Link>
          <Link to="/profile" className="text-black hover:underline">
            Profile
          </Link>
          <Link to="/marketplace" className="text-black hover:underline">
            Marketplace
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 p-4">
          <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          {/* <Link to="/about" className="text-black hover:underline">
            About
          </Link> */}
          <Link to="/crafts" className="text-black hover:underline">
            Crafts
          </Link>
          {/* <Link to="#" className="text-black hover:underline">
            Contact
          </Link> */}
          <Link to="/artisans" className="text-black hover:underline">
            Artisans
          </Link>
          <Link to="/login" className="text-black hover:underline">
            Login
          </Link>
          <Link to="/profile" className="text-black hover:underline">
            Profile
          </Link>
          <Link to="/marketplace" className="text-black hover:underline">
            Marketplace
          </Link>
         
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
