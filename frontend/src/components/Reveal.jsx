import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 60 }) => {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
};

export const SplitChars = ({ text, className = "", delay = 0, stagger = 0.02 }) => {
    const reduce = useReducedMotion();
    const words = text.split(" ");
    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ staggerChildren: stagger, delayChildren: delay }}
            aria-label={text}
        >
            {words.map((w, wi) => (
                <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
                    {w.split("").map((c, ci) => (
                        <motion.span
                            key={ci}
                            className="inline-block"
                            variants={{
                                hidden: reduce ? { opacity: 0 } : { y: 48, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                                },
                            }}
                        >
                            {c}
                        </motion.span>
                    ))}
                    {wi < words.length - 1 ? <span>&nbsp;</span> : null}
                </span>
            ))}
        </motion.span>
    );
};

export const Chapter = ({ label, light = false }) => (
    <div className="mb-4 flex items-center gap-4">
        <span
            className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                light ? "text-[#D4AF37]" : "text-[#166534]"
            }`}
        >
            {label}
        </span>
    </div>
);
