export const CONTACT = {
    phone: "+91 91123 74325",
    phoneHref: "tel:+919112374325",
    whatsapp: "https://wa.me/919112374325",
    email: "info@avpnexaa.com",
    address:
        "Plot No. 73, Vitthal Nagar, Sector 19, Koyana Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019, India",
    mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d472.4888673899328!2d73.7970875!3d18.6679921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b735af95db6b%3A0x775923a01d710733!2sAVP%20Nexaa!5e0!3m2!1sen!2sin!4v1785780795143!5m2!1sen!2sin",
};

export const NAV_LINKS = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
];

export const PRODUCT_CATEGORIES = [
    {
        slug: "dehydrated-products-spices",
        name: "Dehydrated Products & Spices",
        products: [
            {
                name: "Moringa Powder",
                slug: "moringa-powder",
                scientific: "Moringa oleifera",
                description:
                    "Nutrient dense superfood powder, export grade and hygienically processed from premium moringa leaves.",
                longDescription:
                    "Our moringa powder is produced from hand selected moringa leaves, shade dried and milled under strict hygiene protocols to retain colour, aroma and nutritional density. A versatile superfood ingredient for nutraceutical, food and wellness applications worldwide.",
                image: "https://images.unsplash.com/photo-1781377012601-93162be3a433?auto=format&fit=crop&w=900&q=80",
                alt: "Vibrant green moringa powder in a wooden bowl",
            },
            {
                name: "Turmeric Powder",
                slug: "turmeric-powder",
                scientific: "Curcuma longa",
                description:
                    "High curcumin turmeric with vibrant colour, sourced from certified Indian farms and milled to order.",
                longDescription:
                    "Sourced from certified farms across India's premier turmeric belts, our turmeric powder offers high curcumin content and a deep, vibrant colour. Every batch is cleaned, dried and milled to order for maximum freshness in food, beverage and supplement formulations.",
                image: "https://images.unsplash.com/photo-1594813593996-7f0d9868ce8e?auto=format&fit=crop&w=900&q=80",
                alt: "Golden turmeric powder in a glass jar, top view",
            },
            {
                name: "Amla Powder",
                slug: "amla-powder",
                scientific: "Phyllanthus emblica",
                description:
                    "Naturally rich in Vitamin C, sun dried and gently processed to preserve nutrition and potency.",
                longDescription:
                    "Made from carefully graded Indian gooseberries, our amla powder is sun dried and gently processed to preserve its naturally high Vitamin C content and potency. Ideal for health foods, ayurvedic formulations and personal care applications.",
                image: "https://images.unsplash.com/photo-1594813592990-2449cd47da8b?auto=format&fit=crop&w=900&q=80",
                alt: "Fine amla powder in a clear glass jar",
            },
            {
                name: "Chilli Powder",
                slug: "chilli-powder",
                scientific: "Capsicum annuum",
                description:
                    "Consistent heat and colour, processed to international food safety standards for global buyers.",
                longDescription:
                    "Ground from stemless, sun dried red chillies, our chilli powder delivers consistent heat and brilliant colour batch after batch. Processed and packed to international food safety standards for retail, food service and industrial buyers.",
                image: "/assets/products/chilli-powder.jpg",
                alt: "Freshly ground red chilli powder",
            },
        ],
    },
];

export const PRODUCTS = PRODUCT_CATEGORIES.flatMap((c) => c.products);

export const SERVED_COUNTRIES = [
    { name: "USA", code: "us" },
    { name: "UK", code: "gb" },
    { name: "UAE", code: "ae" },
    { name: "Iraq", code: "iq" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Malaysia", code: "my" },
];

export const CERTIFICATIONS = [
    { name: "FSSAI", img: "/assets/certs/fssai.png" },
    { name: "APEDA", img: "/assets/certs/apeda.png" },
    { name: "IEC", img: "/assets/certs/iec.webp" },
    { name: "GST", img: "/assets/certs/gst.jpg" },
    { name: "MSME", img: "/assets/certs/msme.png" },
    { name: "ISO", img: "/assets/certs/iso.png" },
];

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
