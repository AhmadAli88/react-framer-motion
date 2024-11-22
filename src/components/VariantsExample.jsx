import { motion } from 'framer-motion';

function VariantsExample() {
  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={boxVariants}
      transition={{ duration: 1 }}
      style={{ width: 100, height: 100, backgroundColor: 'blue' }}
    />
  );
}

export default VariantsExample;
