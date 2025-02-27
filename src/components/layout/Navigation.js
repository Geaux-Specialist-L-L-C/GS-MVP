// components/layout/Navigation.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProjectsDropdown = () => {
    setShowProjectsDropdown(!showProjectsDropdown);
  };

  const isActive = (path) => {
    return router.pathname === path ? styles.active : '';
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span>Geaux Specialist</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        {/* Nav links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <ul>
            <li>
              <Link href="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about')}>
                About
              </Link>
            </li>
            <li className={styles.dropdown}>
              <button 
                className={`${styles.dropdownButton} ${isActive('/projects')}`} 
                onClick={toggleProjectsDropdown}
                aria-expanded={showProjectsDropdown}
              >
                Projects
                <svg 
                  className={styles.dropdownIcon} 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12"
                >
                  <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
              
              <ul className={`${styles.dropdownMenu} ${showProjectsDropdown ? styles.show : ''}`}>
                <li>
                  <Link href="/projects" className={isActive('/projects')}>
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects/geaux-academy" 
                    className={isActive('/projects/geaux-academy')}
                  >
                    Geaux Academy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects/geaux-helped" 
                    className={isActive('/projects/geaux-helped')}
                  >
                    Geaux HelpED
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects/reanimated-echos" 
                    className={isActive('/projects/reanimated-echos')}
                  >
                    ReanimatED Echos
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects/geaux-emporium" 
                    className={isActive('/projects/geaux-emporium')}
                  >
                    Geaux Emporium
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;