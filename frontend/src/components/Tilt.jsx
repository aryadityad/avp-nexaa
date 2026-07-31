import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export const Tilt = ({ children, className = "", max = 8 }) => {
    const reduce = useReducedMotion();
    const ref = useRef(null);
    const rx = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
    const ry = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

    if (reduce) return <div className={className}>{children}</div>;

    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * max);
        rx.set(-py * max);
    };
    const reset = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{
                rotateX: rx,
                rotateY: ry,
                transformStyle: "preserve-3d",
                transformPerspective: 900,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
