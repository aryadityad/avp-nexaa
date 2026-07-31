import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 40 }) => {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
};

export const Chapter = ({ number, label, light = false }) => (
    <div className="mb-4 flex items-center gap-4">
        <span
            className={`font-display text-sm italic ${
                light ? "text-[#D4AF37]" : "text-[#166534]"
            }`}
        >
            {number}
        </span>
        <span
            className={`h-px w-10 ${light ? "bg-[#D4AF37]/60" : "bg-[#166534]/40"}`}
        />
        <span
            className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                light ? "text-[#D4AF37]" : "text-[#166534]"
            }`}
        >
            {label}
        </span>
    </div>
);
