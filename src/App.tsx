import { useEffect, useState } from 'react';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { CustomCursor } from './components/layout/CustomCursor';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { AboutSection } from './sections/AboutSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { GitHubSection } from './sections/GitHubSection';
import { HeroSection } from './sections/HeroSection';
import { MetricsSection } from './sections/MetricsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ResumeSection } from './sections/ResumeSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <CertificationsSection />
        <GitHubSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
