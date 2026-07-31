import { ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/content";
import { Chapter, Reveal } from "./Reveal";

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
                        Compliance you can
                        <em className="italic text-[#166534]"> verify.</em>
                    </h2>
                    <p className="max-w-md text-base leading-relaxed text-[#475569]">
                        Registration certificates and compliance documents are shared
                        with buyers on request during onboarding.
                    </p>
                </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {CERTIFICATIONS.map((c, i) => (
                    <Reveal key={c} delay={i * 0.06}>
                        <div
                            data-testid={`cert-badge-${c.toLowerCase()}`}
                            className="group flex h-full flex-col items-center justify-center rounded-md border border-dashed border-[#0F172A]/20 bg-[#F8FAF9] px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-white hover:shadow-[0_16px_32px_rgb(0,0,0,0.06)]"
                        >
                            <ShieldCheck
                                size={26}
                                className="text-[#166534] transition-transform duration-300 group-hover:scale-110"
                                aria-hidden="true"
                            />
                            <span className="font-display mt-3 text-lg font-semibold tracking-wide text-[#0F172A]">
                                {c}
                            </span>
                            <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#475569]/70">
                                Badge placeholder
                            </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
