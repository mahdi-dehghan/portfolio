import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../types/project';
import { useLanguage } from '../i18n/LanguageContext';
import { useAudio } from '../hooks/useAudio';
import {
  ArrowLeft,
  ArrowRight,
  X,
  ExternalLink,
  ShieldCheck,
  Compass,
  Layers,
  Calendar,
  Maximize2,
} from 'lucide-react';
import './ProjectDetail.css';

interface ProjectDetailProps {
  project: ProjectItem;
  allProjects: ProjectItem[];
  onClose: () => void;
  onNavigateToProject: (slug: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  allProjects,
  onClose,
  onNavigateToProject,
}) => {
  const { language, t } = useLanguage();
  const { playClick, playHover } = useAudio();

  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Keyboard navigation & Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeImage]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.slug]);

  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const title = language === 'fa' ? project.titleFa : project.title;
  const category = language === 'fa' ? project.categoryFa : project.category;
  const statusLabel = language === 'fa' ? project.statusLabelFa : project.statusLabelEn;
  const summary = language === 'fa' ? project.summaryFa : project.summary;
  const creativeDirection =
    language === 'fa' ? project.creativeDirectionFa : project.creativeDirection;
  const role = language === 'fa' ? project.roleFa : project.role;
  const services = language === 'fa' ? project.servicesFa : project.services;

  return (
    <div
      className="project-detail-view fade-in"
      style={
        {
          '--project-accent': project.theme.accent,
          '--project-glow': project.theme.glow,
        } as React.CSSProperties
      }
    >
      {/* Top Floating Detail Bar */}
      <div className="detail-top-bar frosted-glass">
        <div className="detail-bar-inner">
          <button
            type="button"
            className="detail-back-btn"
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
          >
            {language === 'fa' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            <span>{t.projectDetail.backToArchive}</span>
          </button>

          <div className="detail-bar-title mono">
            <span>{project.index} // {title}</span>
          </div>

          <button
            type="button"
            className="detail-close-btn"
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            aria-label={t.projectDetail.closeModal}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <main className="detail-content-container">
        {/* Header Hero Title & Classification */}
        <header className="detail-hero-header">
          <div className="detail-meta-row">
            <span className="detail-index-badge mono">{project.index}</span>
            <span className="tag-badge lime">
              <span className="status-dot"></span>
              {statusLabel}
            </span>
            <span className="tag-badge mono">{project.year}</span>
          </div>

          <h1 className="detail-title">{title}</h1>
          <p className="detail-category mono">{category}</p>

          <div className="detail-summary-lead">
            <p>{summary}</p>
          </div>
        </header>

        {/* Primary Cover Image Showcase */}
        <div className="detail-cover-showcase">
          <div className="detail-cover-aspect">
            <img
              src={project.coverImage}
              alt={title}
              className="detail-cover-img"
              onClick={() => setActiveImage(project.coverImage)}
            />
          </div>
          <button
            type="button"
            className="zoom-hint-btn mono"
            onClick={() => setActiveImage(project.coverImage)}
          >
            <Maximize2 size={14} />
            <span>Expand Image View</span>
          </button>
        </div>

        {/* Telemetry & Spec Grid */}
        <section className="detail-spec-grid">
          <div className="spec-card">
            <div className="spec-label mono">
              <ShieldCheck size={14} />
              <span>{t.projectDetail.statusTag}</span>
            </div>
            <div className="spec-value">{statusLabel}</div>
            <div className="spec-subtext mono">{t.projectDetail.conceptDisclaimer}</div>
          </div>

          <div className="spec-card">
            <div className="spec-label mono">
              <Layers size={14} />
              <span>{t.projectDetail.role}</span>
            </div>
            <div className="spec-value">{role}</div>
            <div className="spec-tags">
              {services.map((srv, idx) => (
                <span key={idx} className="spec-pill mono">
                  {srv}
                </span>
              ))}
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-label mono">
              <Calendar size={14} />
              <span>{t.projectDetail.timeline}</span>
            </div>
            <div className="spec-value">{project.year}</div>
            <div className="spec-subtext mono">ARCHIVE ENTRY: #{project.id}</div>
          </div>
        </section>

        {/* Creative Direction & Design Decisions */}
        <section className="detail-narrative-section">
          <div className="narrative-block">
            <span className="narrative-index mono">01 // CREATIVE DIRECTION</span>
            <h2 className="narrative-heading">{t.projectDetail.directionHeadline}</h2>
            <div className="narrative-text">
              <p>{creativeDirection}</p>
            </div>
          </div>

          {project.designDecisions && project.designDecisions.length > 0 && (
            <div className="narrative-block">
              <span className="narrative-index mono">02 // ARCHITECTURAL DECISIONS</span>
              <h2 className="narrative-heading">{t.projectDetail.decisionsHeadline}</h2>
              <div className="decisions-list">
                {project.designDecisions.map((decision, idx) => (
                  <div key={idx} className="decision-item">
                    <h3 className="decision-title">
                      {language === 'fa' ? decision.titleFa : decision.title}
                    </h3>
                    <p className="decision-desc">
                      {language === 'fa' ? decision.descriptionFa : decision.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Visual Studies Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="detail-gallery-section">
            <div className="section-header">
              <div className="section-index mono">
                <Compass size={14} />
                <span>03 // VISUAL STUDIES</span>
              </div>
              <h2 className="section-title">{t.projectDetail.visualStudies}</h2>
            </div>

            <div className="gallery-masonry-grid">
              {project.gallery.map((item, idx) => (
                <figure
                  key={idx}
                  className={`gallery-item aspect-${item.aspectRatio || 'landscape'}`}
                >
                  <div
                    className="gallery-img-wrap"
                    onClick={() => setActiveImage(item.url)}
                  >
                    <img
                      src={item.url}
                      alt={language === 'fa' ? item.captionFa : item.caption}
                      loading="lazy"
                    />
                    <div className="gallery-hover-overlay">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                  <figcaption className="gallery-caption mono">
                    <span className="caption-num">FIG_{String(idx + 1).padStart(2, '0')}</span>
                    <span className="caption-text">
                      {language === 'fa' ? item.captionFa : item.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Live Project External Link if exists */}
        {project.liveUrl && (
          <div className="detail-external-link-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>{t.projectDetail.externalLink}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {/* Next / Previous Project Navigation */}
        <nav className="detail-pagination" aria-label="Project Pagination">
          <button
            type="button"
            className="pagination-btn prev"
            onClick={() => {
              playClick();
              onNavigateToProject(prevProject.slug);
            }}
            onMouseEnter={playHover}
          >
            <span className="pagination-label mono">
              {language === 'fa' ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
              {t.projectDetail.prevProject}
            </span>
            <span className="pagination-title">
              {language === 'fa' ? prevProject.titleFa : prevProject.title}
            </span>
          </button>

          <button
            type="button"
            className="pagination-btn next"
            onClick={() => {
              playClick();
              onNavigateToProject(nextProject.slug);
            }}
            onMouseEnter={playHover}
          >
            <span className="pagination-label mono">
              {t.projectDetail.nextProject}
              {language === 'fa' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </span>
            <span className="pagination-title">
              {language === 'fa' ? nextProject.titleFa : nextProject.title}
            </span>
          </button>
        </nav>
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            className="lightbox-close mono"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={activeImage}
            alt="Expanded visual study"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
