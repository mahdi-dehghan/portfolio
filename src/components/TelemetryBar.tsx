import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Clock, Activity, MapPin } from 'lucide-react';
import './TelemetryBar.css';

export const TelemetryBar: React.FC = () => {
  const { t } = useLanguage();
  const [tehranTime, setTehranTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Tehran',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setTehranTime(formatted);
      } catch {
        // Fallback
        setTehranTime(new Date().toTimeString().slice(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="telemetry-bar" aria-label="System Telemetry">
      <div className="telemetry-inner">
        <div className="telemetry-segment">
          <span className="status-dot"></span>
          <span className="mono status-text">SYSTEM OPERATIONAL</span>
        </div>

        <div className="telemetry-segment">
          <Clock size={13} className="telemetry-icon" />
          <span className="mono">
            {t.telemetry.localTime} <strong className="clock-digits">{tehranTime}</strong>
          </span>
        </div>

        <div className="telemetry-segment hide-mobile">
          <MapPin size={13} className="telemetry-icon" />
          <span className="mono">{t.hero.telemetryLocation}</span>
        </div>

        <div className="telemetry-segment hide-tablet">
          <Activity size={13} className="telemetry-icon" />
          <span className="mono">{t.telemetry.precision}</span>
        </div>
      </div>
    </aside>
  );
};
