import { useEffect } from "react";
import { Languages } from "lucide-react";

export const GoogleTranslate = () => {
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            if (document.getElementById("google-translate-element").childNodes.length) return;
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages:
                        "en,ar,fr,es,pt,de,it,nl,ru,zh-CN,zh-TW,ja,ko,hi,bn,ta,te,mr,gu,kn,ml,pa,ur,th,vi,id,ms,tr,fa,sw,pl,uk,el,he",
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
            className="flex items-center gap-1 rounded-full border border-[#0F172A]/15 px-3 py-1.5 text-[#0F172A] transition-colors duration-300 hover:border-[#166534]/50"
            data-testid="language-switcher"
        >
            <Languages size={15} strokeWidth={2} aria-hidden="true" />
            <div id="google-translate-element" />
        </div>
    );
};
