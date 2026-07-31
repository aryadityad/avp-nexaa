import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Globe2, ShieldCheck, Sprout } from "lucide-react";
import { Counter } from "./Counter";
import { Chapter, Reveal } from "./Reveal";

const CARGO_IMG =
    "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?auto=format&fit=crop&w=2000&q=80";

const STATS = [
    { value: 15, suffix: "+", label: "Countries Served" },
    { value: 500, suffix: "+", label: "Tons Exported Annually" },
    { value: 120, suffix: "+", label: "B2B Partners Worldwide" },
    { value: 100, suffix: "%", label: "Export Compliance" },
];

const PILLARS = [
    {
        icon: Sprout,
        title: "Agricultural Heartland",
        text: "India is among the world's largest producers of spices and herbs — a sourcing base few origins can match.",
    },
    {
        icon: ShieldCheck,
        title: "Assured Quality",
        text: "Certified farms, modern dehydration units and lab-tested batches ensure consistency container after container.",
    },
    {
        icon: Globe2,
        title: "Global Logistics",
        text: "Established sea and air freight corridors from Indian ports to every major importing market.",
    },
];

export const GlobalReach = () => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

    return (
        <section
            id="global-reach"
            ref={ref}
            data-testid="global-reach-section"
            className="relative overflow-hidden py-28 md:py-36"
        >
            <motion.div className="absolute inset-0" style={reduce ? {} : { y }}>
                <img
                    src={CARGO_IMG}
                    alt="Aerial view of a container ship carrying export cargo across the ocean"
                    className="h-[124%] w-full object-cover"
                    loading="lazy"
                />
            </motion.div>
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(11, 19, 31, 0.85)" }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(15,76,38,0.55) 0%, rgba(11,19,31,0) 70%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
                <Reveal>
                    <Chapter number="05" label="Global Reach — Why India" light />
                    <h2 className="font-display max-w-3xl text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
                        From Indian fields to
                        <em className="italic text-[#D4AF37]"> global ports.</em>
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {PILLARS.map((p, i) => (
                        <Reveal key={p.title} delay={i * 0.1}>
                            <div
                                data-testid={`pillar-${i + 1}`}
                                className="h-full rounded-md border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
                            >
                                <p.icon size={24} className="text-[#D4AF37]" aria-hidden="true" />
                                <h3 className="font-display mt-5 text-xl font-medium text-white">
                                    {p.title}
                                </h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                                    {p.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-2 gap-y-10 border-t border-white/12 pt-12 lg:grid-cols-4">
                    {STATS.map((s) => (
                        <div key={s.label} data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                            <p className="font-display text-4xl font-medium text-white md:text-5xl">
                                <Counter value={s.value} suffix={s.suffix} />
                            </p>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
