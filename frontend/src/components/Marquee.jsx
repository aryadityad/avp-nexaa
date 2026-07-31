import { Leaf } from "lucide-react";

const ITEMS = [
    "Organic Dehydrated Produce",
    "Premium Spices & Herbs",
    "Export-Grade Quality",
    "Direct From Certified Farms",
    "Collaborate. Connect. Grow.",
];

const Row = () => (
    <div className="flex shrink-0 items-center">
        {ITEMS.map((item, i) => (
            <span key={i} className="flex items-center">
                <span className="font-display px-8 text-lg italic tracking-wide text-white/90 md:text-xl">
                    {item}
                </span>
                <Leaf size={15} className="text-[#D4AF37]" aria-hidden="true" />
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div
        data-testid="editorial-marquee"
        className="relative overflow-hidden border-y border-[#D4AF37]/20 bg-[#0F4C26] py-5"
        aria-hidden="true"
    >
        <div className="animate-marquee flex w-max">
            <Row />
            <Row />
        </div>
    </div>
);
