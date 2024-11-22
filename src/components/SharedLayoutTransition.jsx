import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function SharedLayoutTransition() {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <div>
      <button onClick={() => setShowFirst(!showFirst)}>
        Toggle Components
      </button>
      <AnimatePresence>
        {showFirst ? (
          <motion.div
            key="first"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div>First Component</div>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div>Second Component</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SharedLayoutTransition;
