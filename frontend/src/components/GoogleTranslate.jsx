import { useEffect } from "react";
import { Languages } from "lucide-react";

export const GoogleTranslate = ({ light = false }) => {
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            if (document.getElementById("google-translate-element").childNodes.length) return;
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,ar,fr,es,zh-CN",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                },
                "google-translate-element",
            );
        };
        if (!document.getElementById("google-translate-script")) {
            const s = document.createElement("script");
            s.id = "google-translate-script";
            s.src =
                "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            s.async = true;
            document.body.appendChild(s);
        } else if (window.google && window.google.translate) {
            window.googleTranslateElementInit();
        }
    }, []);

    return (
        <div
            className={`flex items-center gap-1.5 ${light ? "text-white" : "text-[#0F172A]"}`}
            data-testid="language-switcher"
        >
            <Languages size={15} strokeWidth={2} aria-hidden="true" />
            <div id="google-translate-element" />
        </div>
    );
};
