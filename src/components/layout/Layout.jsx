import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children, title = 'Geaux Specialist', description = 'Innovative solutions across various domains' }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
