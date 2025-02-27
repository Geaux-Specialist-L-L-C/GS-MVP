// Footer component for the website
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-branding">
            <h3>GeauxSpecialist</h3>
            <p>Innovative solutions across education, healthcare, technology, and e-commerce.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/projects"><a>Projects</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>
          
          <div className="footer-projects">
            <h4>Our Projects</h4>
            <ul>
              <li><Link href="/projects/geaux-academy"><a>Geaux Academy</a></Link></li>
              <li><Link href="/projects/geaux-helped"><a>Geaux HelpED</a></Link></li>
              <li><Link href="/projects/reanimated-echos"><a>ReanimatED Echos</a></Link></li>
              <li><Link href="/projects/geaux-emporium"><a>Geaux Emporium</a></Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <address>
              <p>Email: <a href="mailto:contact@geauxspecialist.com">contact@geauxspecialist.com</a></p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Geaux Specialist LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;