"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function PortfolioApp() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
