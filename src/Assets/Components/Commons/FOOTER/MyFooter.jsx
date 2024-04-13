import React from "react";
import { motion } from "framer-motion";
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
      <div className="container-fluid p-5 bor">
        <div className="row">
          <div className="col-12 col-md-3 mb-3 mb-md-0 pd-3 d-flex ">
            <div className="">
              <div className="mt-n3">
                <a
                  href="/"
                  className="d-flex  mb-3 align-items-center  link-dark text-decoration-none "
                >
                  <img
                    src={logo}
                    alt="Dorida Solution Logo"
                    className="me-2"
                    width="100"
                    height="103"
                  />
                  <span className="fs-5 navtitle text-white ">
                    Dorida Solution
                  </span>
                </a>
              </div>

              <p className="text-white fs-6 text-start w-100">
                Unire tradizione e innovazione per plasmare il futuro
                dell'Italia.
              </p>
              <p className="text-white fs-6 text-start">
                {" "}
                In Dorida Solution, abilitiamo il progresso tramite soluzioni
                tecnologiche all'avanguardia, promuovendo la conoscenza e la
                connettività per dare forma a un domani più luminoso e
                sostenibile per tutti.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h5 className="navtitle">Sezione</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="navtitle">Contatti</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Tiktok
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Linkedin
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  DoridaMusic
                </a>
              </li>
              <li className="nav-item mb-2 lifooter d-flex mt-2">
                <a
                  href="https://doridasolutionbucket.s3.eu-north-1.amazonaws.com/benvenuti+alla.pdf"
                  download
                  className="bottone nav-item text-decoration-none pt-1"
                >
                  <span class="bottone-content">Scarica la brochure</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="navtitle">Contatti</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Tiktok
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  Linkedin
                </a>
              </li>
              <li className="nav-item mb-2 lifooter">
                <a href="#" className="nav-link p-0 lifooter">
                  DoridaMusic
                </a>
              </li>
              <li className="nav-item mb-2 lifooter d-flex mt-2"></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-100">
        <p className="fs-6" id="PositionBottom">
          © {new Date().getFullYear()} Dorida Solution. Tutti i diritti
          riservati.
        </p>
      </div>
    </motion.footer>
  );
}

export default MyFooter;
