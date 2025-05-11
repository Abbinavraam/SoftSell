import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const Logo = () => {
  const { theme } = useContext(ThemeContext);
  
  // Colors based on theme
  const primary = theme === 'dark' ? '#5a9ff2' : '#4a90e2';
  const secondary = theme === 'dark' ? '#e0e0e0' : '#2c3e50';
  const accent = theme === 'dark' ? '#b8941b' : '#f1c40f';
  const textColor = theme === 'dark' ? '#e0e0e0' : '#2c3e50';

  return (
    <motion.div
      className="logo"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer'
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        width="50" 
        height="50"
        style={{ 
          display: 'inline-block', 
          verticalAlign: 'middle', 
          marginRight: '10px',
          filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2))'
        }}
      >
        {/* Background rounded square */}
        <rect 
          width="100" 
          height="100" 
          rx="20" 
          fill={primary}
        />
        
        {/* Sell design */}
        <path 
          d="M30 30 C30 30, 50 20, 70 30 L70 70 C70 70, 50 80, 30 70 Z" 
          fill="white" 
          stroke={secondary} 
          strokeWidth="3"
        />
        
        {/* Inner sell detail */}
        <path 
          d="M40 40 C40 40, 50 35, 60 40 L60 60 C60 60, 50 65, 40 60 Z" 
          fill={accent} 
          stroke={secondary} 
          strokeWidth="1.5"
        />
      </svg>
      
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ 
          display: 'inline-block', 
          verticalAlign: 'middle',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: textColor,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span style={{ color: primary }}>Soft</span>
        <span style={{ color: accent }}>Sell</span>
      </motion.span>
    </motion.div>
  );
};

export default Logo;