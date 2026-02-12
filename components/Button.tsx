import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  fullWidth = false
}) => {
  // Added rounded-lg to baseStyles
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border rounded-lg";
  
  const variants = {
    primary: "bg-aisla-red border-aisla-red text-white hover:bg-red-700 focus:ring-aisla-red",
    secondary: "bg-aisla-black border-aisla-black text-white hover:bg-gray-900 focus:ring-aisla-black",
    outline: "bg-transparent border-aisla-red text-aisla-red hover:bg-aisla-red hover:text-white focus:ring-aisla-red",
    white: "bg-white border-white text-aisla-red hover:bg-gray-100 focus:ring-white"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;