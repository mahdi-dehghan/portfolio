import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useAudio } from '../hooks/useAudio';
import { ArrowDownRight, Compass, Terminal, Sparkles } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
  onOpenPlayground: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onContactClick,
  onOpenPlayground,
}) => {
  const { language, t } = useLanguage();
  const { playClick, playHover } = useAudio();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-container">
        {/* Top Telemetry Header */}
        <div className="hero-telemetry-row">
          <div className="telemetry-badge mono">
            <span className="status-dot"></span>
            <span>{t.hero.eyebrow}</span>
          </div>

          <div className="telemetry-coords mono">
            <Compass size={13} className="telemetry-icon" />
            <span>{t.hero.telemetryLocation}</span>
          </div>

          <div className="telemetry-stack mono">
            <Terminal size={13} className="telemetry-icon" />
            <span>{t.hero.telemetrySystem}</span>
          </div>
        </div>

        {/* Main Typographic Monument */}
        <div
          className="hero-monument"
          style={{
            transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
          }}
        >
          {language === 'en' ? (
            <div className="monument-en">
              <div className="monument-row row-1">
                <span className="monument-lettering">MEHDI</span>
                <span className="monument-inline-badge mono">
                  <span className="badge-slash">//</span> DESIGNER
                </span>
              </div>
              <div className="monument-row row-2">
                <span className="monument-pill">
                  <span className="pill-dot"></span>
                  CREATIVE DEV
                </span>
                <span className="monument-lettering outline-text">DEHGHAN</span>
              </div>
            </div>
          ) : (
            <div className="monument-fa">
              <div className="monument-row-fa">
                <span className="monument-lettering-fa">مهدی دهقان</span>
                <span className="monument-pill-fa mono">
                  <span className="pill-dot"></span>
                  طراح و توسعه‌دهنده خلاق
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Brand Statement & Narrative Grid */}
        <div className="hero-narrative-grid">
          <div className="statement-column">
            <h1 className="hero-statement">{t.hero.statement}</h1>
            <p className="hero-supporting">{t.hero.supporting}</p>
          </div>

          <div className="action-column">
            <div className="hero-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  playClick();
                  onExploreWork();
                }}
                onMouseEnter={playHover}
              >
                <span>{t.hero.exploreArchive}</span>
                <ArrowDownRight size={18} className="btn-icon" />
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  playClick();
                  onContactClick();
                }}
                onMouseEnter={playHover}
              >
                <span>{t.hero.contactCta}</span>
              </button>

              <button
                type="button"
                className="btn-tertiary"
                onClick={() => {
                  playClick();
                  onOpenPlayground();
                }}
                onMouseEnter={playHover}
              >
                <Sparkles size={15} />
                <span>{t.nav.playground}</span>
              </button>
            </div>

            {/* Micro annotations */}
            <div className="hero-micro-meta mono">
              <span className="meta-item">
                <span className="meta-label">DISCIPLINES:</span> WEB DESIGN · CREATIVE DEV · E-COMMERCE
              </span>
              <span className="meta-item">
                <span className="meta-label">FOCUS:</span> HIGH PERFORMANCE · CONTEMPORARY EDITORIAL
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="hero-footer-row">
          <a
            href="#work"
            className="scroll-indicator"
            onClick={(e) => {
              e.preventDefault();
              playClick();
              onExploreWork();
            }}
          >
            <span className="scroll-line"></span>
            <span className="mono scroll-text">{t.hero.scrollHint}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
