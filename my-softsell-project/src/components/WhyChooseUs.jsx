import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/global.css';

const WhyChooseUs = () => {
  const { theme } = useContext(ThemeContext);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="why-choose-us-container">
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
        Why Choose SoftSell
      </motion.h1>
      
      <motion.div 
        className="why-choose-us-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="benefit"
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            boxShadow: theme === 'dark' 
              ? '0 10px 20px rgba(0, 0, 0, 0.4)' 
              : '0 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="benefit-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="benefit-icon" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
          </div>
          <motion.h2 
            className="benefit-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Expert Valuations
          </motion.h2>
          <p className="benefit-description">
            Our team of software licensing experts provides accurate market-based valuations, ensuring you get the best price for your unused licenses.
          </p>
        </motion.div>
        
        <motion.div 
          className="benefit"
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            boxShadow: theme === 'dark' 
              ? '0 10px 20px rgba(0, 0, 0, 0.4)' 
              : '0 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="benefit-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="benefit-icon" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
          </div>
          <motion.h2 
            className="benefit-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Fast Payment Processing
          </motion.h2>
          <p className="benefit-description">
            Receive payment within 3-5 business days after accepting our offer. We support multiple payment methods for your convenience.
          </p>
        </motion.div>
        
        <motion.div 
          className="benefit"
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            boxShadow: theme === 'dark' 
              ? '0 10px 20px rgba(0, 0, 0, 0.4)' 
              : '0 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="benefit-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="benefit-icon" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
          </div>
          <motion.h2 
            className="benefit-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Secure and Reliable
          </motion.h2>
          <p className="benefit-description">
            Our platform uses bank-level encryption and security protocols to protect your sensitive license information and financial transactions.
          </p>
        </motion.div>
        
        <motion.div 
          className="benefit"
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            boxShadow: theme === 'dark' 
              ? '0 10px 20px rgba(0, 0, 0, 0.4)' 
              : '0 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="benefit-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="benefit-icon" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg>
          </div>
          <motion.h2 
            className="benefit-headline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Dedicated Support
          </motion.h2>
          <p className="benefit-description">
            Our customer success team is available via phone, email, and live chat to guide you through the entire process and answer any questions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;