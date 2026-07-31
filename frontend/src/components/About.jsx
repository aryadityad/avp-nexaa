import { Eye, MapPin, Target } from "lucide-react";
import { Chapter, Reveal } from "./Reveal";

const ABOUT_IMG =
    "https://images.unsplash.com/photo-1561602535-7f155201c950?auto=format&fit=crop&w=1400&q=80";

const cards = [
    {
        icon: Target,
        title: "Our Mission",
        text: "Connecting local harvests to global markets with guaranteed premium quality.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        text: "A globally recognized brand empowering wellness with high-quality agricultural products.",
    },
];

export const About = () => (
    <section id="about" data-testid="about-section" className="noise relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div>
                    <Reveal>
                        <Chapter number="01" label="About AVP Nexaa" />
                        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                            Rooted in Indian soil,
                            <br />
                            <em className="italic text-[#166534]">trusted worldwide.</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#475569] md:text-lg">
                            AVP Nexaa is a trusted Indian B2B exporter of premium organic
                            dehydrated agricultural products, herbs and spices. We source
                            directly from certified farms and processing units — ensuring
                            every consignment meets the exacting standards of
                            international food trade.
                        </p>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569] md:text-lg">
                            From field selection to export-grade packaging, our team
                            manages the entire supply chain with transparency, consistency
                            and care.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.15} className="relative">
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 h-full w-full rounded-md border border-[#D4AF37]/50" />
                        <div className="relative overflow-hidden rounded-md shadow-[0_20px_50px_rgb(0,0,0,0.12)]">
                            <img
                                src={ABOUT_IMG}
                                alt="Verdant Indian farmland under an open sky"
                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-md bg-[#0B131F] px-5 py-4 shadow-xl md:-right-8">
                            <MapPin size={18} className="text-[#D4AF37]" aria-hidden="true" />
                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                                    Headquartered in
                                </p>
                                <p className="text-sm font-semibold text-white">
                                    Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="mt-24 grid gap-6 md:grid-cols-2">
                {cards.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.12}>
                        <div
                            data-testid={`card-${c.title === "Our Mission" ? "mission" : "vision"}`}
                            className="group h-full rounded-md border border-[#0F172A]/8 bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37]/60 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
                        >
                            <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#166534]/8 text-[#166534] transition-colors duration-300 group-hover:bg-[#166534] group-hover:text-white">
                                <c.icon size={22} aria-hidden="true" />
                            </span>
                            <h3 className="font-display text-2xl font-medium text-[#0F172A]">
                                {c.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-[#475569]">{c.text}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
