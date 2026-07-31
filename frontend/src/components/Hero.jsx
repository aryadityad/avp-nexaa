import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToId } from "../data/content";

const HERO_IMG =
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80";

const MaskedLine = ({ children, delay, reduce }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            className="block"
            initial={reduce ? { opacity: 0 } : { y: "115%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

    return (
        <section
            id="home"
            ref={ref}
            data-testid="hero-section"
            className="relative flex min-h-screen items-end overflow-hidden"
        >
            <motion.div className="absolute inset-0" style={reduce ? {} : { y }}>
                <motion.div
                    className="h-full w-full"
                    initial={reduce ? {} : { scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 14, ease: "easeOut" }}
                >
                    <img
                        src={HERO_IMG}
                        alt="Lush green agricultural farmland stretching to the horizon"
                        className="h-[120%] w-full object-cover"
                        fetchpriority="high"
                    />
                </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/90 via-[#0B131F]/45 to-[#0B131F]/30" />
            <div className="absolute inset-0 bg-[#166534]/10 mix-blend-multiply" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 md:px-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] leading-relaxed text-[#D4AF37] md:tracking-[0.28em]"
                >
                    <span className="h-px w-12 bg-[#D4AF37]/70" />
                    Premium Indian Exporter — Dehydrated Agri Products, Spices &amp; Herbs
                </motion.p>

                <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                    <MaskedLine delay={0.25} reduce={reduce}>
                        Connecting Local Harvests
                    </MaskedLine>
                    <MaskedLine delay={0.4} reduce={reduce}>
                        to <em className="italic text-[#D4AF37]">Global Markets</em>
                    </MaskedLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.75 }}
                    className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
                >
                    Collaborate. Connect. Grow. AVP Nexaa partners with certified Indian
                    farms to deliver organic, export-grade dehydrated produce, spices and
                    herbs to buyers across the world.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.95 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <button
                        onClick={() => scrollToId("contact")}
                        data-testid="hero-cta-quote"
                        className="group flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0B131F] transition-all duration-300 hover:scale-[1.04] hover:bg-[#e9c96a]"
                    >
                        Get a Quote
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </button>
                    <button
                        onClick={() => scrollToId("products")}
                        data-testid="hero-cta-products"
                        className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-[#0B131F]"
                    >
                        Explore Products
                    </button>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollToId("about")}
                data-testid="hero-scroll-cue"
                aria-label="Scroll to about section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-[#D4AF37]"
            >
                <motion.span
                    animate={reduce ? {} : { y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="block"
                >
                    <ChevronDown size={26} />
                </motion.span>
            </motion.button>
        </section>
    );
};
