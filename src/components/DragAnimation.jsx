import { motion } from 'framer-motion';

function DragAnimation() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 300, bottom: 300 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: '8px',
      }}
    />
  );
}

export default DragAnimation;
