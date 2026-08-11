import { Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CONTACT, NAV_LINKS, PRODUCTS, scrollToId } from "../data/content";

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898 2.64 0 5.122-1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const SOCIAL_TILES = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/avpnexaa",
        color: "#E1306C",
        Icon: Instagram,
    },
    { name: "WhatsApp", href: CONTACT.whatsapp, color: "#25D366", Icon: WhatsAppIcon },
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61591269235999",
        color: "#1877F2",
        Icon: Facebook,
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

export const Footer = () => {
    const navigate = useNavigate();
    const go = (id) => {
        if (id === "products") {
            navigate("/products");
            return;
        }
        if (document.getElementById(id)) scrollToId(id);
        else navigate("/", { state: { scrollTo: id } });
    };
    return (
    <footer data-testid="site-footer" className="border-t border-white/8 bg-[#070D16]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-white p-3 ring-1 ring-black/5">
                            <img
                                src="/assets/logo-full.png"
                                alt="AVP Nexaa — Collaborate. Connect. Grow."
                                className="h-20 w-auto object-contain"
                            />
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
                                    onClick={() => go(l.id)}
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
                                    onClick={() => navigate(`/products/${p.slug}`)}
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
                        Connect With Us
                    </h4>
                    <div className="mt-4 flex gap-4">
                        {SOCIAL_TILES.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-center"
                                data-testid={`social-tile-${s.name.toLowerCase()}`}
                                aria-label={`AVP Nexaa on ${s.name}, opens in a new tab`}
                            >
                                <span className="flex h-20 w-20 items-center justify-center rounded-md bg-white transition-transform duration-300 group-hover:scale-110">
                                    <s.Icon size={30} color={s.color} />
                                </span>
                                <p className="mx-auto mt-2 text-[10px] leading-tight text-white/50 transition-colors duration-300 group-hover:text-[#D4AF37]">
                                    {s.name}
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
};
