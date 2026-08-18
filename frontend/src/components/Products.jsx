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
                <Chapter number="03" label="Our Products" className="text-base sm:text-lg font-bold" />
                <h2 className="font-display max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                    <SplitChars text="Perfect for Export" />
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#334155] md:text-lg">
                    Our flagship range of organic powders, spices, and premium coconut products
                    hygienically processed to international food safety and quality standards.
                </p>
            </Reveal>

            {PRODUCT_CATEGORIES.map((cat, catIdx) => (
                <div key={cat.slug} className={catIdx === 0 ? "mt-14" : "mt-20 border-t border-[#0F172A]/10 pt-16"}>
                    <Reveal>
                        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#166534]">
                                    Category 0{catIdx + 1}
                                </span>
                                <h3 className="font-display mt-1 text-2xl font-medium text-[#0F172A] md:text-3xl">
                                    {cat.name}
                                </h3>
                            </div>
                            <Link
                                to={`/products#${cat.slug}`}
                                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#166534] transition-colors hover:text-[#D4AF37]"
                            >
                                View all {cat.name} ({cat.products.length}) &rarr;
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {cat.products.map((p, i) => (
                            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
                                <Tilt className="h-full">
                                    <article
                                        data-testid={`product-card-${p.slug}`}
                                        className="group flex h-full flex-col overflow-hidden rounded-md border border-[#0F172A]/10 bg-white transition-shadow duration-300 hover:shadow-[0_28px_56px_rgb(0,0,0,0.14)]"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                            <img
                                                src={p.image}
                                                alt={p.alt}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                            <span className="absolute right-3 top-3 rounded-full bg-[#0B131F]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] backdrop-blur-sm">
                                                Export Quality
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <h4 className="font-display text-xl font-medium text-[#0F172A]">
                                                {p.name}
                                            </h4>
                                            <p className="mt-1 text-sm font-medium text-[#0CA56F]">
                                                ({p.scientific})
                                            </p>
                                            <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#334155]">
                                                {p.description}
                                            </p>
                                            <div className="mt-auto pt-5">
                                                <Link
                                                    to={`/products/${p.slug}`}
                                                    data-testid={`product-link-${p.slug}`}
                                                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#166534] transition-colors duration-300 hover:text-[#D4AF37]"
                                                    aria-label={`View ${p.name} details and specifications`}
                                                >
                                                    View details &amp; specs
                                                    <ArrowUpRight
                                                        size={14}
                                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </div>
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
