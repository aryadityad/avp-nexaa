import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const LANG_NAMES = {
    en: "English", ar: "العربية", fr: "Français", es: "Español", pt: "Português",
    de: "Deutsch", it: "Italiano", nl: "Nederlands", ru: "Русский",
    "zh-CN": "中文(简体)", "zh-TW": "中文(繁體)", ja: "日本語", ko: "한국어",
    hi: "हिन्दी", bn: "বাংলা", ta: "தமிழ்", te: "తెలుగు", mr: "मराठी",
    gu: "ગુજરાતી", kn: "ಕನ್ನಡ", ml: "മലയാളം", pa: "ਪੰਜਾਬੀ", ur: "اردو",
    th: "ไทย", vi: "Tiếng Việt", id: "Bahasa Indonesia", ms: "Bahasa Melayu",
    tr: "Türkçe", fa: "فارسی", sw: "Kiswahili", pl: "Polski", uk: "Українська",
    el: "Ελληνικά", he: "עברית",
};

export const GoogleTranslate = () => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const m = document.cookie.match(/googtrans=\/en\/([a-z]{2}(?:-[A-Z]{2})?)/);
        if (m) setLang(m[1]);
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
            className="relative flex items-center gap-2 rounded-full border border-[#0F172A]/15 px-3.5 py-1.5 text-[#0F172A] transition-colors duration-300 hover:border-[#166534]/50"
            data-testid="language-switcher"
        >
            <span className="text-sm font-medium">{LANG_NAMES[lang] || "English"}</span>
            <Globe size={15} strokeWidth={2} className="text-[#0CA56F]" aria-hidden="true" />
            <div id="google-translate-element" />
        </div>
    );
};
