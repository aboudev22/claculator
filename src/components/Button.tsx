import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.button
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-fit text-xs will-change-transform bg-red-500 rounded-md p-2 text-white"
    >
      hover me!
    </motion.button>
  );
}
