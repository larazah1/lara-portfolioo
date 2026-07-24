export function SummaryGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <rect x="20" y="24" width="60" height="52" rx="8" fill="#fff" opacity=".92" />
      <rect x="30" y="38" width="40" height="6" rx="3" fill="var(--skills-2)" />
      <rect x="30" y="52" width="26" height="6" rx="3" fill="var(--skills-2)" />
    </svg>
  );
}

export function EducationGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M50 28 L82 42 L50 56 L18 42Z" fill="#fff" />
    </svg>
  );
}

export function ExperienceGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M22 66 L40 54 L56 62 L78 36" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="78" cy="36" r="8" fill="#fff" />
    </svg>
  );
}

export function SkillsGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M50 20c2 20 10 28 30 30-20 2-28 10-30 30-2-20-10-28-30-30 20-2 28-10 30-30Z" fill="#fff" />
    </svg>
  );
}

export function ProjectsGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <rect fill="#fff" opacity=".55" x="26" y="44" width="42" height="28" rx="5" />
      <rect fill="#fff" x="16" y="26" width="42" height="28" rx="5" />
    </svg>
  );
}

export function ProjectsGlyphLayered(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <rect fill="#fff" opacity=".55" x="26" y="44" width="42" height="28" rx="5" />
      <rect fill="#fff" opacity=".78" x="21" y="35" width="42" height="28" rx="5" />
      <rect fill="#fff" x="16" y="26" width="42" height="28" rx="5" />
    </svg>
  );
}

export function VolunteeringGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M50 58c-8-8-18-14-18-24 0-6 5-10 10-10 4 0 7 2 8 5 1-3 4-5 8-5 5 0 10 4 10 10 0 10-10 16-18 24Z" fill="#fff" />
    </svg>
  );
}

export function RecommendationsGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="30" cy="38" r="12" fill="#fff" />
      <path d="M12 74c0-14 10-22 18-22s18 8 18 22Z" fill="#fff" />
      <circle cx="70" cy="54" r="12" fill="#fff" opacity="0.96" />
      <path d="M52 78c0-12 8-18 18-18s18 6 18 18Z" fill="#fff" opacity="0.96" />
    </svg>
  );
}

export function GameGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <rect x="18" y="18" width="64" height="64" rx="16" fill="none" stroke="#fff" strokeWidth="8" />
      <circle cx="34" cy="34" r="6.5" fill="#fff" />
      <circle cx="50" cy="50" r="6.5" fill="#fff" />
      <circle cx="66" cy="66" r="6.5" fill="#fff" />
    </svg>
  );
}

export function MeetGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <rect x="14" y="30" width="52" height="40" rx="10" fill="#fff" />
      <path d="M70 42 L88 30 L88 70 L70 58Z" fill="#fff" />
    </svg>
  );
}

export function LanguagesGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M40 18h46a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8h-8v10l-13-10h-25a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8Z" fill="#fff" />
    </svg>
  );
}

export function LeadershipGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="34" r="14" fill="#fff" />
      <path d="M22 78c0-18 12-30 28-30s28 12 28 30" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function CertificationsGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="40" r="22" fill="#fff" />
      <path d="M38 58 L30 82 L50 72 L70 82 L62 58" fill="#fff" />
    </svg>
  );
}

export function AwardsGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="38" r="20" fill="#fff" />
      <path d="M36 56 L28 84 L50 72 L72 84 L64 56" fill="#fff" />
    </svg>
  );
}

export function ContactGlyph(props) {
  return (
    <svg className="e-glyph" viewBox="0 0 100 100" fill="none" {...props}>
      <rect x="18" y="26" width="64" height="48" rx="8" fill="#fff" />
      <path d="M22 30 L50 52 L78 30" fill="none" stroke="var(--ref-2)" strokeWidth="5" />
    </svg>
  );
}

export function ChatGlyph({ fill = '#4B4470', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H10l-4.2 3.3c-.53.42-1.3.04-1.3-.63V15.9c-.28-.24-.5-.6-.5-1V5.5Z" fill={fill} />
    </svg>
  );
}

export function ChevronIcon({ stroke = '#fff', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9 6l6 6-6 6" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BackIcon({ stroke = 'var(--ink)', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 6l-6 6 6 6" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <path d="M3 3l6 6M9 3l-6 6" stroke="#7A2A1E" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function MinimizeIcon(props) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <path d="M2.5 6h7" stroke="#7A5B0E" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ExpandIcon(props) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <path d="M2.5 4.5V2.5h2M9.5 7.5v2h-2M2.5 2.5l3 3M9.5 9.5l-3-3" stroke="#0B5E3F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
