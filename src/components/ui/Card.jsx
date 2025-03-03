// File: /src/components/ui/Card.jsx
// Description: Card component for the UI
// Author: GitHub Copilot
// Created: 2024-03-03

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({
  title,
  subtitle,
  content,
  imageUrl,
  imageAlt,
  footer,
  className,
  onClick,
}) => {
  return (
    <div className={`card ${className}`} onClick={onClick} role='button' tabIndex={0} onKeyPress={onClick}>
      {imageUrl && (
        <div className='card-image'>
          <Image src={imageUrl} alt={imageAlt} layout='responsive' objectFit='cover' />
        </div>
      )}
      <div className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <h4 className='card-subtitle'>{subtitle}</h4>
        <p className='card-content'>{content}</p>
      </div>
      {footer && <div className='card-footer'>{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  footer: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  subtitle: '',
  content: '',
  imageUrl: '',
  imageAlt: '',
  footer: null,
  className: '',
  onClick: null,
};

export default Card;