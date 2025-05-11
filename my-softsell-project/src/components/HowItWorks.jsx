import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/global.css';

const HowItWorks = () => {
  const { theme } = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(() => {
    setCurrentTheme(theme);
    const container = document.querySelector('.how-it-works-container');
    if (container) {
      if (theme === 'dark') {
        container.classList.add('dark');
      } else {
        container.classList.remove('dark');
      }
    }
  }, [theme]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className={`how-it-works-container ${currentTheme === 'dark' ? 'dark' : ''}`}>
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          color: 'var(--text-color)',
          fontSize: '36px',
          fontWeight: 'bold'
        }}
      >
        How It Works
      </motion.h1>
      
      <motion.div 
        className="how-it-works-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className={`step ${theme === 'dark' ? 'dark' : ''}`} variants={itemVariants}>
          <div className={`step-icon-container ${theme === 'dark' ? 'dark' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="step-icon" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
          </div>
          <motion.h2 
            className="step-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Upload Your License
          </motion.h2>
          <p className="step-description">
            Simply upload your unused software license details to our secure platform. We support all major software vendors and license types.
          </p>
          <motion.div 
            className="step-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
          >
            1
          </motion.div>
        </motion.div>
        
        <motion.div className={`step ${theme === 'dark' ? 'dark' : ''}`} variants={itemVariants}>
          <div className={`step-icon-container ${theme === 'dark' ? 'dark' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="step-icon" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
              <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
            </svg>
          </div>
          <motion.h2 
            className="step-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get a Valuation
          </motion.h2>
          <p className="step-description">
            Our expert team will review your license and provide a competitive valuation within 24 hours, based on current market demand and license specifics.
          </p>
          <motion.div 
            className="step-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
          >
            2
          </motion.div>
        </motion.div>
        
        <motion.div className={`step ${theme === 'dark' ? 'dark' : ''}`} variants={itemVariants}>
          <div className={`step-icon-container ${theme === 'dark' ? 'dark' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="step-icon" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
            </svg>
          </div>
          <motion.h2 
            className="step-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Paid
          </motion.h2>
          <p className="step-description">
            Once you accept our offer, we handle all the transfer details and you receive payment through your preferred method within 3-5 business days.
          </p>
          <motion.div 
            className="step-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
            viewport={{ once: true }}
          >
            3
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;