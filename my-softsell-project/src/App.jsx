import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from './context/ThemeContext'
import { ChatProvider } from './context/ChatContext'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import CustomerTestimonials from './components/CustomerTestimonials'
import ContactUs from './components/ContactForm'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ChatProvider>
      <div className={`app-container ${theme === 'dark' ? 'dark' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={theme === 'dark' ? 'dark' : ''}
          >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <HowItWorks />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <WhyChooseUs />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CustomerTestimonials />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactUs />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <ChatWidget />
    </div>
    </ChatProvider>
  )
}

export default App
