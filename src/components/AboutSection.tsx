import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Terminal, PenTool, Layout, CheckCircle2, MapPin } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  const disciplines = [
    {
      titleEn: 'Visual & Brand Strategy',
      titleFa: 'استراتژی بصری و هویت برند',
      descEn: 'Art direction, typographic hierarchies, responsive grid architecture.',
      descFa: 'کارگردانی هنری، سلسله‌مراتب تایپوگرافی، معماری شبکه‌های ریسپانسیو.',
    },
    {
      titleEn: 'Creative Frontend Engineering',
      titleFa: 'مهندسی فرانت‌اند خلاقانه',
      descEn: 'Modern React, TypeScript, Vite, CSS custom properties, canvas physics.',
      descFa: 'توسعه با ری‌اکت نوین، تایپ‌اسکریپت، ویت، ویژگی‌های مدرن CSS و فیزیک کانواس.',
    },
    {
      titleEn: 'Bilingual LTR / RTL Systems',
      titleFa: 'سیستم‌های دو زبانه LTR و RTL',
      descEn: 'Native bidirectional support, correct Persian typography and shaping.',
      descFa: 'پشتیبانی اصیل راست‌چین و چپ‌چین، شکل‌گیری صحیح و خوانایی بی‌نقص خط فارسی.',
    },
    {
      titleEn: 'E-commerce & Landing Architecture',
      titleFa: 'معماری فروشگاه و صفحات فرود',
      descEn: 'Conversion clarity, editorial product storytelling, zero-friction flows.',
      descFa: 'وضوح در جذب مشتری، روایت ادیتوریال هویت محصول و فرآیند خرید ارگونومیک.',
    },
  ];

  const tools = [
    'React 19',
    'TypeScript',
    'Vite',
    'Modern CSS',
    'HTML5 Canvas',
    'Figma',
    'Git / GitHub Actions',
    'RTL Typography',
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-index mono">
            <PenTool size={14} />
            <span>{t.about.sectionIndex}</span>
          </div>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        {/* Dual Column Composition */}
        <div className="about-grid">
          {/* Left Column: Narrative Headline & Paragraphs */}
          <div className="about-narrative-col">
            <h3 className="about-headline">{t.about.headline}</h3>

            <div className="about-text-body">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* Core Tenets Card */}
            <div className="tenets-card">
              <span className="tenets-label mono">{t.about.philosophyTitle}</span>
              <p className="tenets-body">{t.about.philosophyBody}</p>
            </div>

            {/* Studio Coordinates */}
            <div className="about-location-pill mono">
              <MapPin size={14} />
              <span>
                {t.about.locationLabel}: {language === 'fa' ? siteConfig.locationFa : siteConfig.locationEn} ({siteConfig.coordinates})
              </span>
            </div>
          </div>

          {/* Right Column: Disciplines & Technical Stack */}
          <div className="about-specs-col">
            {/* Disciplines */}
            <div className="specs-group">
              <div className="specs-group-header mono">
                <Layout size={14} />
                <span>{t.about.disciplinesTitle}</span>
              </div>

              <div className="disciplines-stack">
                {disciplines.map((item, idx) => (
                  <div key={idx} className="discipline-item">
                    <span className="discipline-num mono">0{idx + 1}</span>
                    <div className="discipline-content">
                      <h4 className="discipline-title">
                        {language === 'fa' ? item.titleFa : item.titleEn}
                      </h4>
                      <p className="discipline-desc">
                        {language === 'fa' ? item.descFa : item.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Tool Stack */}
            <div className="specs-group">
              <div className="specs-group-header mono">
                <Terminal size={14} />
                <span>{t.about.stackTitle}</span>
              </div>

              <div className="tools-pills-wrap">
                {tools.map((tool, idx) => (
                  <span key={idx} className="tool-pill mono">
                    <CheckCircle2 size={12} className="tool-check" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
