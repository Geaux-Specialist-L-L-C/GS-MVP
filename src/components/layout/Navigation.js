// components/layout/Navigation.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  
  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

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
    <nav className={`${styles.navigation} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span>Geaux Specialist</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></span>
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
                aria-haspopup="true"
              >
                Projects
                <svg 
                  className={`${styles.dropdownIcon} ${showProjectsDropdown ? styles.rotated : ''}`} 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
              
              <ul 
                className={`${styles.dropdownMenu} ${showProjectsDropdown ? styles.show : ''}`}
                aria-label="Projects submenu"
                role="menu"
              >
                <li role="none">
                  <Link 
                    href="/projects" 
                    className={isActive('/projects')}
                    role="menuitem"
                  >
                    All Projects
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    href="/projects/geaux-academy" 
                    className={isActive('/projects/geaux-academy')}
                    role="menuitem"
                  >
                    Geaux Academy
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    href="/projects/geaux-helped" 
                    className={isActive('/projects/geaux-helped')}
                    role="menuitem"
                  >
                    Geaux HelpED
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    href="/projects/reanimated-echos" 
                    className={isActive('/projects/reanimated-echos')}
                    role="menuitem"
                  >
                    ReanimatED Echos
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    href="/projects/geaux-emporium" 
                    className={isActive('/projects/geaux-emporium')}
                    role="menuitem"
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