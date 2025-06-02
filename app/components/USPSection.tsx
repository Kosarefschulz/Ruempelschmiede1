'use client';

import { motion } from 'framer-motion';
import { FaClock, FaRecycle, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const usps = [
  {
    icon: FaClock,
    title: 'Schneller Service',
    description: 'Flexible Terminvereinbarung und zügige Durchführung',
  },
  {
    icon: FaRecycle,
    title: 'Nachhaltige Entsorgung',
    description: 'Umweltgerechte Verwertung und Recycling',
  },
  {
    icon: FaHandshake,
    title: 'Faire Preise',
    description: 'Transparente Kostenaufstellung ohne versteckte Gebühren',
  },
  {
    icon: FaShieldAlt,
    title: 'Zuverlässigkeit',
    description: 'Professionelles Team mit jahrelanger Erfahrung',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function USPSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl"
        >
          Warum Sie uns wählen sollten
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <usp.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{usp.title}</h3>
              <p className="text-gray-600">{usp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 