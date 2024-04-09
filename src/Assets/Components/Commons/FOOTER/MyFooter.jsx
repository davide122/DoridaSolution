import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { motion } from 'framer-motion';

function MyFooter() {
  return (
    <Footer container className="bg-black text-white ">
      <div className="w-full">
        <div className="flex flex-wrap justify-between items-center">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
            className="text-white"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="hidden sm:block"
          >
            {/* Qui puoi inserire il tuo elemento grafico della palla animata */}
            {/* Assicurati di avere un'icona o un'immagine della palla qui */}
          </motion.div>
          {/* Sezioni del footer qui */}
        </div>
        <Footer.Divider />
        <div className="flex flex-wrap justify-between items-center">
          <Footer.Copyright text="© 2023 Your Company. Tutti i diritti riservati." />
          <div className="flex space-x-4">
            {/* I tuoi link ai social qui */}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
