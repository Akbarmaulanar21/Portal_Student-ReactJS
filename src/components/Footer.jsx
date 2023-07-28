import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text" style={{ textAlign: "center", background: "none" }}>
          &copy; {new Date().getFullYear()} Ruangguru-Akbar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
