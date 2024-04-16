import { FiHome, FiMusic, FiRadio, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png"
import "./Css/Musicnav.css"
const MusicNavbar = () => {
  return(
    <nav className="navbar navbar-dark bg-black">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Dorida Logo" height="60" className="d-inline-block align-top" />
          <span className='navbar-text ms-2'>Dorida Music</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FiHome className="fs-4" /><span className="ms-2 navbar-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/music" className="nav-link">
                  <FiMusic className="fs-4" /><span className="ms-2 navbar-text">Music</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/radio" className="nav-link">
                  <FiRadio className="fs-4" /><span className="ms-2 navbar-text">Radio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  <FiUser className="fs-4" /><span className="ms-2 navbar-text">User</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default MusicNavbar;