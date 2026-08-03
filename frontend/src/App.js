import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { WhyOrganic } from "./components/WhyOrganic";
import { WhyChoose } from "./components/WhyChoose";
import { Products } from "./components/Products";
import { Certifications } from "./components/Certifications";
import { GlobalReach } from "./components/GlobalReach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { CustomCursor } from "./components/CustomCursor";
import { ProductPage } from "./components/ProductPage";
import { scrollToId } from "./data/content";

const Home = () => (
    <main>
        <Hero />
        <Marquee />
        <About />
        <WhyOrganic />
        <WhyChoose />
        <Products />
        <Certifications />
        <GlobalReach />
        <Contact />
    </main>
);

function Shell() {
    const location = useLocation();

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

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const id = location.state.scrollTo;
            const t = setTimeout(() => scrollToId(id), 200);
            window.history.replaceState({}, "");
            return () => clearTimeout(t);
        }
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-[#F8FAF9]">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:slug" element={<ProductPage />} />
            </Routes>
            <Footer />
            <WhatsAppFloat />
            <CustomCursor />
            <Toaster position="top-center" richColors />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Shell />
        </BrowserRouter>
    );
}

export default App;
