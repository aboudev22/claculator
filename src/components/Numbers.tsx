import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Number() {
  const [count, setCount] = useState(0);

  const handleIncremente = () => {
    setCount((prev) => (prev === 9 ? 0 : prev + 1));
  };

  const handleDecremente = () => {
    setCount((prev) => (prev === 0 ? 9 : prev - 1));
  };

  return (
    <div className="flex items-center justify-center gap-5">
      <CountButton onClick={handleDecremente} signe="-" />
      <div
        className="relative h-[60px] w-[40px] overflow-hidden flex items-center justify-center"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
        }}
      >
        <motion.div
          animate={{ y: -count * 60 }} // 60px par ligne
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
            <div
              key={index}
              className={clsx(
                "h-[60px] flex items-center justify-center font-bold",
                index === count
                  ? "text-white text-4xl"
                  : "text-gray-500 text-xl"
              )}
            >
              {num}
            </div>
          ))}
        </motion.div>
      </div>
      <CountButton onClick={handleIncremente} signe="+" />
    </div>
  );
}

function CountButton({
  signe,
  onClick,
  className,
}: {
  signe: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center bg-green-950 h-fit rounded-md text-white font-bold text-4xl p-1 px-3 cursor-pointer active:brightness-90 transition-all duration-150",
        className
      )}
      onClick={onClick}
    >
      {signe}
    </button>
  );
}
