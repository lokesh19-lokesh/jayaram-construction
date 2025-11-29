import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
    secondary: "bg-accent text-white hover:bg-accent-light focus:ring-accent",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    white: "bg-white text-primary hover:bg-gray-100 focus:ring-white",
    ghost: "text-primary hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
