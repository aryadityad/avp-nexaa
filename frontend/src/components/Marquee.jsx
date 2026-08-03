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
                <span className="font-display px-8 text-lg tracking-wide text-white/90 md:text-xl">
                    {item}
                </span>
                <img
                    src="/assets/logo-mark.png"
                    alt=""
                    loading="lazy"
                    className="h-7 w-7 rounded-full bg-white object-cover p-0.5"
                />
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
