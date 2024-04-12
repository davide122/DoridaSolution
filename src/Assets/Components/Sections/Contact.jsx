import { HiOutlinePaperAirplane } from "react-icons/hi2";

const Contact = () =>{
    return (
        <form 
          action="https://formspree.io/f/mnqebblb" 
          method="POST"
          className="contact-form"
        >
          <div className="d-flex justify-content-center align-items-center">
          <input type="email" name="email" placeholder="La tua email" required />
          <button type="submit"><HiOutlinePaperAirplane/></button>
          </div>

        </form>
      );
};
export default Contact;