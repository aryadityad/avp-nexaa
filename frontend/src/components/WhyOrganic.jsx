import { FlaskConical, Leaf, Recycle, TrendingUp } from "lucide-react";
import { Chapter, Reveal, SplitChars } from "./Reveal";

const BENEFITS = [
    {
        icon: Leaf,
        title: "Chemical-Free Cultivation",
        text: "Grown without synthetic pesticides or fertilisers — cleaner raw material and cleaner labels for your buyers.",
    },
    {
        icon: FlaskConical,
        title: "Preserved Nutrition",
        text: "Gentle dehydration locks in colour, aroma and nutrients that conventional high-heat processing strips away.",
    },
    {
        icon: Recycle,
        title: "Sustainable by Design",
        text: "Organic farming protects soil health and water tables across the farming communities we source from.",
    },
    {
        icon: TrendingUp,
        title: "Rising Global Demand",
        text: "Organic categories grow year on year across the US, EU and Gulf — a premium shelf position for your brand.",
    },
];

export const WhyOrganic = () => (
    <section
        id="why-organic"
        data-testid="why-organic-section"
        className="noise relative overflow-hidden bg-[#0F4C26] py-28 md:py-40"
    >
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter label="Why Organic" light />
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="font-display max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
                        <SplitChars text="Organic Dehydrated Products," />{" "}
                        <SplitChars text="pure by nature." className="text-[#E9C96A]" />
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                        Organic sourcing is not a label for us, it is the foundation of
                        every consignment we ship.
                    </p>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {BENEFITS.map((b, i) => (
                    <Reveal key={b.title} delay={(i % 4) * 0.08}>
                        <div
                            data-testid={`organic-card-${i + 1}`}
                            className="h-full rounded-md border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9C96A]/50"
                        >
                            <b.icon size={28} className="text-[#E9C96A]" aria-hidden="true" />
                            <h3 className="font-display mt-5 text-2xl font-medium text-white">
                                {b.title}
                            </h3>
                            <p className="mt-3 text-base leading-relaxed text-white/75">
                                {b.text}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
