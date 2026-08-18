import { FlaskConical, Globe, Leaf, Recycle, TrendingUp, Users } from "lucide-react";
import { Chapter, Reveal, SplitChars } from "./Reveal";

const STATS = [
    {
        rank: "#1",
        label: "World Rank",
        title: "Total Number of Producers",
        desc: "India leads the world in certified organic agricultural growers and farming communities.",
        icon: Users,
    },
    {
        rank: "#2",
        label: "World Rank",
        title: "Organic Agricultural Land",
        desc: "India ranks 2nd globally in total dedicated certified organic farmland area.",
        icon: Globe,
    },
];

const BENEFITS = [
    {
        icon: Leaf,
        title: "Chemical Free Cultivation",
        text: "Grown without synthetic pesticides or fertilizers, cleaner raw material and clean labels for your buyers.",
    },
    {
        icon: FlaskConical,
        title: "Preserved Nutrition & Vitality",
        text: "Sound soil management and gentle dehydration produce nutritious food rich in natural vitality and disease resistance.",
    },
    {
        icon: Recycle,
        title: "Regenerative & Sustainable",
        text: "Works at grass root level preserving the reproductive and regenerative capacity of the soil and water table.",
    },
    {
        icon: TrendingUp,
        title: "Rising Global Demand",
        text: "Organic categories grow year on year across the US, EU, and Gulf, a premium shelf position for your brand.",
    },
];

export const WhyOrganic = () => (
    <section
        id="why-organic"
        data-testid="why-organic-section"
        className="noise relative overflow-hidden bg-[#0F4C26] py-28 md:py-36"
    >
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter label="Why Organic Products?" light />
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            <SplitChars text="Grown without chemicals," />{" "}
                            <br className="hidden sm:inline" />
                            <SplitChars text="pure by nature" className="text-[#E9C96A]" />
                        </h2>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="text-base leading-relaxed text-white/85 md:text-lg">
                            Organic products are grown under a system of agriculture without
                            the use of chemical fertilizers and pesticides with an environmentally
                            and socially responsible approach.
                        </p>
                    </div>
                </div>
            </Reveal>

            {/* Core Philosophy Banner */}
            <Reveal delay={0.1}>
                <div className="mt-12 rounded-lg border border-white/15 bg-white/[0.07] p-8 backdrop-blur-md md:p-10">
                    <div className="grid items-center gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E9C96A]">
                                Sustainable Agriculture at the Grassroots
                            </p>
                            <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                                This is a method of farming that works at grass root level
                                preserving the reproductive and regenerative capacity of the
                                soil, good plant nutrition, and sound soil management, producing
                                nutritious food rich in vitality which has natural resistance to diseases.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
                            {STATS.map((s, i) => (
                                <div
                                    key={s.title}
                                    className="rounded-md border border-[#E9C96A]/25 bg-[#0B131F]/40 p-5 backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-display text-3xl font-bold text-[#E9C96A]">
                                            {s.rank}
                                        </span>
                                        <s.icon size={20} className="text-[#E9C96A]/70" aria-hidden="true" />
                                    </div>
                                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                                        {s.label}
                                    </p>
                                    <h4 className="mt-1 font-display text-base font-semibold text-white">
                                        {s.title}
                                    </h4>
                                    <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* 4 Benefit Cards Grid */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {BENEFITS.map((b, i) => (
                    <Reveal key={b.title} delay={(i % 4) * 0.08}>
                        <div
                            data-testid={`organic-card-${i + 1}`}
                            className="h-full rounded-md border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9C96A]/50"
                        >
                            <b.icon size={26} className="text-[#E9C96A]" aria-hidden="true" />
                            <h3 className="font-display mt-5 text-xl font-medium text-white">
                                {b.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/75">
                                {b.text}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
