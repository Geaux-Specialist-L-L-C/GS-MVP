// Reusable Card component
import React from 'react';
import Image from 'next/image';

const Card = ({
  title,
  subtitle,
  content,
  imageUrl,
  imageAlt = '',
  footer,
  className = '',
  onClick,
}) => {
  const cardClasses = `card ${className}`;
  
  return (
    <div className={cardClasses} onClick={onClick}>
      {imageUrl && (
        <div className="card-image">
          <Image 
            src={imageUrl}
            alt={imageAlt || title}
            layout="responsive"
            width={400}
            height={250}
            objectFit="cover"
          />
        </div>
      )}
      
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
        {content && <div className="card-content">{content}</div>}
      </div>
      
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;