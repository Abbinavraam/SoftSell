import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Animation variants
  const toggleVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  const sunMoonVariants = {
    initial: { 
      rotate: isDark ? 45 : 0,
      scale: isDark ? 0.2 : 1
    },
    animate: { 
      rotate: isDark ? 0 : 45,
      scale: isDark ? 1 : 0.2,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const toggleContainerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: isDark 
      ? '0 2px 10px rgba(0, 0, 0, 0.5)' 
      : '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
  };

  return (
    <motion.div
      onClick={toggleTheme}
      style={toggleContainerStyle}
      variants={toggleVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleTheme();
        }
      }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={sunMoonVariants}
        style={{ 
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        {isDark ? (
          <FaMoon 
            size={18} 
            color="#f1c40f" 
            style={{ 
              filter: 'drop-shadow(0 0 2px rgba(241, 196, 15, 0.5))'
            }} 
          />
        ) : (
          <FaSun 
            size={18} 
            color="#f39c12" 
            style={{ 
              filter: 'drop-shadow(0 0 2px rgba(243, 156, 18, 0.5))'
            }} 
          />
        )}
      </motion.div>
      
      {/* Background glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isDark ? 0.2 : 0.1,
          transition: { duration: 0.5 }
        }}
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          borderRadius: '50%',
          background: isDark 
            ? 'radial-gradient(circle, rgba(241, 196, 15, 0.3) 0%, rgba(0, 0, 0, 0) 70%)' 
            : 'radial-gradient(circle, rgba(243, 156, 18, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
};

export default ThemeToggle;
