'use client';

import { motion } from 'framer-motion';

export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverScale({ children, className = '' }) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.25 }} className={className}>
      {children}
    </motion.div>
  );
}
