// Main Layout component that wraps all pages
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'GeauxSpecialist' }) => {
  return (
    <>
      <Head>
        <title>{title} | Innovative Solutions</title>
        <meta name="description" content="GeauxSpecialist LLC - Innovative solutions across education, healthcare, technology, and e-commerce." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="site-wrapper">
        <Header />
        
        <main className="main-content">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;