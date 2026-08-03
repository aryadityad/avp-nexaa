import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";
import { Tilt } from "./Tilt";
import { FloatingLeaves } from "./FloatingLeaves";

export const Products = () => (
    <section id="products" data-testid="products-section" className="noise relative overflow-hidden py-24 md:py-32">
        <FloatingLeaves
            items={[
                { top: "5%", left: "45%", size: 46, rotate: 10, duration: 8, className: "text-[#166534]/10" },
                { bottom: "8%", right: "2%", size: 52, rotate: -25, duration: 7, delay: 1.5, className: "text-[#166534]/10" },
            ]}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter number="03" label="Our Products" />
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="font-display max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                        <SplitChars text="Perfect for export." />
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-[#334155]">
                        Our flagship range of organic powders — processed under strict
                        hygiene protocols and packed to international food-safety
                        standards.
                    </p>
                </div>
            </Reveal>

            {PRODUCT_CATEGORIES.map((cat) => (
                <div key={cat.slug} className="mt-14">
                    <Reveal>
                        <h3 className="font-display mb-8 text-2xl font-medium text-[#0F172A]">
                            {cat.name}
                        </h3>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {cat.products.map((p, i) => (
                            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
                                <Tilt className="h-full">
                            <article
                                data-testid={`product-card-${p.slug}`}
                                className="group h-full overflow-hidden rounded-md border border-[#0F172A]/10 bg-white transition-shadow duration-300 hover:shadow-[0_28px_56px_rgb(0,0,0,0.14)]"
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
                                <p className="mt-2.5 text-base leading-relaxed text-[#334155]">
                                    {p.description}
                                </p>
                                <Link
                                    to={`/products/${p.slug}`}
                                    data-testid={`product-link-${p.slug}`}
                                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#166534] transition-colors duration-300 hover:text-[#D4AF37]"
                                    aria-label={`View ${p.name} details and specifications`}
                                >
                                    View details &amp; specifications
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                            </article>
                                </Tilt>
                            </Reveal>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
