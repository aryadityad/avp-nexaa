import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { CONTACT, COUNTRIES } from "../data/content";
import { Chapter, Reveal, SplitChars } from "./Reveal";

const inputCls =
    "w-full rounded-md border border-[#0F172A]/10 bg-[#F8FAF9] px-4 py-3 text-sm text-[#0F172A] placeholder-[#475569]/50 transition-all duration-200 focus:border-[#166534] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40";

const INFO = [
    { icon: Phone, label: "Phone / WhatsApp", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: "Head Office", value: CONTACT.address },
];

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        country: "",
        phone: "",
        company: "",
        message: "",
    });

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        const body = [
            `Full Name: ${form.name}`,
            `Email: ${form.email}`,
            `Country: ${form.country}`,
            `Phone / WhatsApp: ${form.phone}`,
            `Company: ${form.company}`,
            "",
            form.message,
        ].join("\n");
        const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
            `Export Enquiry: ${form.name}${form.company ? ` (${form.company})` : ""}`,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
        toast.success("Your enquiry is ready in your email client, just hit send.", {
            description: "We respond to all B2B enquiries within 24 hours.",
        });
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="bg-[#0B131F] py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <Chapter number="06" label="Contact & Enquiry" light />
                            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
                                <SplitChars text="Let's talk" />{" "}
                                <SplitChars text="exports." className="text-[#D4AF37]" />
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
                                Share your product requirements, target volumes and
                                destination market, our export desk will respond with
                                specifications and pricing within 24 hours.
                            </p>
                        </Reveal>

                        <div className="mt-10 space-y-6">
                            {INFO.map((item, i) => (
                                <Reveal key={item.label} delay={i * 0.08}>
                                    <div className="flex items-start gap-4">
                                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#166534] text-white">
                                            <item.icon size={17} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    data-testid={`contact-info-${item.label.toLowerCase().replace(/[\s/]+/g, "-")}`}
                                                    className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[#D4AF37]"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="mt-1 max-w-sm text-sm font-medium leading-relaxed text-white">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={0.2}>
                            <div className="mt-10 overflow-hidden rounded-md border border-white/10">
                                <iframe
                                    title="AVP Nexaa office location, Chinchwad, Pune"
                                    src={CONTACT.mapEmbed}
                                    className="h-56 w-full grayscale-[35%]"
                                    loading="lazy"
                                    data-testid="office-map"
                                />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1}>
                        <form
                            onSubmit={submit}
                            data-testid="enquiry-form"
                            className="rounded-md bg-white p-8 shadow-2xl md:p-10"
                        >
                            <h3 className="font-display text-2xl font-medium text-[#0F172A]">
                                Send an Enquiry
                            </h3>
                            <p className="mt-1.5 text-sm text-[#334155]">
                                Fields marked * are required.
                            </p>
                            <div className="mt-7 grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="f-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0F172A]/70">
                                        Full Name *
                                    </label>
                                    <input id="f-name" data-testid="form-name" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Cooper" />
                                </div>
                                <div>
                                    <label htmlFor="f-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0F172A]/70">
                                        Email *
                                    </label>
                                    <input id="f-email" data-testid="form-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="jane@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="f-country" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0F172A]/70">
                                        Country *
                                    </label>
                                    <select id="f-country" data-testid="form-country" required value={form.country} onChange={set("country")} className={inputCls}>
                                        <option value="" disabled>
                                            Select country
                                        </option>
                                        {COUNTRIES.map((c) => (
                                            <option key={c} value={c}>
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="f-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0F172A]/70">
                                        Phone / WhatsApp *
                                    </label>
                                    <input id="f-phone" data-testid="form-phone" required value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+971 50 000 0000" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="f-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0F172A]/70">
                                        Company Name
                                    </label>
                                    <input id="f-company" data-testid="form-company" value={form.company} onChange={set("company")} className={inputCls} placeholder="Cooper Foods LLC" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="f-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0F172A]/70">
                                        Message *
                                    </label>
                                    <textarea id="f-message" data-testid="form-message" required rows={4} value={form.message} onChange={set("message")} className={inputCls} placeholder="Tell us about the products, quantities and destination port you have in mind…" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                data-testid="form-submit"
                                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#166534] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#0F4C26]"
                            >
                                Send Enquiry
                                <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                            </button>
                            <a
                                href={CONTACT.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="form-whatsapp-alt"
                                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#166534] transition-colors hover:text-[#D4AF37]"
                            >
                                <MessageCircle size={16} aria-hidden="true" />
                                Prefer WhatsApp? Message us directly
                            </a>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
