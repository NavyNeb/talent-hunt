import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: React.ReactNode;
  width?: "fit-content" | "w-full";
  classNames?: string;
};

const Reveal = ({ children, width="fit-content", classNames }: Props) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const controlsSlide = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      controlsSlide.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        className={`mx-auto ${classNames}`}
        variants={{
          hidden: { opacity: 0, translateY: 75 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={controlsSlide}
        transition={{ duration: 0.3, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFCA3160",
          zIndex: 20,
        }}
      />
    </div>
  );
};
//
// 
export default Reveal;
