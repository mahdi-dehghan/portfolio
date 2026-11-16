import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { useAudio } from '../hooks/useAudio';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Sparkles, Globe } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onTogglePlayground?: () => void;
  isPlaygroundActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onTogglePlayground,
  isPlaygroundActive = false,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isEnabled: isAudioEnabled, toggleAudio, playClick, playHover } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    playClick();
    setMobileMenuOpen(false);
    window.location.hash = `/${sectionId}`;
  };

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Monogram & Name */}
        <a
          href="#/"
          className="brand-logo"
          onClick={() => {
            playClick();
            setMobileMenuOpen(false);
          }}
          onMouseEnter={playHover}
        >
          <div className="logo-box">
            <span className="logo-initials">MD</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">
              {language === 'fa' ? 'مهدی دهقان' : 'MEHDI DEHGHAN'}
            </span>
            <span className="brand-status">
              <span className="status-dot"></span>
              <span className="status-text-label">{t.nav.availableBadge}</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            <li>
              <button
                type="button"
                className="nav-link"
                onClick={() => handleNavClick('work')}
                onMouseEnter={playHover}
              >
                <span className="nav-num">01</span>
                {t.nav.work}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-link"
                onClick={() => handleNavClick('about')}
                onMouseEnter={playHover}
              >
                <span className="nav-num">02</span>
                {t.nav.about}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-link"
                onClick={() => handleNavClick('services')}
                onMouseEnter={playHover}
              >
                <span className="nav-num">03</span>
                {t.nav.services}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-link"
                onClick={() => handleNavClick('contact')}
                onMouseEnter={playHover}
              >
                <span className="nav-num">04</span>
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </nav>

        {/* Global Controls & Toggles */}
        <div className="header-controls">
          {/* Playground Toggle - Desktop only */}
          {onTogglePlayground && (
            <button
              type="button"
              className={`ctrl-btn playground-toggle desktop-only ${isPlaygroundActive ? 'active' : ''}`}
              onClick={() => {
                playClick();
                onTogglePlayground();
              }}
              onMouseEnter={playHover}
              title={t.nav.playground}
              aria-label={t.nav.playground}
            >
              <Sparkles size={15} />
              <span className="ctrl-label">{t.nav.playground}</span>
            </button>
          )}

          {/* Audio Feedback Toggle - Desktop only */}
          <button
            type="button"
            className={`ctrl-btn icon-only audio-toggle desktop-only ${isAudioEnabled ? 'audio-on' : ''}`}
            onClick={() => {
              toggleAudio();
              playClick();
            }}
            onMouseEnter={playHover}
            title={isAudioEnabled ? t.telemetry.soundActive : t.telemetry.soundMuted}
            aria-label="Toggle Sound"
          >
            {isAudioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Language Switcher Pill - Always visible & prioritized */}
          <button
            type="button"
            className="lang-switcher-pill"
            onClick={() => {
              playClick();
              toggleLanguage();
            }}
            onMouseEnter={playHover}
            aria-label="Switch Language / تغییر زبان"
          >
            <Globe size={13} className="lang-globe-icon" />
            <span className={`lang-opt ${language === 'en' ? 'active' : ''}`}>EN</span>
            <span className="lang-divider">/</span>
            <span className={`lang-opt ${language === 'fa' ? 'active' : ''}`}>فا</span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            className="ctrl-btn icon-only theme-toggle"
            onClick={() => {
              playClick();
              toggleTheme();
            }}
            onMouseEnter={playHover}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer frosted-glass">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            {/* Quick Language Toggle in Drawer */}
            <div className="mobile-drawer-lang-row">
              <span className="mono drawer-label">
                <Globe size={14} />
                <span>{language === 'fa' ? 'زبان / LANGUAGE' : 'LANGUAGE / زبان'}</span>
              </span>
              <button
                type="button"
                className="mobile-drawer-lang-toggle"
                onClick={() => {
                  playClick();
                  toggleLanguage();
                }}
              >
                <span className={`lang-tab ${language === 'en' ? 'active' : ''}`}>
                  English (LTR)
                </span>
                <span className="divider">/</span>
                <span className={`lang-tab ${language === 'fa' ? 'active' : ''}`}>
                  فارسی (RTL)
                </span>
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <button
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => handleNavClick('work')}
                >
                  <span className="mono">01</span>
                  <span className="link-title">{t.nav.work}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => handleNavClick('about')}
                >
                  <span className="mono">02</span>
                  <span className="link-title">{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => handleNavClick('services')}
                >
                  <span className="mono">03</span>
                  <span className="link-title">{t.nav.services}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => handleNavClick('contact')}
                >
                  <span className="mono">04</span>
                  <span className="link-title">{t.nav.contact}</span>
                </button>
              </li>
            </ul>

            {/* Mobile Drawer Action Items: Playground & Sound */}
            <div className="mobile-drawer-actions">
              {onTogglePlayground && (
                <button
                  type="button"
                  className={`mobile-action-pill ${isPlaygroundActive ? 'active' : ''}`}
                  onClick={() => {
                    playClick();
                    onTogglePlayground();
                  }}
                >
                  <Sparkles size={16} />
                  <span>{t.nav.playground}</span>
                </button>
              )}

              <button
                type="button"
                className={`mobile-action-pill ${isAudioEnabled ? 'active' : ''}`}
                onClick={() => {
                  toggleAudio();
                  playClick();
                }}
              >
                {isAudioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span>
                  {isAudioEnabled ? t.telemetry.soundActive : t.telemetry.soundMuted}
                </span>
              </button>
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-status mono">
                <span className="status-dot"></span>
                <span>{t.nav.availableBadge}</span>
              </div>
              <div className="mobile-coords mono">{t.hero.telemetryLocation}</div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
