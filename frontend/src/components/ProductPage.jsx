import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT, PRODUCT_CATEGORIES, PRODUCTS } from "../data/content";
import { Reveal, SplitChars } from "./Reveal";

const SPECS = [
    "Moisture Content",
    "Mesh Size",
    "Packaging Options",
    "MOQ",
    "Shelf Life",
];

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
                <Link
                    to="/"
                    data-testid="product-notfound-home"
                    className="mt-4 text-sm font-semibold text-[#166534]"
                >
                    Back to home
                </Link>
            </main>
        );
    }

    return (
        <main
            className="min-h-screen bg-[#F8FAF9] pb-24 pt-28 md:pt-32"
            data-testid="product-page"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <nav
                    className="mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#334155]/70"
                    aria-label="Breadcrumb"
                >
                    <Link to="/" data-testid="breadcrumb-home" className="transition-colors hover:text-[#166534]">
                        Home
                    </Link>
                    <span>/</span>
                    <span>{category ? category.name : "Products"}</span>
                    <span>/</span>
                    <span className="text-[#166534]">{product.name}</span>
                </nav>

                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-full w-full rounded-md border border-[#D4AF37]/50" />
                            <img
                                src={product.image}
                                alt={product.alt}
                                data-testid="product-page-image"
                                className="relative aspect-[4/3] w-full rounded-md object-cover shadow-[0_24px_50px_rgb(0,0,0,0.14)]"
                            />
                        </div>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#166534]">
                                {category ? category.name : "Our Products"}
                            </p>
                            <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-[#0F172A] sm:text-5xl">
                                <SplitChars text={product.name} />
                            </h1>
                            <p className="mt-5 text-base leading-relaxed text-[#334155] md:text-lg">
                                {product.longDescription || product.description}
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <dl
                                className="mt-8 divide-y divide-[#0F172A]/8 rounded-md border border-[#0F172A]/10 bg-white"
                                data-testid="product-spec-table"
                            >
                                {SPECS.map((s) => (
                                    <div key={s} className="flex items-center justify-between px-5 py-3.5">
                                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#334155]/80">
                                            {s}
                                        </dt>
                                        <dd className="text-sm font-medium text-[#166534]">
                                            Coming soon
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="mt-3 text-xs text-[#334155]/70">
                                Detailed specifications, lab reports and samples are shared
                                on enquiry.
                            </p>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <button
                                    onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
                                    data-testid="product-page-quote"
                                    className="group flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B131F] transition-colors duration-300 hover:bg-[#e9c96a]"
                                >
                                    Get a Quote
                                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                                </button>
                                <a
                                    href={CONTACT.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="product-page-whatsapp"
                                    className="flex items-center gap-2 rounded-full border border-[#166534]/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#166534] transition-colors duration-300 hover:bg-[#166534] hover:text-white"
                                >
                                    <MessageCircle size={15} aria-hidden="true" />
                                    WhatsApp
                                </a>
                            </div>
                            <button
                                onClick={() => navigate("/", { state: { scrollTo: "products" } })}
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
