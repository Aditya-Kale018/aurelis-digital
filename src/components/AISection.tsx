import { motion } from 'motion/react';
import { AppLink } from './AppLink';
import { Reveal } from './Motion';

// ─── Easing ────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;

// ─── SVG Icons ─────────────────────────────────────────────────────────────
function IconBrief() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  );
}

function IconGenerate() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}

function IconReview() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5C7.2 5 3.4 8.4 2.1 11.6a1 1 0 0 0 0 .8C3.4 15.6 7.2 19 12 19s8.6-3.4 9.9-6.6a1 1 0 0 0 0-.8C20.6 8.4 16.8 5 12 5Z" />
    </svg>
  );
}

function IconShip() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9l20-7z" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.2" />
      <circle cx="24" cy="8"  r="3" />
      <circle cx="24" cy="40" r="3" />
      <circle cx="8"  cy="24" r="3" />
      <circle cx="40" cy="24" r="3" />
      <line x1="24" y1="20" x2="24" y2="11" />
      <line x1="24" y1="28" x2="24" y2="37" />
      <line x1="20" y1="24" x2="11" y2="24" />
      <line x1="28" y1="24" x2="37" y2="24" />
      <circle cx="38" cy="10" r="2.5" />
      <circle cx="10" cy="38" r="2.5" />
      <line x1="26.5" y1="21.5" x2="35.8" y2="11.8" />
      <line x1="21.5" y1="26.5" x2="12.2" y2="36.2" />
    </svg>
  );
}

function IconAgent() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconPredict() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a9 9 0 1 0 9 9" />
      <path d="M12 6v6l4 2" />
      <circle cx="19" cy="6" r="3" fill="currentColor" fillOpacity="0.3" />
      <path d="M17 6h4M19 4v4" />
    </svg>
  );
}

// ─── Workflow card data ─────────────────────────────────────────────────────
const WORKFLOW_NODES = [
  { id: 'brief',    label: 'Brief',    Icon: IconBrief,    pos: 'top' },
  { id: 'generate', label: 'Generate', Icon: IconGenerate, pos: 'left' },
  { id: 'review',   label: 'Review',   Icon: IconReview,   pos: 'right' },
  { id: 'ship',     label: 'Ship',     Icon: IconShip,     pos: 'bottom' },
] as const;

// ─── Metrics data ───────────────────────────────────────────────────────────
const METRICS = [
  { value: '10×',  label: 'Faster Output' },
  { value: '99%',  label: 'Consistency' },
  { value: '24/7', label: 'Autonomous' },
  { value: '100%', label: 'On Brand' },
];

// ─── AI Workflow Visualization ───────────────────────────────────────────────
function AIWorkflow() {
  return (
    <div className="ai-workflow-root">
      {/* Subtle background rings */}
      <div className="ai-ring ai-ring-lg" />
      <div className="ai-ring ai-ring-md" />

      {/* Dotted grid corner accent */}
      <div className="ai-dot-grid" />

      {/* Top card — Brief: wrapper handles CSS position; inner div handles motion */}
      <div className="ai-wf-pos ai-wf-top">
        <motion.div
          className="ai-wf-card"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 28px -6px rgba(13,27,53,0.14)' }}
        >
          <div className="ai-wf-icon"><IconBrief /></div>
          <span className="ai-wf-label">BRIEF</span>
        </motion.div>
      </div>

      {/* Left card — Generate */}
      <div className="ai-wf-pos ai-wf-left">
        <motion.div
          className="ai-wf-card"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 28px -6px rgba(13,27,53,0.14)' }}
        >
          <div className="ai-wf-icon"><IconGenerate /></div>
          <span className="ai-wf-label">GENERATE</span>
        </motion.div>
      </div>

      {/* Right card — Review */}
      <div className="ai-wf-pos ai-wf-right">
        <motion.div
          className="ai-wf-card"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 28px -6px rgba(13,27,53,0.14)' }}
        >
          <div className="ai-wf-icon"><IconReview /></div>
          <span className="ai-wf-label">REVIEW</span>
        </motion.div>
      </div>

      {/* Bottom card — Ship */}
      <div className="ai-wf-pos ai-wf-bottom">
        <motion.div
          className="ai-wf-card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 28px -6px rgba(13,27,53,0.14)' }}
        >
          <div className="ai-wf-icon"><IconShip /></div>
          <span className="ai-wf-label">SHIP</span>
        </motion.div>
      </div>

      {/* SVG connector lines — thin dashed */}
      <svg className="ai-wf-svg" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top connector */}
        <line x1="210" y1="130" x2="210" y2="175" stroke="#c8cdd9" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* Bottom connector */}
        <line x1="210" y1="245" x2="210" y2="290" stroke="#c8cdd9" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* Left connector */}
        <line x1="75"  y1="210" x2="158" y2="210" stroke="#c8cdd9" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* Right connector */}
        <line x1="262" y1="210" x2="345" y2="210" stroke="#c8cdd9" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* Small accent dots at intersections */}
        <circle cx="210" cy="130" r="2.5" fill="#3b5bdb" fillOpacity="0.55" />
        <circle cx="210" cy="290" r="2.5" fill="#3b5bdb" fillOpacity="0.55" />
        <circle cx="75"  cy="210" r="2.5" fill="#3b5bdb" fillOpacity="0.55" />
        <circle cx="345" cy="210" r="2.5" fill="#3b5bdb" fillOpacity="0.55" />
      </svg>

      {/* Center AI Core: positioning wrapper (CSS) + inner motion div (Framer) */}
      <div className="ai-core-pos">
        <motion.div
          className="ai-core"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          whileHover={{ scale: 1.025, boxShadow: '0 32px 72px -20px rgba(13,27,53,0.38)' }}
        >
          <IconNetwork />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main export ────────────────────────────────────────────────────────────
export function AISection({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <section
      data-surface-tone={tone}
      className="ai-section rhythm-divider"
      id="ai"
    >
      <div className="ai-inner">
        {/* ── Left Column ──────────────────────────────────────── */}
        <Reveal className="ai-left">
          {/* Eyebrow */}
          <span className="ai-eyebrow">Intelligence Integration</span>

          {/* Headline */}
          <h2 className="ai-headline">Beyond<br />human speed.</h2>

          {/* Body */}
          <p className="ai-body">
            We design AI systems that help teams brief, generate, review,
            and ship faster without losing editorial control or brand consistency.
          </p>

          {/* Feature cards */}
          <div className="ai-agent-cards">
            {/* Card 1 */}
            <motion.div
              className="ai-agent-card"
              whileHover={{ y: -3, boxShadow: '0 20px 48px -16px rgba(13,27,53,0.48)' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="ai-agent-icon-wrap">
                <IconAgent />
              </div>
              <div className="ai-agent-text">
                <p className="ai-agent-title">AGENT AURELIS-01</p>
                <p className="ai-agent-sub">Autonomous Content Orchestration</p>
              </div>
              <div className="ai-status-dot ai-status-green" aria-label="Online" />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="ai-agent-card"
              whileHover={{ y: -3, boxShadow: '0 20px 48px -16px rgba(13,27,53,0.48)' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="ai-agent-icon-wrap">
                <IconPredict />
              </div>
              <div className="ai-agent-text">
                <p className="ai-agent-title">PREDICTIVE ENGINE</p>
                <p className="ai-agent-sub">Behavior Intelligence</p>
              </div>
              <div className="ai-status-dot ai-status-blue" aria-label="Active" />
            </motion.div>
          </div>

          {/* CTA */}
          <AppLink href="/ai-solutions" className="ai-cta">
            <span>EXPLORE AI SOLUTIONS</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </AppLink>
        </Reveal>

        {/* ── Right Column ─────────────────────────────────────── */}
        <Reveal className="ai-right" delay={0.1}>
          <AIWorkflow />

          {/* Metrics strip */}
          <div className="ai-metrics">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="ai-metric-item">
                <span className="ai-metric-value">{value}</span>
                <span className="ai-metric-label">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
