const Contact = () =>{
    return (
        <form 
          action="https://formspree.io/f/mnqebblb" 
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Il tuo nome" required />
          <input type="email" name="email" placeholder="La tua email" required />
          <textarea name="message" rows="5" placeholder="Il tuo messaggio" required></textarea>
          <button type="submit">Invia</button>
        </form>
      );
};
export default Contact;