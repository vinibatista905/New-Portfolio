import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const isPt = i18n.language === "pt";

  return (
    <div
      onClick={toggleLanguage}
      className={cn(
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
