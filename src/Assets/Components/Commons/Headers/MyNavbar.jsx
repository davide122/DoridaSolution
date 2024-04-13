import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaHome, FaMusic, FaBriefcase, FaPhone, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../Commons/Image/logo.png";
import { Offcanvas } from 'react-bootstrap'; // Assicurati di avere importato Offcanvas
import "./mynav.css"
const MyNavbar = ({ className }) => {
    const [show, setShow] = useState(false);

    const toggleOffcanvas = () => setShow(!show);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${className}`} style={{ backgroundColor: '#000' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="Logo" height="40" className="me-2" />
                    <span>Dorida Solution</span>
                </Link>

                <button className="navbar-toggler" type="button" onClick={toggleOffcanvas}>
                    <FaBars size={24} color="white" />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-item nav-link d-flex align-items-center">
                            <FaHome className="me-2" /> Home
                        </Link>
                        <Link to="/music" className="nav-item nav-link d-flex align-items-center">
                            <FaMusic className="me-2" /> Dorida Music
                        </Link>
                        <Link to="/services" className="nav-item nav-link d-flex align-items-center">
                            <FaBriefcase className="me-2" /> Servizi
                        </Link>
                        <Link to="/contact" className="nav-item nav-link d-flex align-items-center">
                            <FaPhone className="me-2" /> Contatti
                        </Link>
                        <Link to="/about" className="nav-item nav-link d-flex align-items-center">
                            <FaInfoCircle className="me-2" /> Chi siamo
                        </Link>
                    </div>
                </div>

                <Link to="/profile" className="d-none d-lg-block ms-3">
                    <FaUserCircle size={30} color="white" />
                </Link>

                <Offcanvas show={show} onHide={toggleOffcanvas} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={toggleOffcanvas}>
                                    <FaHome className="me-2" />Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/music" className="nav-link" onClick={toggleOffcanvas}>
                                    <FaMusic className="me-2" />Dorida Music
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link" onClick={toggleOffcanvas}>
                                    <FaBriefcase className="me-2" />Servizi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" onClick={toggleOffcanvas}>
                                    <FaPhone className="me-2" />Contatti
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" onClick={toggleOffcanvas}>
                                    <FaInfoCircle className="me-2" />Chi siamo
                                </Link>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
    );
};

export default MyNavbar;
