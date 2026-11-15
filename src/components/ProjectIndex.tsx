import React, { useState, useMemo } from 'react';
import { ProjectItem } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../i18n/LanguageContext';
import { useAudio } from '../hooks/useAudio';
import { Info, Sparkles } from 'lucide-react';
import './ProjectIndex.css';

interface ProjectIndexProps {
  projects: ProjectItem[];
  onSelectProject: (slug: string) => void;
}

type FilterType = 'all' | 'concepts' | 'experiments';

export const ProjectIndex: React.FC<ProjectIndexProps> = ({
  projects,
  onSelectProject,
}) => {
  const { t } = useLanguage();
  const { playClick } = useAudio();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'concepts') {
      return projects.filter((p) => p.status === 'concept');
    }
    if (filter === 'experiments') {
      return projects.filter((p) => p.status === 'experiment' || p.status === 'in-development');
    }
    return projects;
  }, [projects, filter]);

  const handleFilterChange = (newFilter: FilterType) => {
    playClick();
    setFilter(newFilter);
  };

  // Group into rhythmic editorial tiers when showing 'all'
  const heroProject = filter === 'all' ? filteredProjects[0] : null;
  const splitProjects = filter === 'all' ? filteredProjects.slice(1, 3) : [];
  const standardProjects = filter === 'all' ? filteredProjects.slice(3) : filteredProjects;

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-index mono">
            <Sparkles size={14} className="index-icon" />
            <span>{t.work.sectionIndex}</span>
          </div>
          <h2 className="section-title">{t.work.title}</h2>
          <p className="section-subtitle">{t.work.subtitle}</p>

          {/* Honest Disclosure Banner */}
          <div className="honest-disclosure-banner">
            <Info size={16} className="disclosure-icon" />
            <span className="disclosure-text">{t.work.statusNotice}</span>
          </div>

          {/* Filter Pills */}
          <div className="work-filter-bar">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              <span>{t.work.filterAll}</span>
              <span className="filter-count mono">({projects.length})</span>
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'concepts' ? 'active' : ''}`}
              onClick={() => handleFilterChange('concepts')}
            >
              <span>{t.work.filterConcepts}</span>
              <span className="filter-count mono">
                ({projects.filter((p) => p.status === 'concept').length})
              </span>
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'experiments' ? 'active' : ''}`}
              onClick={() => handleFilterChange('experiments')}
            >
              <span>{t.work.filterExperiments}</span>
              <span className="filter-count mono">
                (
                {
                  projects.filter(
                    (p) => p.status === 'experiment' || p.status === 'in-development'
                  ).length
                }
                )
              </span>
            </button>
          </div>
        </div>

        {/* Editorial Work Grid */}
        <div className="editorial-archive-grid">
          {/* Tier 1: Hero Showcase */}
          {heroProject && (
            <div className="grid-hero-tier">
              <ProjectCard
                project={heroProject}
                layoutVariant="hero"
                onSelect={onSelectProject}
              />
            </div>
          )}

          {/* Tier 2: Asymmetric Split */}
          {splitProjects.length > 0 && (
            <div className="grid-split-tier">
              {splitProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  layoutVariant="split"
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          )}

          {/* Tier 3: Compact / Column Grid */}
          {standardProjects.length > 0 && (
            <div className="grid-compact-tier">
              {standardProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  layoutVariant="compact"
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
