import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { WhyChoose } from "./components/WhyChoose";
import { Products } from "./components/Products";
import { Certifications } from "./components/Certifications";
import { GlobalReach } from "./components/GlobalReach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) return;
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        window.__lenis = lenis;
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#F8FAF9]">
            <Header />
            <main>
                <Hero />
                <Marquee />
                <About />
                <WhyChoose />
                <Products />
                <Certifications />
                <GlobalReach />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloat />
            <Toaster position="top-center" richColors />
        </div>
    );
}

export default App;
