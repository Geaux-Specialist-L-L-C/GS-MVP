import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}) => {
  return (
    <section className='hero-section' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='container'>
        <div className='hero-content'>
          <h1 className='hero-title'>{title}</h1>
          <p className='hero-subtitle'>{subtitle}</p>
          <div className='hero-buttons'>
            <Link href={primaryButtonLink} passHref>
              <a className='btn btn-primary'>{primaryButtonText}</a>
            </Link>
            <Link href={secondaryButtonLink} passHref>
              <a className='btn btn-secondary'>{secondaryButtonText}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  primaryButtonLink: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  secondaryButtonLink: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSection;
