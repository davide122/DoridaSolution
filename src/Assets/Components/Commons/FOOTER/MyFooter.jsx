import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Importa Link da react-router-dom
import logo from "../Image/logo.png"; // Aggiorna con il percorso corretto del tuo logo

function MyFooter() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      transition={{ duration: 0.5 }}
      className="bg-black text-white pt-1 Offcanvas"
    >
      <div className="container-fluid p-5 bor d-flex ">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0 pd-3 d-flex">
            <div className="">
              <div className="mt-n3 ">
                <Link to="/" className="d-flex  mb-3 align-items-center  link-dark text-decoration-none">
                  <img src={logo} alt="Dorida Solution Logo" className="me-2" width="100" height="103" />
                  <span className="fs-5 navtitle text-white">
                    Dorida Solution
                  </span>
                </Link>
              </div>
              <p className="text-white fs-6 text-start w-100">
                Unire tradizione e innovazione per plasmare il futuro dell'Italia.
              </p>
              <p className="text-white fs-6 text-start">
                In Dorida Solution, abilitiamo il progresso tramite soluzioni tecnologiche all'avanguardia, promuovendo la conoscenza e la connettività per dare forma a un domani più luminoso e sostenibile per tutti.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h5 className="navtitle">Sezione</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 lifooter">
                <Link to="/" className="nav-link p-0 lifooter">Home</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/features" className="nav-link p-0 lifooter">Features</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/pricing" className="nav-link p-0 lifooter">Pricing</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/faqs" className="nav-link p-0 lifooter">FAQs</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/about" className="nav-link p-0 lifooter">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5 className="navtitle">Contatti</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 lifooter">
                <Link to="/tiktok" className="nav-link p-0 lifooter">Tiktok</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/facebook" className="nav-link p-0 lifooter">Facebook</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/instagram" className="nav-link p-0 lifooter">Instagram</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/linkedin" className="nav-link p-0 lifooter">Linkedin</Link>
              </li>
              <li className="nav-item mb-2 lifooter">
                <Link to="/doridamusic" className="nav-link p-0 lifooter">DoridaMusic</Link>
              </li>
              <li className="nav-item mb-2 lifooter d-flex mt-2 d-md-inline d-none">
                <a
                  href="https://doridasolutionbucket.s3.eu-north-1.amazonaws.com/benvenuti+alla.pdf"
                  download
                  className="bottone nav-item text-decoration-none p-2"
                >
                  <span class="bottone-content">Scarica la brochure</span>
                </a>
              </li>
            </ul>
          </div>
              <li className="nav-item mb-2 lifooter d-flex mt-2 d-md-none  ">
                <a
                  href="https://doridasolutionbucket.s3.eu-north-1.amazonaws.com/benvenuti+alla.pdf"
                  download
                  className="bottone2 nav-item text-decoration-none p-2"
                >
                  <span class="bottone-content">Scarica la brochure</span>
                </a>
              </li>
        </div>
      </div>
      <hr />
      <div className="w-100 py-2">
        <p className="fs-6" id="PositionBottom">
          © {new Date().getFullYear()} Dorida Solution. Tutti i diritti riservati.
        </p>
      </div>
    </motion.footer>
  );
}

export default MyFooter;
