import { skillsCategories, skillsData } from "@/data/skills";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.my")}{" "}
          <span className="text-primary">{t("skills.skills")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsCategories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category.type
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary-foreground/20"
              )}
              onClick={() => setActiveCategory(category.type)}
            >
              {t(category.name)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h2 rounded-full overflow-hidden">
                <i className={skill.icon} style={{ fontSize: "48px" }}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
