import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS, scrollToId } from "../data/content";
import { GoogleTranslate } from "./GoogleTranslate";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        scrollToId(id);
    };

    return (
        <header
            data-testid="site-header"
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-[#0F172A]/5 bg-white/85 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
                <button
                    onClick={() => go("home")}
                    className="flex items-center gap-3"
                    data-testid="header-logo"
                    aria-label="AVP Nexaa — home"
                >
                    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
                        <img
                            src="/assets/logo.png"
                            alt="AVP Nexaa logo"
                            className="h-9 w-9 object-contain"
                        />
                    </span>
                    <span
                        className={`font-display text-lg font-semibold tracking-wide transition-colors duration-300 ${
                            scrolled ? "text-[#0F172A]" : "text-white"
                        }`}
                    >
                        AVP <span className="italic text-[#D4AF37]">Nexaa</span>
                    </span>
                </button>

                <nav
                    className="hidden items-center gap-8 lg:flex"
                    aria-label="Primary navigation"
                >
                    {NAV_LINKS.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => go(l.id)}
                            data-testid={`nav-link-${l.id}`}
                            className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                                scrolled
                                    ? "text-[#0F172A] hover:text-[#166534]"
                                    : "text-white/90 hover:text-white"
                            }`}
                        >
                            {l.label}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <GoogleTranslate light={!scrolled && !open} />
                    <a
                        href={CONTACT.phoneHref}
                        data-testid="header-phone-link"
                        className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 lg:flex ${
                            scrolled
                                ? "border-[#166534]/30 text-[#166534] hover:bg-[#166534] hover:text-white"
                                : "border-white/40 text-white hover:bg-white hover:text-[#0F172A]"
                        }`}
                    >
                        <Phone size={14} aria-hidden="true" />
                        {CONTACT.phone}
                    </a>
                    <button
                        className={`lg:hidden ${scrolled || open ? "text-[#0F172A]" : "text-white"}`}
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
                                <button
                                    key={l.id}
                                    onClick={() => go(l.id)}
                                    data-testid={`mobile-nav-link-${l.id}`}
                                    className="rounded-md px-3 py-3 text-left text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#166534]/5 hover:text-[#166534]"
                                >
                                    {l.label}
                                </button>
                            ))}
                            <div className="flex items-center justify-center px-3 py-3">
                                <a
                                    href={CONTACT.phoneHref}
                                    data-testid="mobile-phone-link"
                                    className="flex items-center gap-2 text-sm font-medium text-[#166534]"
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
