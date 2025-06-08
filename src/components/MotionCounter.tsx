import { motion, animate } from "framer-motion";
import type { FramerCountType } from "../types/types";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function MotionCounter({ target, className }: FramerCountType) {
  const countRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    const controls = animate(target - 30, target, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => {
        if (countRef.current) {
          countRef.current.textContent = Math.round(latest).toString();
        }
      },
    });
    return () => controls.stop();
  }, [target]);

  return (
    <motion.p
      className={clsx(
        "p-2 text-center text-2xl bg-green-950 text-green-600 font-extrabold",
        className
      )}
      ref={countRef}
    >
      {target}
    </motion.p>
  );
}
