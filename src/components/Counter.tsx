import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const variants: Variants = {
  initial: (custom: number) => ({
    y: custom > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.8,
  }),
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  exit: (custom: number) => ({
    y: custom > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.25, ease: "easeInOut" },
  }),
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleIncrement = () => {
    setDirection(1);
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setDirection(-1);
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-center bg-black rounded-full px-3 py-2 space-x-4">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-green-950 text-white text-xl font-bold"
      >
        -
      </button>

      <div className="relative w-12 h-12 overflow-hidden flex justify-center items-center text-2xl font-bold">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={count}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute text-white"
          >
            {count}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-green-950 text-white text-xl font-bold"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
