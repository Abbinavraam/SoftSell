import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/global.css';

const CustomerTestimonials = () => {
  const { theme } = useContext(ThemeContext);
  
  // Star SVG component
  const StarIcon = ({ filled }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      fill={filled ? 'var(--primary-color)' : 'none'} 
      stroke="var(--primary-color)"
      viewBox="0 0 16 16"
      style={{ margin: '0 2px' }}
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  );

  return (
    <div className="customer-testimonials-container">
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
        What Our Customers Say
      </motion.h1>
      
      <div className="customer-testimonials-content">
        <motion.div 
          className="testimonial"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -10,
            boxShadow: theme === 'dark' 
              ? '0 10px 20px rgba(0, 0, 0, 0.4)' 
              : '0 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Michael Johnson" 
              className="testimonial-image" 
            />
          </motion.div>
          
          <div className="testimonial-rating">
            <StarIcon filled={true} />
            <StarIcon filled={true} />
            <StarIcon filled={true} />
            <StarIcon filled={true} />
            <StarIcon filled={true} />
          </div>
          
          <motion.p 
            className="testimonial-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "SoftSell transformed how we manage our software assets. We recovered over $50,000 from unused enterprise licenses that would have simply expired. Their valuation was fair and the process was seamless."
          </motion.p>
          
          <motion.p 
            className="testimonial-customer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Michael Johnson
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '14px', 
              color: theme === 'dark' ? '#aaa' : '#888',
              marginTop: '5px'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            CTO, Nexus Technologies
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="testimonial"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -10,
            boxShadow: theme === 'dark' 
              ? '0 10px 20px rgba(0, 0, 0, 0.4)' 
              : '0 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Sarah Williams" 
              className="testimonial-image" 
            />
          </motion.div>
          
          <div className="testimonial-rating">
            <StarIcon filled={true} />
            <StarIcon filled={true} />
            <StarIcon filled={true} />
            <StarIcon filled={true} />
            <StarIcon filled={true} />
          </div>
          
          <motion.p 
            className="testimonial-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            "After our company downsized, we had dozens of unused Adobe and Microsoft licenses. SoftSell's team guided us through the entire resale process and helped us recoup a significant portion of our IT budget. Highly recommended!"
          </motion.p>
          
          <motion.p 
            className="testimonial-customer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Sarah Williams
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '14px', 
              color: theme === 'dark' ? '#aaa' : '#888',
              marginTop: '5px'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            IT Director, Global Solutions Inc.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;