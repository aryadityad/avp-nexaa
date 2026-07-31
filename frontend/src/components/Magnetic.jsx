import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export const Magnetic = ({ children, strength = 0.3, className = "" }) => {
    const reduce = useReducedMotion();
    const ref = useRef(null);
    const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });
    const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });

    if (reduce) return <div className={className}>{children}</div>;

    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ x, y, display: "inline-block" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
