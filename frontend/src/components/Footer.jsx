import { Facebook, Instagram } from "lucide-react";
import { CONTACT, NAV_LINKS, PRODUCTS, scrollToId } from "../data/content";

const QRS = [
    {
        src: "/assets/qr-instagram.png",
        label: "Scan for Instagram",
        href: "https://www.instagram.com/avpnexaa",
    },
    {
        src: "/assets/qr-whatsapp.png",
        label: "Scan for WhatsApp",
        href: CONTACT.whatsapp,
    },
    {
        src: "/assets/qr-facebook.png",
        label: "Scan for Facebook",
        href: "https://www.facebook.com/profile.php?id=61591269235999",
    },
];

const SOCIALS = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/avpnexaa" },
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61591269235999",
    },
];

export const Footer = () => (
    <footer data-testid="site-footer" className="border-t border-white/8 bg-[#070D16]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-white p-1 ring-1 ring-black/5">
                            <img
                                src="/assets/logo-mark.png"
                                alt="AVP Nexaa logo mark"
                                className="h-full w-auto object-contain"
                            />
                        </span>
                        <span className="flex flex-col">
                            <span className="text-lg font-bold leading-tight tracking-wide text-white">
                                AVP <span className="font-semibold text-[#D4AF37]">nexaa</span>
                            </span>
                            <span className="text-[10px] font-medium leading-tight tracking-[0.06em] text-[#D4AF37]">
                                Collaborate. Connect. Grow.
                            </span>
                        </span>
                    </div>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                        Premium Indian B2B exporter of organic dehydrated agricultural
                        products, herbs and spices.
                    </p>
                    <div className="mt-5 flex gap-3">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
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
                            <a
                                key={q.label}
                                href={q.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block text-center"
                                data-testid={`qr-${q.label.toLowerCase().replace(/\s+/g, "-")}`}
                                aria-label={`${q.label} — opens in a new tab`}
                            >
                                <img
                                    src={q.src}
                                    alt={q.label}
                                    width="80"
                                    height="80"
                                    loading="lazy"
                                    className="h-20 w-20 rounded-md bg-white p-1 transition-transform duration-300 group-hover:scale-110"
                                />
                                <p className="mx-auto mt-2 max-w-[80px] text-[10px] leading-tight text-white/50 transition-colors duration-300 group-hover:text-[#D4AF37]">
                                    {q.label}
                                </p>
                            </a>
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
