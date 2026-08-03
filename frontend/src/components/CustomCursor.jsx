import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const reduce = useReducedMotion();
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 260, damping: 24 });
    const ringY = useSpring(y, { stiffness: 260, damping: 24 });

    useEffect(() => {
        if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
        setEnabled(true);
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setHovering(
                !!e.target.closest("a, button, select, input, textarea, [role='button']"),
            );
        };
        window.addEventListener("mousemove", move, { passive: true });
        return () => window.removeEventListener("mousemove", move);
    }, [reduce, x, y]);

    if (!enabled) return null;

    return (
        <>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#D4AF37]"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                aria-hidden="true"
            />
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-[#D4AF37]/60"
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: hovering ? 1.7 : 1, opacity: hovering ? 0.9 : 0.55 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
            />
        </>
    );
};
