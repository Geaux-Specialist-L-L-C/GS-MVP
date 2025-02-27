// Header component for the website
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <span className="logo-text">GeauxSpecialist</span>
            </a>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;