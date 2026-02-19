import React, { ReactNode } from 'react';

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-fox-orange hover:bg-fox-orangeHover text-white shadow-[0_0_20px_rgba(231,57,8,0.3)] hover:shadow-[0_0_30px_rgba(231,57,8,0.5)] border border-transparent",
    secondary: "bg-white text-black hover:bg-gray-200 border border-transparent",
    outline: "bg-transparent border border-white/20 text-white hover:border-fox-orange hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

// --- Card Component ---
interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group ${className}`}>
      {/* Hover Gradient Overlay */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-fox-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// --- Badge Component ---
export const Badge: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fox-purple/30 text-purple-200 border border-fox-purple/50 mb-4 backdrop-blur-sm">
    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
    {children}
  </span>
);