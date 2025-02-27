import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerTitle}>Geaux Specialist LLC</h3>
            <p>Empowering communities through technology and education.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkColumn}>
              <h4>Navigate</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinkColumn}>
              <h4>Projects</h4>
              <ul>
                <li><Link href="/projects/geaux-academy">Geaux Academy</Link></li>
                <li><Link href="/projects/geaux-helped">Geaux HelpED</Link></li>
                <li><Link href="/projects/reanimated-echos">ReanimatED Echos</Link></li>
                <li><Link href="/projects/geaux-emporium">Geaux Emporium</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinkColumn}>
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:info@geauxspecialist.com">Email Us</a></li>
                <li><a href="https://linkedin.com/company/geauxspecialist" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/geauxspecialist" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://facebook.com/geauxspecialist" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Geaux Specialist LLC. All rights reserved.</p>
          <div className={styles.footerLegal}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;