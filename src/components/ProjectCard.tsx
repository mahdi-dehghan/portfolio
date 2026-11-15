import React from 'react';
import { ProjectItem } from '../types/project';
import { useLanguage } from '../i18n/LanguageContext';
import { useAudio } from '../hooks/useAudio';
import { ArrowUpRight, Layers } from 'lucide-react';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
  layoutVariant?: 'hero' | 'split' | 'compact';
  onSelect: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layoutVariant = 'compact',
  onSelect,
}) => {
  const { language, t } = useLanguage();
  const { playClick, playHover } = useAudio();

  const title = language === 'fa' ? project.titleFa : project.title;
  const category = language === 'fa' ? project.categoryFa : project.category;
  const statusLabel = language === 'fa' ? project.statusLabelFa : project.statusLabelEn;
  const summary = language === 'fa' ? project.summaryFa : project.summary;
  const services = language === 'fa' ? project.servicesFa : project.services;

  const handleClick = () => {
    playClick();
    onSelect(project.slug);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className={`project-card card-${layoutVariant} status-${project.status}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={playHover}
      tabIndex={0}
      role="button"
      aria-label={`${title} - ${category}`}
      style={
        {
          '--project-accent': project.theme.accent,
          '--project-glow': project.theme.glow,
        } as React.CSSProperties
      }
    >
      {/* Visual Image Media Container */}
      <div className="card-media-wrap">
        <div className="card-image-aspect">
          <img
            src={project.coverImage}
            alt={title}
            loading="lazy"
            className="card-cover-image"
          />
        </div>

        {/* Ambient Glow */}
        <div className="card-ambient-glow" aria-hidden="true" />

        {/* Floating Corner Index */}
        <div className="card-top-badges">
          <span className="card-number mono">{project.index}</span>
          <span className={`card-status-badge mono ${project.status === 'experiment' ? 'lime' : ''}`}>
            <span className="status-dot"></span>
            {statusLabel}
          </span>
        </div>

        {/* Quick Action Overlay */}
        <div className="card-action-overlay">
          <span className="action-pill">
            <span>{t.work.viewProject}</span>
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>

      {/* Content & Metadata */}
      <div className="card-content">
        <div className="card-header-meta">
          <span className="card-category mono">{category}</span>
          <span className="card-year mono">{project.year}</span>
        </div>

        <h3 className="card-title">
          <span>{title}</span>
          <ArrowUpRight size={20} className="card-title-arrow" />
        </h3>

        <p className="card-summary">{summary}</p>

        {/* Services & Role Tags */}
        <div className="card-footer-tags">
          <div className="card-services-list">
            {services.slice(0, 3).map((srv, idx) => (
              <span key={idx} className="card-tag mono">
                {srv}
              </span>
            ))}
          </div>

          <div className="card-role mono">
            <Layers size={12} />
            <span>{language === 'fa' ? project.roleFa : project.role}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
