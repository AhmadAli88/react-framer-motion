
import { motion } from 'framer-motion';

function SvgAnimation() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="200"
      height="200"
    >
      <motion.path
        d="M10,80 C 40,10 65,10 95,80"
        fill="transparent"
        stroke="blue"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </motion.svg>
  );
}

export default SvgAnimation;
