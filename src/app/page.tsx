import AboutSection from "@/components/about";
import HomeSection from "@/components/home";
import ProjectsSection from "@/components/projects";
import ResumeSection from "@/components/resume";
import SkillsSection from "@/components/skills";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
    </>
  );
}
