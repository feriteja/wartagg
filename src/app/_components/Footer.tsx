// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">
          © {new Date().getFullYear()} WartaGG | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
