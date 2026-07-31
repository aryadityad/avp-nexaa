export const CONTACT = {
    phone: "+91 91123 74325",
    phoneHref: "tel:+919112374325",
    whatsapp: "https://wa.me/919112374325",
    email: "info@avpnexaa.com",
    address:
        "Plot No. 73, Sector 19, Koyananagar, Chinchwad, Pune – 411019, Maharashtra, India",
    mapEmbed:
        "https://maps.google.com/maps?q=Chinchwad,%20Pune,%20Maharashtra,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

export const NAV_LINKS = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
];

export const PRODUCTS = [
    {
        name: "Moringa Powder",
        slug: "moringa-powder",
        description:
            "Nutrient-dense superfood powder, export-grade and hygienically processed from premium moringa leaves.",
        image: "https://images.unsplash.com/photo-1781377012601-93162be3a433?auto=format&fit=crop&w=900&q=80",
        alt: "Vibrant green moringa powder in a wooden bowl",
    },
    {
        name: "Turmeric Powder",
        slug: "turmeric-powder",
        description:
            "High-curcumin turmeric with vibrant colour, sourced from certified Indian farms and milled to order.",
        image: "https://images.unsplash.com/photo-1594813593996-7f0d9868ce8e?auto=format&fit=crop&w=900&q=80",
        alt: "Golden turmeric powder in a glass jar, top view",
    },
    {
        name: "Amla Powder",
        slug: "amla-powder",
        description:
            "Naturally rich in Vitamin C — sun-dried and gently processed to preserve nutrition and potency.",
        image: "https://images.unsplash.com/photo-1594813592990-2449cd47da8b?auto=format&fit=crop&w=900&q=80",
        alt: "Fine amla powder in a clear glass jar",
    },
    {
        name: "Chilli Powder",
        slug: "chilli-powder",
        description:
            "Consistent heat and colour, processed to international food-safety standards for global buyers.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
        alt: "Dried red chillies and freshly ground chilli powder",
    },
];

export const CERTIFICATIONS = ["FSSAI", "APEDA", "IEC", "GST", "MSME", "ISO"];

export const COUNTRIES = [
    "United Arab Emirates",
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Spain",
    "Italy",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Vietnam",
    "Thailand",
    "Japan",
    "South Korea",
    "China",
    "Australia",
    "New Zealand",
    "Canada",
    "Mexico",
    "Brazil",
    "South Africa",
    "Kenya",
    "Egypt",
    "Turkey",
    "Russia",
    "Poland",
    "Belgium",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Ireland",
    "India",
    "Bangladesh",
    "Sri Lanka",
    "Nepal",
    "Other",
];

export const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -72, duration: 1.2 });
    } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
