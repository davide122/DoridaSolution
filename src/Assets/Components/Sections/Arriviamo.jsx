import logo from "../Commons/Image/logo.png"
import Contact from "./Contact";
import nova from "../Commons/Image/rodeo.png"
const Arriviamo = () => {
    return(
<div className="vh-100 d-flex justify-content-center align-items-center text-center flex-column gradient">
    <img src={logo} alt=""className="logo" />
<h1 className="Title">Stiamo arrivando!</h1>

<Contact></Contact>
<div className="divnova">
</div>
<h3 className="text-white fs-6 text-center mx-3">Se lascerai la tua email, avrai l'accesso a un buono del 20% sui primi servizi che acquisterai.</h3>
</div>
    )
}
export default Arriviamo;


