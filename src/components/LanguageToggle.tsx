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
    <div
      onClick={toggleLanguage}
      className={cn(
        "max-sm:hidden",
        "w-20 h-9 rounded-full",
        "bg-primary/20",
        "relative flex items-center cursor-pointer",
        "transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      <span
        className={cn(
          "absolute top-1 left-1 w-8 h-7 rounded-full",
          "bg-primary-foreground/70 text-primary font-bold",
          "flex items-center justify-center text-sm font-bold",
          "transition-transform duration-300",
          isPt ? "translate-x-0" : "translate-x-10"
        )}
      >
        {isPt ? "PT" : "EN"}
      </span>

      <div className="absolute inset-0 flex items-center justify-between px-2 text-foreground text-xs font-semibold opacity-60">
        <span>{!isPt ? "PT" : ""}</span>
        <span>{isPt ? "EN" : ""}</span>
      </div>
    </div>
  );
};
