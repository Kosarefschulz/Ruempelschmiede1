'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleClick = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/+4915123456789', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors hover:bg-green-600 md:bottom-8 md:right-8"
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