import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { useAudio } from '../hooks/useAudio';
import { RotateCcw, Activity, Move, Grid } from 'lucide-react';
import './InteractivePlayground.css';

interface NodePoint {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

type PlaygroundMode = 'kinetic' | 'drag' | 'matrix';

export const InteractivePlayground: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const { playClick } = useAudio();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mode, setMode] = useState<PlaygroundMode>('kinetic');
  const [nodeCount, setNodeCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Interaction refs
  const nodesRef = useRef<NodePoint[]>([]);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean; activeIndex: number | null }>({
    x: -1000,
    y: -1000,
    isDown: false,
    activeIndex: null,
  });
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Initialize nodes based on canvas dimensions
  const initNodes = useCallback(
    (width: number, height: number) => {
      const nodes: NodePoint[] = [];
      const cols = Math.max(8, Math.floor(width / 75));
      const rows = Math.max(5, Math.floor(height / 75));
      const gapX = width / (cols + 1);
      const gapY = height / (rows + 1);

      for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
          const originX = c * gapX;
          const originY = r * gapY;
          nodes.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            radius: (c + r) % 3 === 0 ? 3.5 : 2.5,
            color: (c + r) % 5 === 0 ? '#C6F36A' : isDark ? '#4A4D46' : '#C2BEB2',
          });
        }
      }

      nodesRef.current = nodes;
      setNodeCount(nodes.length);
    },
    [isDark]
  );

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = container.clientWidth;
      const height = Math.min(420, Math.max(300, width * 0.38));

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      initNodes(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initNodes]);

  // Pause when off-screen to save 100% CPU
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Main Animation Loop
  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;

      const width = parseFloat(canvas.style.width) || canvas.width;
      const height = parseFloat(canvas.style.height) || canvas.height;
      timeRef.current += 0.02;

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      const spring = 0.06;
      const friction = 0.88;
      const mouseDistThreshold = 130;

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Kinetic wave ripple when in kinetic mode
        if (mode === 'kinetic') {
          const wave = Math.sin(timeRef.current + node.originX * 0.008 + node.originY * 0.008) * 8;
          node.vy += (wave + node.originY - node.y) * 0.02;
        }

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDistThreshold) {
          const force = (1 - dist / mouseDistThreshold) * 12;
          const angle = Math.atan2(dy, dx);
          node.vx -= Math.cos(angle) * force * 0.35;
          node.vy -= Math.sin(angle) * force * 0.35;
        }

        // Dragging specific node
        if (mouse.isDown && mouse.activeIndex === i) {
          node.x = mouse.x;
          node.y = mouse.y;
          node.vx = 0;
          node.vy = 0;
        } else {
          // Return to origin spring
          const homeDx = node.originX - node.x;
          const homeDy = node.originY - node.y;

          node.vx += homeDx * spring;
          node.vy += homeDy * spring;

          node.vx *= friction;
          node.vy *= friction;

          node.x += node.vx;
          node.y += node.vy;
        }
      }

      // Draw connections
      ctx.lineWidth = 0.75;
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(32, 33, 31, 0.06)';
      const accentLineColor = isDark ? 'rgba(210, 255, 112, 0.25)' : 'rgba(198, 243, 106, 0.35)';

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.beginPath();
            ctx.strokeStyle = dist < 50 ? accentLineColor : lineColor;
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes & telemetry annotations if in matrix mode
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        if (mode === 'matrix' && i % 4 === 0) {
          ctx.font = '8px monospace';
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(32, 33, 31, 0.3)';
          ctx.fillText(`Δ${Math.round(node.x - node.originX)}`, node.x + 6, node.y - 4);
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      running = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isVisible, mode, isDark]);

  // Mouse / Touch Event Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleMouseDown = () => {
    mouseRef.current.isDown = true;
    const nodes = nodesRef.current;
    let closestIndex: number | null = null;
    let closestDist = 40;

    for (let i = 0; i < nodes.length; i++) {
      const dx = mouseRef.current.x - nodes[i].x;
      const dy = mouseRef.current.y - nodes[i].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    }
    mouseRef.current.activeIndex = closestIndex;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
    mouseRef.current.activeIndex = null;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    mouseRef.current.isDown = false;
    mouseRef.current.activeIndex = null;
  };

  const resetField = () => {
    playClick();
    nodesRef.current.forEach((n) => {
      n.x = n.originX;
      n.y = n.originY;
      n.vx = 0;
      n.vy = 0;
    });
  };

  return (
    <section className="playground-section" id="playground" ref={containerRef}>
      <div className="playground-header">
        <div className="playground-title-area">
          <span className="mono eyebrow">LAB // EXPERIMENT_00</span>
          <h2 className="playground-heading">{t.playground.title}</h2>
          <p className="playground-desc">{t.playground.subtitle}</p>
        </div>

        {/* Toolbar Controls */}
        <div className="playground-toolbar">
          <div className="mode-toggle-group">
            <button
              type="button"
              className={`mode-btn ${mode === 'kinetic' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                setMode('kinetic');
              }}
            >
              <Activity size={13} />
              <span>{t.playground.modePhysics}</span>
            </button>
            <button
              type="button"
              className={`mode-btn ${mode === 'drag' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                setMode('drag');
              }}
            >
              <Move size={13} />
              <span>{t.playground.modeInteractive}</span>
            </button>
            <button
              type="button"
              className={`mode-btn ${mode === 'matrix' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                setMode('matrix');
              }}
            >
              <Grid size={13} />
              <span>{t.playground.modeGrid}</span>
            </button>
          </div>

          <button type="button" className="reset-btn" onClick={resetField} title="Reset">
            <RotateCcw size={14} />
            <span>{t.playground.reset}</span>
          </button>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="interactive-canvas"
        />

        {/* Floating Telemetry Badge */}
        <div className="canvas-telemetry-badge mono">
          <span className="status-dot"></span>
          <span>
            {nodeCount} {t.playground.activeNodes} // 60 FPS // SPRING_KINETICS
          </span>
        </div>

        <div className="canvas-instructions mono">{t.playground.instructions}</div>
      </div>
    </section>
  );
};
