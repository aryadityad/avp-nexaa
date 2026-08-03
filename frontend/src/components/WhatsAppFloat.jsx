import { MessageCircle } from "lucide-react";
import { CONTACT } from "../data/content";

export const WhatsAppFloat = () => (
    <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AVP Nexaa on WhatsApp"
        data-testid="whatsapp-float"
        className="group fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_36px_rgb(37,211,102,0.5)]"
    >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-0" />
        <MessageCircle size={24} className="relative" />
    </a>
);
