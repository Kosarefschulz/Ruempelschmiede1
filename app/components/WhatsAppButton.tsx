'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { trackWhatsAppClick } from './GoogleAnalytics';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick();
    window.open('https://wa.me/+4952112000510', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-20 right-6 sm:bottom-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-xl transition-all hover:bg-green-600 hover:shadow-2xl md:bottom-8 md:right-8"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <FaWhatsapp className="h-6 w-6 md:h-8 md:w-8" />
    </motion.button>
  );
} 