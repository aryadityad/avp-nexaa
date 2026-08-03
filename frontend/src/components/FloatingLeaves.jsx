import { motion, useReducedMotion } from "framer-motion";
import { Leaf } from "lucide-react";

export const FloatingLeaves = ({ items }) => {
    const reduce = useReducedMotion();
    if (reduce) return null;
    return (
        <>
            {items.map((it, i) => (
                <motion.div
                    key={i}
                    className="pointer-events-none absolute z-0"
                    style={{
                        top: it.top,
                        left: it.left,
                        right: it.right,
                        bottom: it.bottom,
                    }}
                    animate={{
                        y: [0, -18, 0],
                        rotate: [it.rotate || 0, (it.rotate || 0) + 12, it.rotate || 0],
                    }}
                    transition={{
                        duration: it.duration || 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: it.delay || 0,
                    }}
                    aria-hidden="true"
                >
                    <Leaf
                        size={it.size || 42}
                        className={it.className || "text-[#166534]/10"}
                        fill="currentColor"
                        strokeWidth={0.4}
                    />
                </motion.div>
            ))}
        </>
    );
};
