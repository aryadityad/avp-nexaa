import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, Globe2, ShieldCheck, Sprout } from "lucide-react";
import { SERVED_COUNTRIES } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";

const CARGO_IMG =
    "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?auto=format&fit=crop&w=2000&q=80";

const CREDENTIALS = [
    "FSSAI Licensed",
    "APEDA Registered",
    "IEC Certified",
    "GST Registered",
    "MSME Registered",
    "ISO Standards",
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
                        <SplitChars text="From Indian fields to" />{" "}
                        <SplitChars text="global ports." className="text-[#D4AF37]" />
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
                                <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                                    {p.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/12 pt-12 sm:grid-cols-3 lg:grid-cols-6">
                    {CREDENTIALS.map((c, i) => (
                        <Reveal key={c} delay={i * 0.06}>
                            <div
                                data-testid={`credential-${c.toLowerCase().replace(/\s+/g, "-")}`}
                                className="flex items-center gap-3"
                            >
                                <BadgeCheck
                                    size={18}
                                    className="shrink-0 text-[#D4AF37]"
                                    aria-hidden="true"
                                />
                                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                                    {c}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16">
                    <Reveal>
                        <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
                            Countries We Serve
                        </h3>
                    </Reveal>
                    <div className="mt-7 flex flex-wrap gap-3">
                        {SERVED_COUNTRIES.map((c, i) => (
                            <Reveal key={c.code} delay={i * 0.04}>
                                <div
                                    data-testid={`country-${c.code}`}
                                    className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm transition-colors duration-300 hover:border-[#D4AF37]/50"
                                >
                                    <img
                                        src={`https://flagcdn.com/w40/${c.code}.png`}
                                        srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                                        alt={`${c.name} flag`}
                                        loading="lazy"
                                        className="h-4 w-6 rounded-[2px] object-cover"
                                    />
                                    <span className="text-sm font-medium text-white/85">
                                        {c.name}
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
