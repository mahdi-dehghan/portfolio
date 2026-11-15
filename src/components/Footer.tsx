import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { useAudio } from '../hooks/useAudio';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { playClick, playHover } = useAudio();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Top Tier: Giant Brand Statement */}
        <div className="footer-hero-tier">
          <div className="footer-statement-group">
            <span className="footer-manifesto-eyebrow mono">DESIGN PHILOSOPHY // 2026</span>
            <div className="footer-huge-tagline font-display">{t.footer.tagline}</div>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            onMouseEnter={playHover}
            aria-label={t.footer.backToTop}
          >
            <ArrowUp size={20} />
            <span className="mono">{t.footer.backToTop}</span>
          </button>
        </div>

        {/* Middle Tier: Navigation & Channels */}
        <div className="footer-links-grid">
          {/* Identity Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title font-display">
              {language === 'fa' ? siteConfig.nameFa : siteConfig.name}
            </div>
            <p className="footer-brand-desc">
              {language === 'fa' ? siteConfig.statementFa : siteConfig.statementEn}
            </p>
            <div className="footer-coords mono">
              {language === 'fa' ? siteConfig.locationFa : siteConfig.locationEn}
              <br />
              {siteConfig.coordinates}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <span className="footer-col-title mono">INDEX //</span>
            <ul className="footer-nav-list">
              <li>
                <a href="#work" onMouseEnter={playHover}>
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#about" onMouseEnter={playHover}>
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" onMouseEnter={playHover}>
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#contact" onMouseEnter={playHover}>
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <a href="#playground" onMouseEnter={playHover}>
                  {t.nav.playground}
                </a>
              </li>
            </ul>
          </div>

          {/* Network Column */}
          <div className="footer-col">
            <span className="footer-col-title mono">CHANNELS //</span>
            <ul className="footer-nav-list">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  className="footer-external-link"
                >
                  <span>Email</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  className="footer-external-link"
                >
                  <span>Telegram</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  className="footer-external-link"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  className="footer-external-link"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Locale & Specs Column */}
          <div className="footer-col">
            <span className="footer-col-title mono">LOCALE &amp; SYSTEM //</span>
            <div className="footer-locale-box">
              <button
                type="button"
                className="footer-lang-pill mono"
                onClick={() => {
                  playClick();
                  toggleLanguage();
                }}
              >
                <span>CURRENT: {language === 'en' ? 'ENGLISH (LTR)' : 'فارسی (RTL)'}</span>
              </button>
              <div className="footer-sys-info mono">
                DEPLOYMENT: GITHUB PAGES
                <br />
                STACK: REACT 19 + VITE + TS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="footer-bottom-row mono">
          <div className="footer-copyright">
            © {currentYear} {siteConfig.name}. {t.footer.rights}
          </div>

          <div className="footer-attribution">{t.footer.designedWith}</div>
        </div>
      </div>
    </footer>
  );
};
