// Header component for the website
import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="site-header">
      <Navigation />
    </header>
  );
};

export default Header;