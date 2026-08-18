import { Link, useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    HeartPulse,
    Layers,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { CONTACT, PRODUCT_CATEGORIES, PRODUCTS } from "../data/content";
import { Reveal, SplitChars } from "./Reveal";

export const ProductPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = PRODUCTS.find((p) => p.slug === slug);
    const category = PRODUCT_CATEGORIES.find((c) =>
        c.products.some((p) => p.slug === slug),
    );

    if (!product) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
                <h1 className="font-display text-3xl text-[#0F172A]">Product not found</h1>
                <p className="mt-2 text-sm text-[#334155]">The product you are looking for does not exist or has been relocated.</p>
                <Link
                    to="/products"
                    data-testid="product-notfound-home"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#166534] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
                >
                    Back to all products
                </Link>
            </main>
        );
    }

    return (
        <main
            className="min-h-screen bg-[#F8FAF9] pb-28 pt-28 md:pt-32"
            data-testid="product-page"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                {/* Breadcrumbs */}
                <nav
                    className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#334155]/70"
                    aria-label="Breadcrumb"
                >
                    <Link to="/" data-testid="breadcrumb-home" className="transition-colors hover:text-[#166534]">
                        Home
                    </Link>
                    <span>/</span>
                    <Link
                        to="/products"
                        data-testid="breadcrumb-products"
                        className="transition-colors hover:text-[#0CA56F]"
                    >
                        {category ? category.name : "Products"}
                    </Link>
                    <span>/</span>
                    <span className="text-[#166534]">{product.name}</span>
                </nav>

                {/* Main Hero Grid */}
                <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column: Image & Quick Highlights */}
                    <div className="lg:col-span-5">
                        <Reveal>
                            <div className="relative">
                                <div className="absolute -left-3.5 -top-3.5 h-full w-full rounded-lg border border-[#D4AF37]/50" />
                                <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_45px_rgb(0,0,0,0.12)]">
                                    <img
                                        src={product.image}
                                        alt={product.alt}
                                        data-testid="product-page-image"
                                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        {/* Quick Credential Badges */}
                        <Reveal delay={0.1}>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2.5 rounded-md border border-[#0F172A]/10 bg-white p-3.5 shadow-sm">
                                    <ShieldCheck size={20} className="shrink-0 text-[#166534]" />
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#334155]/70">Quality</p>
                                        <p className="text-xs font-semibold text-[#0F172A]">Export Grade</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 rounded-md border border-[#0F172A]/10 bg-white p-3.5 shadow-sm">
                                    <PackageCheck size={20} className="shrink-0 text-[#D4AF37]" />
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#334155]/70">Packaging</p>
                                        <p className="text-xs font-semibold text-[#0F172A]">Custom Bulk Bags</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Key Features card */}
                        {product.keyFeatures && product.keyFeatures.length > 0 && (
                            <Reveal delay={0.15}>
                                <div className="mt-6 rounded-lg border border-[#0F172A]/10 bg-white p-6 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#166534]">
                                        <Sparkles size={16} className="text-[#0CA56F]" />
                                        Key Features
                                    </div>
                                    <ul className="mt-4 space-y-2.5">
                                        {product.keyFeatures.map((f) => (
                                            <li key={f} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#334155]">
                                                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#0CA56F]" aria-hidden="true" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        )}
                    </div>

                    {/* Right Column: Title, Narrative, Specs & CTAs */}
                    <div className="lg:col-span-7">
                        <Reveal>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#166534]">
                                {category ? category.name : "Our Products"}
                            </span>
                            <h1 className="font-display mt-2 text-4xl font-medium tracking-tight text-[#0F172A] sm:text-5xl">
                                <SplitChars text={product.name} />
                            </h1>
                            <p className="mt-1.5 text-base font-medium text-[#0CA56F]">
                                ({product.scientific})
                            </p>
                            {product.tagline && (
                                <p className="mt-2 text-sm font-semibold text-[#8A6D1C]">
                                    {product.tagline}
                                </p>
                            )}

                            <div className="mt-5 space-y-3.5 text-base leading-relaxed text-[#334155]">
                                {(product.longDescription || product.description)
                                    .split("\n\n")
                                    .map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                            </div>
                        </Reveal>

                        {/* Top Health Benefits (if available e.g. Moringa) */}
                        {product.topHealthBenefits && product.topHealthBenefits.length > 0 && (
                            <Reveal delay={0.1}>
                                <div className="mt-8 rounded-lg border border-[#166534]/20 bg-[#166534]/5 p-6">
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#166534]">
                                        <HeartPulse size={16} className="text-[#166534]" />
                                        Top Health Benefits
                                    </div>
                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {product.topHealthBenefits.map((b) => (
                                            <div key={b.title} className="rounded-md border border-[#166534]/10 bg-white p-3.5 shadow-xs">
                                                <h4 className="font-display text-sm font-semibold text-[#0F172A]">
                                                    {b.title}
                                                </h4>
                                                <p className="mt-1 text-xs leading-relaxed text-[#334155]">
                                                    {b.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        )}

                        {/* Specifications Table */}
                        {product.specs && product.specs.length > 0 && (
                            <Reveal delay={0.12}>
                                <div className="mt-8">
                                    <div className="flex items-center justify-between pb-2">
                                        <h3 className="font-display text-lg font-medium text-[#0F172A]">
                                            Technical Specifications
                                        </h3>
                                        <span className="text-xs text-[#334155]/70">
                                            Customization available
                                        </span>
                                    </div>
                                    <dl
                                        className="divide-y divide-[#0F172A]/10 overflow-hidden rounded-md border border-[#0F172A]/10 bg-white"
                                        data-testid="product-spec-table"
                                    >
                                        {product.specs.map((s, sIdx) => (
                                            <div
                                                key={s.label}
                                                className={`grid grid-cols-12 gap-2 px-5 py-3 text-xs ${
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
                                    <p className="mt-2.5 text-xs text-[#334155]/70">
                                        *Detailed COA (Certificate of Analysis), lab reports and samples are shared on enquiry.
                                    </p>
                                </div>
                            </Reveal>
                        )}

                        {/* Uses & Applications by Industry */}
                        {product.uses && product.uses.length > 0 && (
                            <Reveal delay={0.15}>
                                <div className="mt-8">
                                    <div className="flex items-center gap-2 pb-3">
                                        <Layers size={17} className="text-[#166534]" />
                                        <h3 className="font-display text-lg font-medium text-[#0F172A]">
                                            Industry Uses &amp; Applications
                                        </h3>
                                    </div>
                                    <div className="grid gap-3.5 sm:grid-cols-2">
                                        {product.uses.map((u) => (
                                            <div
                                                key={u.industry}
                                                className="rounded-md border border-[#0F172A]/10 bg-white p-4 shadow-xs"
                                            >
                                                <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#166534]">
                                                    {u.industry}
                                                </h4>
                                                <ul className="mt-2.5 space-y-1">
                                                    {u.items.map((item) => (
                                                        <li
                                                            key={item}
                                                            className="flex items-start gap-2 text-xs leading-relaxed text-[#334155]"
                                                        >
                                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#D4AF37]" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        )}

                        {/* Key Benefits */}
                        {product.benefits && product.benefits.length > 0 && (
                            <Reveal delay={0.18}>
                                <div className="mt-8 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
                                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6D1C]">
                                        Commercial &amp; Formulation Benefits
                                    </h3>
                                    <ul className="mt-3.5 grid gap-2 sm:grid-cols-2">
                                        {product.benefits.map((b) => (
                                            <li
                                                key={b}
                                                className="flex items-start gap-2 text-xs leading-relaxed text-[#334155]"
                                            >
                                                <BadgeCheck size={15} className="mt-0.5 shrink-0 text-[#8A6D1C]" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        )}

                        {/* CTA Bar */}
                        <Reveal delay={0.2}>
                            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#0F172A]/10 pt-8">
                                <a
                                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                                        `Export Enquiry: ${product.name}`,
                                    )}`}
                                    data-testid="product-page-quote"
                                    className="group flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B131F] transition-colors duration-300 hover:bg-[#e9c96a]"
                                >
                                    Request Quotation &amp; Sample
                                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                                </a>
                                <a
                                    href={CONTACT.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="product-page-whatsapp"
                                    className="flex items-center gap-2 rounded-full border border-[#166534]/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#166534] transition-colors duration-300 hover:bg-[#166534] hover:text-white"
                                >
                                    <MessageCircle size={15} aria-hidden="true" />
                                    WhatsApp Enquiry
                                </a>
                            </div>
                            <button
                                onClick={() => navigate("/products")}
                                data-testid="product-page-back"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#334155] transition-colors hover:text-[#166534]"
                            >
                                <ArrowLeft size={15} aria-hidden="true" />
                                Back to all products
                            </button>
                        </Reveal>
                    </div>
                </div>
            </div>
        </main>
    );
};
