import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { CONTACT, PRODUCT_CATEGORIES } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";

export const ProductsPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 150);
            }
        }
    }, [location.hash]);

    return (
        <main
            className="min-h-screen bg-[#F8FAF9] pb-28 pt-32 md:pt-36"
            data-testid="products-page"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <Reveal>
                    <Chapter label="Export Product Catalog" />
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <h1 className="font-display max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                                <SplitChars text="Premium Quality Products," />{" "}
                                <br className="hidden sm:inline" />
                                <SplitChars text="Perfect for Export" className="text-[#166534]" />
                            </h1>
                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] md:text-lg">
                                Our complete range of certified organic dehydrated products,
                                spices, and fresh/processed coconuts, packed to international
                                food safety and export specifications.
                            </p>
                        </div>

                        {/* Category Quick Navigation Chips */}
                        <div className="flex flex-wrap gap-2.5">
                            {PRODUCT_CATEGORIES.map((cat) => (
                                <a
                                    key={cat.slug}
                                    href={`#${cat.slug}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#166534]/25 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#166534] shadow-sm transition-all hover:bg-[#166534] hover:text-white"
                                >
                                    {cat.name} ({cat.products.length})
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {PRODUCT_CATEGORIES.map((cat, catIdx) => (
                    <section
                        key={cat.slug}
                        id={cat.slug}
                        className={catIdx === 0 ? "mt-20 scroll-mt-28" : "mt-28 scroll-mt-28 border-t border-[#0F172A]/10 pt-20"}
                        aria-label={cat.name}
                    >
                        <Reveal>
                            <div className="mb-14 flex flex-wrap items-baseline justify-between gap-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#166534]">
                                        Category 0{catIdx + 1}
                                    </span>
                                    <h2 className="font-display mt-1 text-3xl font-medium text-[#0F172A] sm:text-4xl">
                                        {cat.name}
                                    </h2>
                                    {cat.description && (
                                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#334155]">
                                            {cat.description}
                                        </p>
                                    )}
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-[#334155]/60">
                                    {cat.products.length} Products Available
                                </span>
                            </div>
                        </Reveal>

                        <div className="space-y-24">
                            {cat.products.map((p, i) => (
                                <Reveal key={p.slug}>
                                    <article
                                        data-testid={`products-row-${p.slug}`}
                                        className="grid items-start gap-12 rounded-xl border border-[#0F172A]/10 bg-white p-8 shadow-[0_12px_35px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_rgb(0,0,0,0.08)] lg:grid-cols-12 lg:gap-14 md:p-12"
                                    >
                                        {/* Image column */}
                                        <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                                            <div className="sticky top-28">
                                                <div className="relative">
                                                    <div className="absolute -left-3 -top-3 h-full w-full rounded-lg border border-[#D4AF37]/50" />
                                                    <div className="relative overflow-hidden rounded-lg shadow-md">
                                                        <img
                                                            src={p.image}
                                                            alt={p.alt}
                                                            loading="lazy"
                                                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                                                        />
                                                    </div>
                                                </div>

                                                {p.keyFeatures && p.keyFeatures.length > 0 && (
                                                    <div className="mt-6 rounded-lg border border-[#0F172A]/10 bg-[#F8FAF9] p-5">
                                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#166534]">
                                                            Key Highlights
                                                        </p>
                                                        <ul className="mt-3 space-y-2">
                                                            {p.keyFeatures.slice(0, 4).map((f) => (
                                                                <li key={f} className="flex items-start gap-2 text-xs leading-relaxed text-[#334155]">
                                                                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#0CA56F]" aria-hidden="true" />
                                                                    <span>{f}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Details column */}
                                        <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#166534]">
                                                {cat.name}
                                            </span>
                                            <h3 className="font-display mt-1 text-3xl font-medium text-[#0F172A] sm:text-4xl">
                                                {p.name}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-[#0CA56F]">
                                                ({p.scientific})
                                            </p>
                                            {p.tagline && (
                                                <p className="mt-2 text-sm font-semibold text-[#8A6D1C]">
                                                    {p.tagline}
                                                </p>
                                            )}
                                            <p className="mt-4 text-base leading-relaxed text-[#334155]">
                                                {p.longDescription ? p.longDescription.split("\n\n")[0] : p.description}
                                            </p>

                                            {/* Specifications Table */}
                                            {p.specs && p.specs.length > 0 && (
                                                <div className="mt-6">
                                                    <div className="flex items-center justify-between pb-2">
                                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F172A]">
                                                            Product Specifications
                                                        </p>
                                                        <span className="text-[11px] text-[#334155]/70">
                                                            Customizable upon request
                                                        </span>
                                                    </div>
                                                    <dl
                                                        className="divide-y divide-[#0F172A]/10 overflow-hidden rounded-md border border-[#0F172A]/10 bg-[#F8FAF9]"
                                                        data-testid={`products-row-specs-${p.slug}`}
                                                    >
                                                        {p.specs.map((s, sIdx) => (
                                                            <div
                                                                key={s.label}
                                                                className={`grid grid-cols-12 gap-2 px-4 py-2.5 text-xs ${
                                                                    sIdx % 2 === 0 ? "bg-white" : "bg-[#F8FAF9]"
                                                                }`}
                                                            >
                                                                <dt className="col-span-5 font-semibold text-[#334155]/90">
                                                                    {s.label}
                                                                </dt>
                                                                <dd className="col-span-7 font-medium text-[#0F172A]">
                                                                    {s.value}
                                                                </dd>
                                                            </div>
                                                        ))}
                                                    </dl>
                                                </div>
                                            )}

                                            {/* Action buttons */}
                                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                                <Link
                                                    to={`/products/${p.slug}`}
                                                    data-testid={`products-row-view-${p.slug}`}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-[#166534] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0F4C26]"
                                                >
                                                    Full Details &amp; Uses
                                                    <ArrowUpRight size={14} aria-hidden="true" />
                                                </Link>
                                                <a
                                                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                                                        `Export Enquiry: ${p.name}`,
                                                    )}`}
                                                    data-testid={`products-row-quote-${p.slug}`}
                                                    className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B131F] transition-colors duration-300 hover:bg-[#e9c96a]"
                                                >
                                                    Get a Quote
                                                    <ArrowRight
                                                        size={14}
                                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    href={CONTACT.whatsapp}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    data-testid={`products-row-whatsapp-${p.slug}`}
                                                    className="inline-flex items-center gap-2 rounded-full border border-[#166534]/30 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#166534] transition-colors duration-300 hover:bg-[#166534] hover:text-white"
                                                >
                                                    <MessageCircle size={14} aria-hidden="true" />
                                                    WhatsApp
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
};
