import { motion } from 'framer-motion';

function HoverAnimation() {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 45 }} // Scale and rotate on hover
      transition={{ duration: 0.3 }}
      style={{ width: 100, height: 100, backgroundColor: 'blue' }}
    />
  );
}

export default HoverAnimation;
