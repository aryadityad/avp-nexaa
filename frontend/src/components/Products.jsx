import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../data/content";
import { Chapter, Reveal } from "./Reveal";

export const Products = () => (
    <section id="products" data-testid="products-section" className="noise relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter number="03" label="Our Products" />
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="font-display max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                        Dehydrated at source,
                        <em className="italic text-[#166534]"> perfected for export.</em>
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-[#475569]">
                        Our flagship range of organic powders — processed under strict
                        hygiene protocols and packed to international food-safety
                        standards.
                    </p>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {PRODUCTS.map((p, i) => (
                    <Reveal key={p.slug} delay={(i % 4) * 0.08}>
                        <article
                            data-testid={`product-card-${p.slug}`}
                            className="group h-full overflow-hidden rounded-md border border-[#0F172A]/8 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgb(0,0,0,0.10)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <span className="absolute right-3 top-3 rounded-full bg-[#0B131F]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] backdrop-blur-sm">
                                    Specs coming soon
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-xl font-medium text-[#0F172A]">
                                    {p.name}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                                    {p.description}
                                </p>
                                <button
                                    data-testid={`product-link-${p.slug}`}
                                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#166534] transition-colors duration-300 hover:text-[#D4AF37]"
                                    aria-label={`${p.name} specifications — coming soon`}
                                >
                                    Moisture, mesh size, MOQ — coming soon
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
