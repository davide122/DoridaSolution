import { HiOutlinePaperAirplane } from "react-icons/hi2";
import logo from "../Commons/Image/logo.png"
const Arriviamo = () => {
    return(
<div className="vh-100 d-flex justify-content-center align-items-center text-center flex-column">
    <img src={logo} alt=""className="logo" />
<h1 className="Title">Stiamo arrivando!</h1>

<form name="contact" className="contact-form" netlify>
    <div className="d-flex">
  <p className="">
    <label> <input type="email" placeholder="do@gmail.com" name="email" className="" /></label>
  </p>
  <p>
    <button type="submit"><HiOutlinePaperAirplane></HiOutlinePaperAirplane></button>
  </p>
    </div>
</form>
</div>
    )
}
export default Arriviamo;