import {
    Award,
    BadgeDollarSign,
    Handshake,
    Package,
    ShieldCheck,
    Ship,
} from "lucide-react";
import { Chapter, Reveal } from "./Reveal";

const REASONS = [
    {
        icon: Award,
        title: "Premium Quality",
        text: "Premium-quality dehydrated agricultural products and spices, batch-tested before dispatch.",
    },
    {
        icon: Handshake,
        title: "Direct Sourcing",
        text: "Sourced directly from trusted Indian farmers and manufacturers — no middle layers.",
    },
    {
        icon: ShieldCheck,
        title: "Strict Quality Control",
        text: "Rigorous QC at every stage with export-grade packaging built for long-haul transit.",
    },
    {
        icon: BadgeDollarSign,
        title: "Competitive Pricing",
        text: "Fair, competitive pricing backed by a consistent and reliable supply pipeline.",
    },
    {
        icon: Package,
        title: "Custom Packaging",
        text: "Private-label and custom packaging formats tailored to your market requirements.",
    },
    {
        icon: Ship,
        title: "On-Time Global Delivery",
        text: "On-time global delivery with professional, end-to-end export documentation support.",
    },
];

export const WhyChoose = () => (
    <section
        id="why-us"
        data-testid="why-choose-section"
        className="bg-[#0F172A]/[0.025] py-24 md:py-32"
    >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter number="02" label="Why Choose Us" />
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="font-display max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                        The partner serious buyers
                        <em className="italic text-[#166534]"> rely on.</em>
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-[#475569]">
                        Six commitments that define every consignment we ship — from the
                        first sample to the final container.
                    </p>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {REASONS.map((r, i) => (
                    <Reveal key={r.title} delay={(i % 3) * 0.1}>
                        <div
                            data-testid={`why-card-${i + 1}`}
                            className="group h-full rounded-md border border-[#0F172A]/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#166534]/30 hover:shadow-[0_20px_40px_rgb(0,0,0,0.07)]"
                        >
                            <div className="flex items-start justify-between">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#166534]/8 text-[#166534] transition-colors duration-300 group-hover:bg-[#166534] group-hover:text-white">
                                    <r.icon size={20} aria-hidden="true" />
                                </span>
                                <span className="font-display text-sm italic text-[#0F172A]/25">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="mt-6 font-display text-xl font-medium text-[#0F172A]">
                                {r.title}
                            </h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                                {r.text}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
