import { Facebook, Instagram, Linkedin } from "lucide-react";
import { CONTACT, NAV_LINKS, PRODUCTS, scrollToId } from "../data/content";

const QRS = [
    { src: "/assets/qr-1.png", label: "Scan for Instagram" },
    { src: "/assets/qr-whatsapp.png", label: "Scan for WhatsApp" },
    { src: "/assets/qr-2.png", label: "Scan for Facebook" },
];

const SOCIALS = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export const Footer = () => (
    <footer data-testid="site-footer" className="border-t border-white/8 bg-[#070D16]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/5">
                            <img src="/assets/logo.png" alt="AVP Nexaa logo" className="h-9 w-9 object-contain" />
                        </span>
                        <span className="font-display text-lg font-semibold tracking-wide text-white">
                            AVP <span className="italic text-[#D4AF37]">Nexaa</span>
                        </span>
                    </div>
                    <p className="font-display mt-4 text-sm italic text-[#D4AF37]">
                        Collaborate. Connect. Grow.
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                        Premium Indian B2B exporter of organic dehydrated agricultural
                        products, herbs and spices.
                    </p>
                    <div className="mt-5 flex gap-3">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={`AVP Nexaa on ${s.label}`}
                                data-testid={`social-${s.label.toLowerCase()}`}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                            >
                                <s.icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>

                <nav aria-label="Footer quick links">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                        Quick Links
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                        {NAV_LINKS.map((l) => (
                            <li key={l.id}>
                                <button
                                    onClick={() => scrollToId(l.id)}
                                    data-testid={`footer-link-${l.id}`}
                                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#D4AF37]"
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Footer product links">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                        Products
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                        {PRODUCTS.map((p) => (
                            <li key={p.slug}>
                                <button
                                    onClick={() => scrollToId("products")}
                                    data-testid={`footer-product-${p.slug}`}
                                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#D4AF37]"
                                >
                                    {p.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                        Scan &amp; Connect
                    </h4>
                    <div className="mt-4 flex gap-4">
                        {QRS.map((q) => (
                            <div key={q.label} className="text-center" data-testid={`qr-${q.label.toLowerCase().replace(/\s+/g, "-")}`}>
                                <img
                                    src={q.src}
                                    alt={q.label}
                                    width="80"
                                    height="80"
                                    loading="lazy"
                                    className="h-20 w-20 rounded-md bg-white p-1"
                                />
                                <p className="mt-2 max-w-[80px] text-[10px] leading-tight text-white/50">
                                    {q.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-white/55">{CONTACT.email}</p>
                </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-7">
                <p className="text-xs text-white/45">
                    © {new Date().getFullYear()} AVP Nexaa. All rights reserved.
                </p>
                <p className="text-xs text-white/45">
                    Proudly exported from Pune, Maharashtra, India
                </p>
            </div>
        </div>
    </footer>
);
