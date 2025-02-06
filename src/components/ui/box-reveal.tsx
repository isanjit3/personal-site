"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, memo } from "react";

interface BoxRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}

const BoxReveal = memo(
  ({
    children,
    width = "fit-content",
    boxColor = "#5046e6",
    duration = 0.5,
  }: BoxRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [readyToAnimate, setReadyToAnimate] = useState(false);

    // Wait 3 seconds before allowing the animation to start
    useEffect(() => {
      const timer = setTimeout(() => {
        setReadyToAnimate(true);
      }, 4000);
      return () => clearTimeout(timer);
    }, []);

    const mainVariants = {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    };

    const slideVariants = {
      hidden: { left: 0 },
      visible: { left: "100%" },
    };

    const shouldAnimate = readyToAnimate && isInView;

    return (
      <div ref={ref} className="relative overflow-hidden" style={{ width }}>
        <motion.div
          variants={mainVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration, delay: 0.25 }}
        >
          {children}
        </motion.div>

        <motion.div
          variants={slideVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration, ease: "easeIn" }}
          className="absolute inset-0 z-20"
          style={{
            top: 4,
            bottom: 4,
            background: boxColor,
          }}
        />
      </div>
    );
  }
);

BoxReveal.displayName = "BoxReveal";

export { BoxReveal };