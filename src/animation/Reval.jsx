import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reval({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const sildeControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
      sildeControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.section
        variants={{
          initial: {
            opacity: 0,
            y: 85,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="initial"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.section>

      {/* <motion.div
        variants={{
          initial: { left: 0 },
          animate: { left: "100%" },
        }}
        initial="initial"
        animate={sildeControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className=" absolute top-4 bottom-4 left-0 right-0 z-20 bg-primary  rounded-2xl"
      ></motion.div> */}
    </div>
  );
}
