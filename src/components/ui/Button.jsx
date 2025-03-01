import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const widthClasses = fullWidth ? 'btn-full' : '';
  
  // Check if button should have flip effect
  const hasFlipEffect = className.includes('hover-flip-card');
  const flipClass = hasFlipEffect ? 'flip-card-effect' : '';
  
  const buttonClasses = [
    baseClasses, 
    variantClasses, 
    sizeClasses, 
    widthClasses,
    flipClass,
    className
  ].join(' ').trim();
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
