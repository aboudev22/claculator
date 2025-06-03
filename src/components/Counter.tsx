import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = up, -1 = down

  const handleIncrement = () => {
    setDirection(1);
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setDirection(-1);
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center text-[2rem] font-serif gap-[20px] h-screen">
      <button
        onClick={handleDecrement}
        className="text-[2.5rem] w-[60px] h-[60px] rounded-full border-none bg-[#222] text-white cursor-pointer"
      >
        -
      </button>
      <div className="relative h-[60px] w-[80px] overflow-hidden flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ y: direction === 1 ? 30 : -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction === 1 ? -30 : 30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            {count}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handleIncrement}
        className="text-[2.5rem] w-[60px] h-[60px] rounded-full border-none bg-[#222] text-white cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
