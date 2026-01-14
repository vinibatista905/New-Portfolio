import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Navbar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed top-5 right-5 z-50 flex items-center gap-3 max-sm:hidden">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
};
