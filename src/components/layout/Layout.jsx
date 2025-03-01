import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import Footer from './Footer';
import { initGA, logPageView } from '../../lib/analytics';
import styles from '../../styles/Layout.module.css';

const Layout = ({ 
  children, 
  title = 'Geaux Specialist', 
  description = 'Innovative solutions across education, healthcare, technology, and e-commerce.', 
  keywords = 'education, healthcare, technology, e-commerce',
  ogImage = '/images/geauxspecialist-og.jpg',
  canonical 
}) => {
  const siteUrl = 'https://www.geauxspecialist.com';
  const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    router.events.on('routeChangeComplete', logPageView);
    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} | GeauxSpecialist.com`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={pageUrl} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${title} | GeauxSpecialist.com`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={`${title} | GeauxSpecialist.com`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
