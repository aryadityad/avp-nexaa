import { ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";

export const Certifications = () => (
    <section
        id="certifications"
        data-testid="certifications-section"
        className="border-y border-[#0F172A]/6 bg-white py-24 md:py-28"
    >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
                <Chapter number="04" label="Certifications & Credentials" />
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="font-display max-w-xl text-4xl font-medium leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                        <SplitChars text="Compliance you can" />{" "}
                        <SplitChars text="verify." className="text-[#166534]" />
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-[#334155]">
                        Registration certificates and compliance documents are shared
                        with buyers on request during onboarding.
                    </p>
                </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {CERTIFICATIONS.map((c, i) => (
                    <Reveal key={c.name} delay={i * 0.06}>
                        <div
                            data-testid={`cert-badge-${c.name.toLowerCase()}`}
                            className={`group flex h-44 flex-col items-center justify-center rounded-md px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgb(0,0,0,0.08)] ${
                                c.img
                                    ? "border border-[#0F172A]/10 bg-white hover:border-[#D4AF37]"
                                    : "border border-dashed border-[#0F172A]/20 bg-[#F8FAF9] hover:border-[#D4AF37] hover:bg-white"
                            }`}
                        >
                            {c.img ? (
                                <>
                                    <img
                                        src={c.img}
                                        alt={`${c.name} certification logo`}
                                        loading="lazy"
                                        className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#166534]">
                                        Registered
                                    </span>
                                </>
                            ) : (
                                <>
                                    <ShieldCheck
                                        size={26}
                                        className="text-[#166534] transition-transform duration-300 group-hover:scale-110"
                                        aria-hidden="true"
                                    />
                                    <span className="font-display mt-3 text-lg font-semibold tracking-wide text-[#0F172A]">
                                        {c.name}
                                    </span>
                                    <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#334155]/70">
                                        Badge placeholder
                                    </span>
                                </>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
