import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useAudio } from '../hooks/useAudio';
import { Layers, ChevronDown, CheckCircle2 } from 'lucide-react';
import './ServicesSection.css';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const { playClick, playHover } = useAudio();

  // Accordion / Expanded state: defaults to index 0 open
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleService = (idx: number) => {
    playClick();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-index mono">
            <Layers size={14} />
            <span>{t.services.sectionIndex}</span>
          </div>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        {/* Editorial Numbered Service List */}
        <div className="services-editorial-list">
          {t.services.items.map((service, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`service-row ${isOpen ? 'is-open' : ''}`}
                onMouseEnter={playHover}
              >
                <button
                  type="button"
                  className="service-trigger"
                  onClick={() => toggleService(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="service-number mono">{service.number}</div>

                  <div className="service-headline-group">
                    <h3 className="service-title">{service.title}</h3>
                    <span className="service-subhead mono">{service.subtitle}</span>
                  </div>

                  <div className="service-icon-wrap">
                    <ChevronDown size={20} className="service-chevron" />
                  </div>
                </button>

                {isOpen && (
                  <div className="service-expanded-body fade-in">
                    <div className="service-expanded-inner">
                      <p className="service-description">{service.description}</p>

                      <div className="service-deliverables">
                        <span className="deliverables-heading mono">KEY DELIVERABLES //</span>
                        <ul className="deliverables-grid">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="deliverable-item mono">
                              <CheckCircle2 size={13} className="deliverable-check" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
