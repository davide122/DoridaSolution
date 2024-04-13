import { FiHome, FiMusic, FiRadio, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png"
import "./Css/Musicnav.css"
const MusicNavbar = () => {
  return(
<nav className="navbar navi navbar-dark bg-black ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Dorida Logo" height="60" className="d-inline-block align-top" />
            <span className='navbar-text ms-2'>Dorida Music</span>
          </Link>

          <div className="navbar-nav d-flex flex-row">
            <Link to="/" className="nav-link d-flex align-items-center me-3">
              <FiHome className="fs-4" /><span className="ms-2 navbar-text ">Home</span>
            </Link>
            <Link to="/music" className="nav-link d-flex align-items-center me-3">
              <FiMusic   className="fs-4"/><span className="ms-2 navbar-text">Music</span>
            </Link>
            <Link to="/radio" className="nav-link d-flex align-items-center">
              <FiRadio className="fs-4"/><span className="ms-2 navbar-text">Radio</span>
            </Link>
          </div>

          

          <Link to="/user" className="ms-3">
            <FiUser className="user-icon text-white" />
          </Link>
        </div>
      </nav>
  )
}
export default MusicNavbar;