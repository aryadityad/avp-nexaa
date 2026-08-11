import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT, PRODUCT_CATEGORIES } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";

const SPECS = [
    "Moisture Content",
    "Mesh Size",
    "Packaging Options",
    "MOQ",
    "Shelf Life",
];

export const ProductsPage = () => (
    <main
        className="min-h-screen bg-[#F8FAF9] pb-24 pt-32 md:pt-36"
        data-testid="products-page"
    >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter label="Our Products" />
                <h1 className="font-display max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                    <SplitChars text="Perfect for Export" />
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] md:text-lg">
                    Our flagship range of organic powders, processed under strict hygiene
                    protocols and packed to international food safety standards.
                </p>
            </Reveal>

            {PRODUCT_CATEGORIES.map((cat) => (
                <section key={cat.slug} className="mt-16" aria-label={cat.name}>
                    <Reveal>
                        <h2 className="font-display mb-10 text-2xl font-medium text-[#0F172A] md:text-3xl">
                            {cat.name}
                        </h2>
                    </Reveal>
                    <div className="space-y-16">
                        {cat.products.map((p, i) => (
                            <Reveal key={p.slug}>
                                <article
                                    data-testid={`products-row-${p.slug}`}
                                    className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                                >
                                    <div className={i % 2 ? "lg:order-2" : ""}>
                                        <div className="relative">
                                            <div className="absolute -left-4 -top-4 h-full w-full rounded-md border border-[#D4AF37]/50" />
                                            <img
                                                src={p.image}
                                                alt={p.alt}
                                                loading="lazy"
                                                className="relative aspect-[4/3] w-full rounded-md object-cover shadow-[0_20px_45px_rgb(0,0,0,0.12)]"
                                            />
                                        </div>
                                    </div>
                                    <div className={i % 2 ? "lg:order-1" : ""}>
                                        <h3 className="font-display text-3xl font-medium text-[#0F172A]">
                                            {p.name}
                                        </h3>
                                        <p className="mt-1.5 text-sm font-medium text-[#0CA56F]">
                                            ({p.scientific})
                                        </p>
                                        <p className="mt-4 text-base leading-relaxed text-[#334155]">
                                            {p.longDescription || p.description}
                                        </p>
                                        <dl
                                            className="mt-6 divide-y divide-[#0F172A]/10 rounded-md border border-[#0F172A]/10 bg-white"
                                            data-testid={`products-row-specs-${p.slug}`}
                                        >
                                            {SPECS.map((s) => (
                                                <div
                                                    key={s}
                                                    className="flex items-center justify-between px-5 py-3"
                                                >
                                                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#334155]/80">
                                                        {s}
                                                    </dt>
                                                    <dd className="text-sm font-medium text-[#166534]">
                                                        Coming soon
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                        <div className="mt-6 flex flex-wrap items-center gap-4">
                                            <a
                                                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                                                    `Export Enquiry: ${p.name}`,
                                                )}`}
                                                data-testid={`products-row-quote-${p.slug}`}
                                                className="group flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B131F] transition-colors duration-300 hover:bg-[#e9c96a]"
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
                                                className="flex items-center gap-2 rounded-full border border-[#166534]/30 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#166534] transition-colors duration-300 hover:bg-[#166534] hover:text-white"
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
