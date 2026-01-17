import { StarBackground } from "@/components/StarBackground";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">
      <StarBackground />

      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {t("notFound.pageNotFound")}
        </h1>

        <button className="cosmic-button cursor-pointer" onClick={() => navigate("/")}>
          {t("notFound.goBack")}
        </button>
      </div>
    </div>
  );
};
