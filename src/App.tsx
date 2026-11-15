import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useHashRoute } from './hooks/useHashRoute';
import { projectsData } from './data/projects';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TelemetryBar } from './components/TelemetryBar';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ProjectIndex } from './components/ProjectIndex';
import { ProjectDetail } from './components/ProjectDetail';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Global Styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/typography.css';
import './styles/animations.css';

const MainApp: React.FC = () => {
  const { isDetailOpen, currentSlug, navigateToProject, navigateToHome } = useHashRoute();
  const [showPlayground, setShowPlayground] = useState(true);

  const activeProject = currentSlug
    ? projectsData.find((p) => p.slug === currentSlug)
    : null;

  const scrollToSection = (id: string) => {
    if (isDetailOpen) {
      navigateToHome(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="site-canvas">
      {/* Top Fixed Header */}
      <Header
        onTogglePlayground={() => setShowPlayground((prev) => !prev)}
        isPlaygroundActive={showPlayground}
      />

      {/* Conditional: Dedicated Project Detail View or Homepage */}
      {isDetailOpen && activeProject ? (
        <ProjectDetail
          project={activeProject}
          allProjects={projectsData}
          onClose={() => navigateToHome('work')}
          onNavigateToProject={(slug) => navigateToProject(slug)}
        />
      ) : (
        <main id="main-content" tabIndex={-1}>
          {/* Scene A: Opening Composition */}
          <Hero
            onExploreWork={() => scrollToSection('work')}
            onContactClick={() => scrollToSection('contact')}
            onOpenPlayground={() => scrollToSection('playground')}
          />

          {/* Telemetry Bar */}
          <TelemetryBar />

          {/* Signature Feature: Digital Playground */}
          {showPlayground && <InteractivePlayground />}

          {/* Scene B: Selected Work Archive */}
          <ProjectIndex
            projects={projectsData}
            onSelectProject={(slug) => navigateToProject(slug)}
          />

          {/* Scene C: About Practice */}
          <AboutSection />

          {/* Scene D: Core Services */}
          <ServicesSection />

          {/* Scene E: Contact & Invitation */}
          <ContactSection />
        </main>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

export default App;
