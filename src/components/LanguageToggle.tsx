import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "pt";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const isPt = language === "pt";

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "max-sm:hidden top-5 z-50",
        "w-20 h-9 rounded-full relative",
        "bg-primary-foreground/20",
        "transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {/* Fundo deslizante */}
      <span
        className={cn(
          "absolute top-1 left-1 w-8 h-7 rounded-full",
          "bg-primary-foreground/50",
          "transition-transform duration-300",
          isPt ? "translate-x-0" : "translate-x-10"
        )}
      />

      {/* Labels fixas */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-sm font-semibold">
        <span className={cn(isPt ? "text-primary font-bold" : "text-foreground")}>
          PT
        </span>
        <span className={cn(!isPt ? "text-primary font-bold" : "text-foreground")}>
          EN
        </span>
      </div>
    </button>
  );
};
