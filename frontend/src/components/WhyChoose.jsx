import {
    Award,
    BadgeDollarSign,
    FileCheck,
    Globe2,
    Handshake,
    HeartHandshake,
    Network,
    Package,
    ShieldCheck,
    Ship,
} from "lucide-react";
import { Chapter, Reveal, SplitChars } from "./Reveal";
import { Tilt } from "./Tilt";
import { FloatingLeaves } from "./FloatingLeaves";

const REASONS = [
    {
        icon: Award,
        title: "Premium Quality",
        bullets: [
            "Batch tested dehydrated products & spices",
            "Export grade quality on every consignment",
        ],
    },
    {
        icon: Handshake,
        title: "Direct Sourcing",
        bullets: [
            "Straight from trusted farmers & manufacturers",
            "No middle layers, full traceability",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Strict Quality Control",
        bullets: [
            "Rigorous QC at every stage",
            "Export grade packaging for long haul transit",
        ],
    },
    {
        icon: BadgeDollarSign,
        title: "Competitive Pricing",
        bullets: [
            "Fair pricing with consistent supply",
            "Reliable volumes for repeat orders",
        ],
    },
    {
        icon: Package,
        title: "Custom Packaging",
        bullets: [
            "Private label formats available",
            "Tailored to your market requirements",
        ],
    },
    {
        icon: Ship,
        title: "On Time Global Delivery",
        bullets: [
            "On-time dispatch to global ports",
            "Complete export documentation support",
        ],
    },
];

const FEATURES = [
    {
        icon: Network,
        title: "Trusted Sourcing Network",
        text: "We work closely with farmers and reliable suppliers to ensure traceability, freshness, and sustainable sourcing practices.",
    },
    {
        icon: Globe2,
        title: "Global Market Focus",
        text: "We understand the requirements of international buyers and are committed to supplying products that comply with export and customer specifications.",
    },
    {
        icon: FileCheck,
        title: "Compliance & Documentation Support",
        text: "We provide complete export documentation and adhere to applicable quality and regulatory requirements, ensuring smooth international transactions.",
    },
    {
        icon: HeartHandshake,
        title: "Long Term Partnership Approach",
        text: "We believe in creating lasting relationships based on trust, integrity, and mutual success rather than one time transactions.",
    },
];

export const WhyChoose = () => (
    <section
        id="why-us"
        data-testid="why-choose-section"
        className="relative overflow-hidden bg-[#0F172A]/[0.025] py-24 md:py-32"
    >
        <FloatingLeaves
            items={[
                { top: "8%", left: "2%", size: 50, rotate: -15, duration: 7.5, className: "text-[#166534]/10" },
                { bottom: "6%", right: "3%", size: 40, rotate: 35, duration: 6.5, delay: 0.8, className: "text-[#166534]/10" },
            ]}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter number="02" label="Why Choose Us" />
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="font-display max-w-2xl text-5xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-6xl">
                        <SplitChars text="The partner serious buyers" />{" "}
                        <SplitChars text="rely on." className="text-[#166534]" />
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-[#334155]">
                        Six commitments that define every consignment we ship, from the
                        first sample to the final container.
                    </p>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {REASONS.map((r, i) => (
                    <Reveal key={r.title} delay={(i % 3) * 0.1}>
                        <Tilt className="h-full" max={5}>
                            <div
                                data-testid={`why-card-${i + 1}`}
                                className="group h-full rounded-md border border-[#0F172A]/10 bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.07)]"
                            >
                            <div className="flex items-start">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#166534]/10 text-[#166534] transition-colors duration-300 group-hover:bg-[#166534] group-hover:text-white">
                                    <r.icon size={20} aria-hidden="true" />
                                </span>
                            </div>
                            <h3 className="mt-6 font-display text-xl font-medium text-[#0F172A]">
                                {r.title}
                            </h3>
                            <ul className="mt-3 space-y-1.5">
                                {r.bullets.map((b) => (
                                    <li
                                        key={b}
                                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#334155]"
                                    >
                                        <span
                                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#166534]"
                                            aria-hidden="true"
                                        />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </Tilt>
                    </Reveal>
                ))}
            </div>

            <div className="mt-20">
                <Reveal>
                    <div className="mb-8 flex items-center gap-5">
                        <h3 className="font-display text-3xl font-medium text-[#0F172A]">
                            Key Features
                        </h3>
                        <span className="h-px flex-1 bg-[#0F172A]/10" />
                    </div>
                </Reveal>
                <div className="grid gap-5 md:grid-cols-2">
                    {FEATURES.map((f, i) => (
                        <Reveal key={f.title} delay={(i % 2) * 0.1}>
                            <div
                                data-testid={`feature-${i + 1}`}
                                className="group flex h-full items-start gap-5 rounded-md border border-[#0F172A]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-[0_18px_36px_rgb(0,0,0,0.07)]"
                            >
                                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#D4AF37]/15 text-[#8A6D1C] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0B131F]">
                                    <f.icon size={20} aria-hidden="true" />
                                </span>
                                <div>
                                    <h4 className="font-display text-lg font-medium text-[#0F172A]">
                                        {f.title}
                                    </h4>
                                    <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                                        {f.text}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
