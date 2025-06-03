import { AnimatePresence, motion } from "framer-motion";

const show: boolean = true;

export default function ToggleBox() {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          Hello!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
