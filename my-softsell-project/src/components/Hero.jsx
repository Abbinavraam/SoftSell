import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import '../styles/global.css';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`hero-container ${theme === 'dark' ? 'dark-hero' : ''}`}>
      <div className="hero-nav">
        <div className="hero-nav-logo">
          <Logo />
        </div>
        <div className="hero-nav-toggle">
          <ThemeToggle />
        </div>
      </div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-headline"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unlock the Value of Your Software Licenses
        </motion.h1>
        
        <motion.p 
          className="hero-subheading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get a quote for your unused software licenses and turn them into cash
        </motion.p>
        
        <motion.button 
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;