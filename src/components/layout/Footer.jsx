import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerTitle}>Geaux Specialist LLC</h3>
            <p>Empowering communities through innovative technology and education.</p>
            
            {/* Social Media Links */}
            <div className={styles.socialLinks}>
              <a 
                href="https://twitter.com/geauxspecialist" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className={styles.socialIcon}
              >
                <FaTwitter />
              </a>
              <a 
                href="https://facebook.com/geauxspecialist" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Like us on Facebook"
                className={styles.socialIcon}
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://linkedin.com/company/geauxspecialist" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className={styles.socialIcon}
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://github.com/geauxspecialist" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow our code on GitHub"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkColumn}>
              <h4>Navigate</h4>
              <ul aria-label="Site navigation">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinkColumn}>
              <h4>Projects</h4>
              <ul aria-label="Our projects">
                <li><Link href="/projects/geaux-academy">Geaux Academy</Link></li>
                <li><Link href="/projects/geaux-helped">Geaux HelpED</Link></li>
                <li><Link href="/projects/reanimated-echos">ReanimatED Echos</Link></li>
                <li><Link href="/projects/geaux-emporium">Geaux Emporium</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinkColumn}>
              <h4>Connect</h4>
              <ul aria-label="Contact information">
                <li>
                  <a href="mailto:info@geauxspecialist.com" aria-label="Email us at info@geauxspecialist.com">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" aria-label="Call us at (555) 123-4567">
                    (555) 123-4567
                  </a>
                </li>
                <li>
                  <address className={styles.address}>
                    123 Tech Plaza<br />
                    Suite 500<br />
                    Baton Rouge, LA 70808
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Geaux Specialist LLC. All rights reserved.</p>
          <div className={styles.footerLegal}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;