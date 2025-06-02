'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Thomas M.',
    rating: 5,
    text: 'Sehr professioneller Service! Das Team war pünktlich, freundlich und hat alles sauber hinterlassen.',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: 'Faire Preise und super Arbeit. Kann ich nur weiterempfehlen!',
  },
  {
    name: 'Michael B.',
    rating: 5,
    text: 'Schnelle und unkomplizierte Abwicklung. Top Service!',
  },
];

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl"
        >
          Was unsere Kunden sagen
        </motion.h2>

        <div className="relative mx-auto max-w-2xl overflow-hidden">
          <div className="flex items-center justify-center">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center space-x-1">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <FaStar key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-lg text-gray-600">{reviews[currentReview].text}</p>
              <p className="font-semibold text-gray-800">{reviews[currentReview].name}</p>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentReview ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 