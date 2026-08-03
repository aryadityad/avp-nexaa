import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToId } from "../data/content";
import { HeroParticles } from "./HeroParticles";
import { Magnetic } from "./Magnetic";
import { SplitChars } from "./Reveal";

const HERO_IMG = "/assets/hero-spices.jpg";

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

    const onMouseMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    return (
        <section
            id="home"
            ref={ref}
            data-testid="hero-section"
            onMouseMove={onMouseMove}
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
                        alt="Aromatic Indian spices — dried chillies, turmeric, cardamom and curry leaves on dark slate"
                        className="h-[120%] w-full object-cover"
                        fetchpriority="high"
                    />
                </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/85 via-[#0B131F]/40 to-[#0B131F]/25" />
            <div className="absolute inset-0 bg-[#166534]/10 mix-blend-multiply" />
            <div
                className="pointer-events-none absolute inset-0 z-[5]"
                style={{
                    background:
                        "radial-gradient(560px circle at var(--mx, 50%) var(--my, 55%), rgba(212,175,55,0.14), transparent 65%)",
                }}
            />
            <HeroParticles />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 md:px-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#0B131F]/45 px-5 py-2.5 text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#E9C96A] backdrop-blur-md md:tracking-[0.24em]"
                >
                    <span className="h-px w-12 shrink-0 bg-[#D4AF37]/70" />
                    <SplitChars
                        text="Premium Indian Exporter — Dehydrated Agri Products, Spices & Herbs"
                        stagger={0.012}
                        delay={0.2}
                    />
                </motion.p>

                <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                    <MaskedLine delay={0.25} reduce={reduce}>
                        Connecting Local Harvests
                    </MaskedLine>
                    <MaskedLine delay={0.4} reduce={reduce}>
                        to <span className="text-[#D4AF37]">Global Markets</span>
                    </MaskedLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.75 }}
                    className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
                >
                    AVP Nexaa partners with certified Indian farms to deliver organic,
                    export-grade dehydrated produce, spices and herbs to buyers across
                    the world.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.95 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <Magnetic>
                        <button
                            onClick={() => scrollToId("contact")}
                            data-testid="hero-cta-quote"
                            className="group flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0B131F] transition-colors duration-300 hover:bg-[#e9c96a]"
                        >
                            Get a Quote
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </button>
                    </Magnetic>
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
