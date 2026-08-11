import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS, PRODUCT_CATEGORIES, scrollToId } from "../data/content";
import { GoogleTranslate } from "./GoogleTranslate";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const go = (id) => {
        setOpen(false);
        if (id === "products") {
            navigate("/products");
            return;
        }
        if (document.getElementById(id)) {
            scrollToId(id);
        } else {
            navigate("/", { state: { scrollTo: id } });
        }
    };

    return (
        <header
            data-testid="site-header"
            className="fixed inset-x-0 top-0 z-50 border-b border-[#0F172A]/10 bg-white/90 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur-xl backdrop-saturate-150"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
                <button
                    onClick={() => go("home")}
                    className="flex items-center gap-3"
                    data-testid="header-logo"
                    aria-label="AVP Nexaa — home"
                >
                    <img
                        src="/assets/logo-full.png"
                        alt="AVP Nexaa — Collaborate. Connect. Grow."
                        className="h-12 w-auto object-contain md:h-14"
                    />
                </button>

                <nav
                    className="hidden items-center gap-8 lg:flex"
                    aria-label="Primary navigation"
                >
                    {NAV_LINKS.map((l) =>
                        l.id === "products" ? (
                            <div key={l.id} className="group relative">
                                <button
                                    onClick={() => go("products")}
                                    data-testid="nav-link-products"
                                    className="group/link relative flex items-center gap-1.5 text-[15px] font-medium tracking-wide text-[#0F172A] transition-colors duration-300 hover:text-[#0CA56F]"
                                >
                                    {l.label}
                                    <ChevronDown
                                        size={14}
                                        className="transition-transform duration-300 group-hover:rotate-180"
                                        aria-hidden="true"
                                    />
                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover/link:w-full" />
                                </button>
                                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                    <div className="rounded-md border border-[#0F172A]/10 bg-white p-2 shadow-[0_20px_45px_rgb(0,0,0,0.12)]">
                                        {PRODUCT_CATEGORIES.map((c) => (
                                            <button
                                                key={c.slug}
                                                onClick={() => go("products")}
                                                data-testid={`nav-category-${c.slug}`}
                                                className="flex w-full items-center justify-between rounded-sm px-4 py-3 text-left transition-colors hover:bg-[#0CA56F]/5"
                                            >
                                                <span className="text-sm font-medium text-[#0F172A]">
                                                    {c.name}
                                                </span>
                                                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0CA56F]">
                                                    {c.products.length} items
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button
                                key={l.id}
                                onClick={() => go(l.id)}
                                data-testid={`nav-link-${l.id}`}
                                className="group relative text-[15px] font-medium tracking-wide text-[#0F172A] transition-colors duration-300 hover:text-[#0CA56F]"
                            >
                                {l.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </button>
                        ),
                    )}
                </nav>

                <div className="flex items-center gap-5">
                    <GoogleTranslate />
                    <a
                        href={CONTACT.phoneHref}
                        data-testid="header-phone-link"
                        className="hidden items-center gap-2 rounded-full border border-[#0CA56F]/30 px-4 py-2 text-sm font-medium text-[#0CA56F] transition-all duration-300 hover:bg-[#0CA56F] hover:text-white lg:flex"
                    >
                        <Phone size={14} aria-hidden="true" />
                        {CONTACT.phone}
                    </a>
                    <button
                        className="text-[#0F172A] lg:hidden"
                        onClick={() => setOpen(!open)}
                        data-testid="mobile-menu-toggle"
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-[#0F172A]/5 bg-white/95 backdrop-blur-xl lg:hidden"
                        aria-label="Mobile navigation"
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {NAV_LINKS.map((l) => (
                                <div key={l.id}>
                                    <button
                                        onClick={() => go(l.id)}
                                        data-testid={`mobile-nav-link-${l.id}`}
                                        className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#0CA56F]/5 hover:text-[#0CA56F]"
                                    >
                                        {l.label}
                                    </button>
                                    {l.id === "products" &&
                                        PRODUCT_CATEGORIES.map((c) => (
                                            <button
                                                key={c.slug}
                                                onClick={() => go("products")}
                                                data-testid={`mobile-nav-category-${c.slug}`}
                                                className="w-full rounded-md py-2 pl-8 pr-3 text-left text-[13px] text-[#334155] transition-colors hover:text-[#0CA56F]"
                                            >
                                                {c.name}
                                            </button>
                                        ))}
                                </div>
                            ))}
                            <div className="flex items-center justify-center px-3 py-3">
                                <a
                                    href={CONTACT.phoneHref}
                                    data-testid="mobile-phone-link"
                                    className="flex items-center gap-2 text-sm font-medium text-[#0CA56F]"
                                >
                                    <Phone size={14} aria-hidden="true" />
                                    {CONTACT.phone}
                                </a>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};
