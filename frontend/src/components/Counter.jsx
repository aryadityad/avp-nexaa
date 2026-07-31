import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const Counter = ({ value, suffix = "", duration = 1.6 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const reduce = useReducedMotion();
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduce) {
            setN(value);
            return;
        }
        let raf;
        const start = performance.now();
        const tick = (t) => {
            const p = Math.min((t - start) / (duration * 1000), 1);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration, reduce]);

    return (
        <span ref={ref} data-testid="stat-counter">
            {n.toLocaleString("en-IN")}
            {suffix}
        </span>
    );
};
