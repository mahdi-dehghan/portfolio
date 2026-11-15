import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { useAudio } from '../hooks/useAudio';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
  SendHorizontal,
  Compass,
} from 'lucide-react';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { playClick, playHover } = useAudio();

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web-design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build subject and body for a seamless mailto launch
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.service} from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-index mono">
            <MessageSquare size={14} />
            <span>{t.contact.sectionIndex}</span>
          </div>
          <h2 className="section-title">{t.contact.headline}</h2>
          <p className="section-subtitle">{t.contact.subhead}</p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Direct Channels Column */}
          <div className="direct-channels-col">
            {/* Primary Email Card */}
            <div className="email-highlight-card">
              <span className="channel-eyebrow mono">{t.contact.emailLabel}</span>
              <div className="email-address-display mono">{siteConfig.email}</div>

              <div className="email-actions-row">
                <button
                  type="button"
                  className="copy-email-btn mono"
                  onClick={handleCopyEmail}
                  onMouseEnter={playHover}
                >
                  {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                  <span>{copied ? t.contact.copied : t.contact.copyEmail}</span>
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="open-client-btn mono"
                  onMouseEnter={playHover}
                >
                  <Mail size={14} />
                  <span>{t.contact.openClient}</span>
                </a>
              </div>
            </div>

            {/* Verified Network Channels */}
            <div className="social-links-grid">
              {/* Telegram */}
              <a
                href={siteConfig.socials.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-item"
                onMouseEnter={playHover}
              >
                <div className="channel-info">
                  <span className="channel-name mono">{t.contact.telegramLabel}</span>
                  <span className="channel-handle">{siteConfig.socials.telegram.handle}</span>
                </div>
                <SendHorizontal size={18} className="channel-arrow" />
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-item"
                onMouseEnter={playHover}
              >
                <div className="channel-info">
                  <span className="channel-name mono">{t.contact.linkedinLabel}</span>
                  <span className="channel-handle">mehdi-dehghan</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-item"
                onMouseEnter={playHover}
              >
                <div className="channel-info">
                  <span className="channel-name mono">GitHub Repository</span>
                  <span className="channel-handle">@Mehdii-dehghanm</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>
            </div>

            {/* Location Coordinates */}
            <div className="contact-coords-card mono">
              <Compass size={16} />
              <span>
                {t.contact.locationLabel}:{' '}
                {language === 'fa' ? siteConfig.locationFa : siteConfig.locationEn}
                <br />
                {siteConfig.coordinates} // {siteConfig.timezone}
              </span>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="inquiry-form-col">
            <div className="inquiry-form-card">
              <h3 className="form-title">{t.contact.form.title}</h3>

              {submitted ? (
                <div className="form-success-box fade-in">
                  <Check size={28} className="success-icon" />
                  <p className="success-msg">{t.contact.form.successMsg}</p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="mono">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="mono">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder={t.contact.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-service" className="mono">
                      {t.contact.form.serviceLabel}
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="form-select"
                    >
                      <option value="Web Design">Web Design & Editorial</option>
                      <option value="Creative Development">Creative Development</option>
                      <option value="E-commerce Experience">E-commerce Experience</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Custom Collaborative Project">
                        Custom Collaborative Project
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="mono">
                      {t.contact.form.messageLabel} *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    onMouseEnter={playHover}
                  >
                    <span>{t.contact.form.submitBtn}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
