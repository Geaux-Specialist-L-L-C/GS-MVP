import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/HeroSection.module.css';

const HeroSection = ({
  title = 'Empowering Communities Through Innovation',
  subtitle = 'Geaux Specialist LLC delivers cutting-edge solutions in technology and education.',
  primaryButtonText = 'Explore Projects',
  primaryButtonLink = '/projects',
  secondaryButtonText = 'About Us',
  secondaryButtonLink = '/about',
  backgroundImage = '/images/hero-background.jpg'
}) => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.buttons}>
            <Link href={primaryButtonLink} className={`button button-primary ${styles.button}`}>
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonLink} className={`button button-secondary ${styles.button}`}>
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;