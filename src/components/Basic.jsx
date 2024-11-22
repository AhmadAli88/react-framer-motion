import { motion } from 'framer-motion';

function BasicAnimation() {
  return (
    <motion.div
      animate={{ x: 100 }} // Moves the element 100px to the right
      transition={{ duration: 1 }} // Duration of 1 second
      style={{ width: 100, height: 100, backgroundColor: 'blue' }}
    />
  );
}

export default BasicAnimation;
