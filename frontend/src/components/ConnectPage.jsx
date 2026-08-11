import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CONTACT } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";

const QRS = [
    {
        src: "/assets/qr-instagram.png",
        label: "Instagram",
        href: "https://www.instagram.com/avpnexaa",
        color: "#E1306C",
    },
    {
        src: "/assets/qr-whatsapp.png",
        label: "WhatsApp",
        href: CONTACT.whatsapp,
        color: "#25D366",
    },
    {
        src: "/assets/qr-facebook.png",
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61591269235999",
        color: "#1877F2",
    },
];

export const ConnectPage = () => {
    const navigate = useNavigate();
    return (
        <main
            className="min-h-screen bg-[#F8FAF9] pb-24 pt-32 md:pt-36"
            data-testid="connect-page"
        >
            <div className="mx-auto max-w-5xl px-6 md:px-10">
                <Reveal>
                    <Chapter label="Connect With Us" />
                    <h1 className="font-display max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                        <SplitChars text="Scan & Connect" />
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] md:text-lg">
                        Point your phone camera at a code, or tap a card, to reach us
                        instantly on your preferred platform.
                    </p>
                </Reveal>

                <div className="mt-14 grid gap-8 sm:grid-cols-3">
                    {QRS.map((q, i) => (
                        <Reveal key={q.label} delay={i * 0.08}>
                            <a
                                href={q.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`connect-qr-${q.label.toLowerCase()}`}
                                aria-label={`${q.label} QR code, opens in a new tab`}
                                className="group block rounded-md border border-[#0F172A]/10 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_20px_45px_rgb(0,0,0,0.10)]"
                            >
                                <img
                                    src={q.src}
                                    alt={`${q.label} QR code`}
                                    loading="lazy"
                                    className="mx-auto h-44 w-44 rounded-md transition-transform duration-300 group-hover:scale-105"
                                />
                                <p className="font-display mt-6 text-xl font-medium" style={{ color: q.color }}>
                                    {q.label}
                                </p>
                                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#334155]/70">
                                    Scan or tap to open
                                </p>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <button
                        onClick={() => navigate("/")}
                        data-testid="connect-page-back"
                        className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-[#334155] transition-colors hover:text-[#0CA56F]"
                    >
                        <ArrowLeft size={15} aria-hidden="true" />
                        Back to home
                    </button>
                </Reveal>
            </div>
        </main>
    );
};
