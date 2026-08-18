import { useEffect, useRef } from "react";

const ITEMS = [
    "Organic Dehydrated Products",
    "Premium Spices & Herbs",
    "Export Grade Quality",
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
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
                    <img
                        src="/assets/logo-mark.png"
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-contain"
                    />
                </span>
            </span>
        ))}
    </div>
);

export const Marquee = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        const wrap = track.parentElement;
        let raf;
        let x = 0;
        let paused = false;
        let last = performance.now();
        const SPEED = 45;

        const step = (t) => {
            const dt = Math.min((t - last) / 1000, 0.1);
            last = t;
            if (!paused) {
                x -= SPEED * dt;
                const half = track.scrollWidth / 2;
                if (half > 0 && -x >= half) x += half;
                track.style.transform = `translate3d(${x}px, 0, 0)`;
            }
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);

        const onEnter = () => (paused = true);
        const onLeave = () => (paused = false);
        wrap.addEventListener("mouseenter", onEnter);
        wrap.addEventListener("mouseleave", onLeave);
        return () => {
            cancelAnimationFrame(raf);
            wrap.removeEventListener("mouseenter", onEnter);
            wrap.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <div
            data-testid="editorial-marquee"
            className="relative overflow-hidden border-y border-[#D4AF37]/20 bg-[#0F4C26] py-5"
        >
            <div ref={trackRef} className="flex w-max" style={{ willChange: "transform" }}>
                <Row />
                <Row />
            </div>
        </div>
    );
};
