import React from 'react';
import './Footer.css';
import logo from '../assets/images/AlouraLogo.jpg'; // Adjust path if needed

function Footer() {
  return (
    <footer className="footer">
      {/* Left: Logo + Tagline */}
      <div className="footer-left">
        <img src={logo} alt="Krystal logo" className="footer-logo" />
        <p>Aloura Media — Growing with specialists.</p>
      </div>

      {/* Center: Social Links */}
      <div className="footer-center">
        <a href="https://www.instagram.com/helloaloura/?next=%2F" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100011490302972" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>

      {/* Right: Copyright */}
      <div className="footer-right">
        <p>© 2023 Aloura Media. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;