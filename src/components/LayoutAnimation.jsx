import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function LayoutAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Box
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            layout
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'blue',
              marginBottom: 10,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default LayoutAnimation;
