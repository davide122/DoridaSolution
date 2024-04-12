import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../Image/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa'; // Assicurati di avere 'react-icons' nel tuo progetto

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Varianti per animazioni Framer Motion
  const variants = {
    open: { rotate: 90, scale: 1.2 },
    closed: { rotate: 0, scale: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar navbar-expand-lg navbar-dark fs-3"
      style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: '#000' }} // Sfondo nero
    >
      <div className="container-fluid text-center justify-content-center justify-content-lg-between">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Logo" className='logo' />
        </a>

        <button
          className="navbar-toggler border-0" // Rimozione del bordo per pulizia
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />} 
          </motion.div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active  " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a> 
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default MyNavbar;
