import { FiHome,FiSearch } from "react-icons/fi";

const DoridaMusic = () =>{
    return(
<div className="container-fluid ">
<div className="row">
    <div className="col col-1 vh-100 ">
<div className=" bg-dark  rounded-2 d-flex flex-column justify-content-center align-items-center bg-dark my-3">
<button className="text-center trasparent"><FiHome className="fs-2 text-center"/></button>
<button className="text-center trasparent"><FiSearch className="fs-2 text-center"/></button>
</div>

<div className="bg-dark  my-2 rounded-2 d-flex flex-column justify-content-center align-items-center bg-dark vh-100">

</div>

    </div>
    <div className="col col-11 bg-black">
        <div className="vh-100 bg-white mt-3">
<div className="w-100 top bg-darkGradient">

</div>
        </div>
    </div>
</div>
</div>
    )
}
export default DoridaMusic;