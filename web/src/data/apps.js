import {
  SummaryGlyph, EducationGlyph, ExperienceGlyph, SkillsGlyph, ProjectsGlyphLayered,
  VolunteeringGlyph, RecommendationsGlyph, GameGlyph, MeetGlyph, LanguagesGlyph,
  LeadershipGlyph, CertificationsGlyph, AwardsGlyph, ContactGlyph, ChatGlyph,
} from '../components/icons/Glyphs.jsx';

// Registry of every "app" that can open as a desktop window / mobile page.
// gradient + Glyph match index2.html's explore-card styling exactly (including
// its few cross-referenced palette choices, e.g. Skills' icon uses the
// referrals-green gradient rather than its own purple — preserved as authored).
// bodyClass mirrors index2's #app-* background rules — only 10 of the 15
// sections had a custom background; the rest fall back to the plain page bg.
export const APPS = {
  'app-summary': {
    id: 'app-summary', title: { en: 'Summary', ar: 'ملخص' },
    gradient: ['var(--skills-1)', 'var(--skills-2)'], Glyph: SummaryGlyph,
  },
  'app-education': {
    id: 'app-education', title: { en: 'Education', ar: 'التعليم' },
    gradient: ['var(--edu-1)', 'var(--edu-2)'], Glyph: EducationGlyph, bodyClass: 'section-education',
  },
  'app-experience': {
    id: 'app-experience', title: { en: 'Experience', ar: 'الخبرة' },
    gradient: ['var(--exp-1)', 'var(--exp-2)'], Glyph: ExperienceGlyph, bodyClass: 'section-experience',
  },
  'app-skills': {
    id: 'app-skills', title: { en: 'Skills', ar: 'المهارات' },
    gradient: ['var(--ref-1)', 'var(--ref-2)'], Glyph: SkillsGlyph, bodyClass: 'section-skills',
  },
  'app-projects': {
    id: 'app-projects', title: { en: 'Projects', ar: 'مشاريع' },
    gradient: ['var(--proj-1)', 'var(--proj-2)'], Glyph: ProjectsGlyphLayered, bodyClass: 'section-projects',
  },
  'app-volunteering': {
    id: 'app-volunteering', title: { en: 'Volunteering', ar: 'تطوع' },
    gradient: ['var(--vol-1)', 'var(--vol-2)'], Glyph: VolunteeringGlyph, bodyClass: 'section-volunteering',
  },
  'app-referrals': {
    id: 'app-referrals', title: { en: 'Recommendations', ar: 'توصيات' },
    gradient: ['var(--ref-1)', 'var(--ref-2)'], Glyph: RecommendationsGlyph, bodyClass: 'section-referrals',
  },
  'app-game': {
    id: 'app-game', title: { en: 'Quick Match', ar: 'مباراة سريعة' },
    gradient: ['var(--game-1)', 'var(--game-2)'], Glyph: GameGlyph, bodyClass: 'section-game',
  },
  'app-meet': {
    id: 'app-meet', title: { en: 'Meet Lara', ar: 'اجتماع مع لارا' },
    gradient: ['#4285F4', '#34A853'], Glyph: MeetGlyph, bodyClass: 'section-meet',
  },
  'app-languages': {
    id: 'app-languages', title: { en: 'Languages', ar: 'لغات' },
    gradient: ['var(--lang-1)', 'var(--lang-2)'], Glyph: LanguagesGlyph, bodyClass: 'section-languages',
  },
  'app-leadership': {
    id: 'app-leadership', title: { en: 'Leadership', ar: 'القيادة' },
    gradient: ['#5B3DE0', '#8A5CFF'], Glyph: LeadershipGlyph,
  },
  'app-certifications': {
    id: 'app-certifications', title: { en: 'Certifications', ar: 'الشهادات' },
    gradient: ['var(--lang-1)', 'var(--lang-2)'], Glyph: CertificationsGlyph,
  },
  'app-awards': {
    id: 'app-awards', title: { en: 'Awards', ar: 'الجوائز' },
    gradient: ['#5B3DE0', '#8A5CFF'], Glyph: AwardsGlyph,
  },
  'app-contact': {
    id: 'app-contact', title: { en: 'Contact', ar: 'تواصل' },
    gradient: ['#0FA36B', '#4DE8C9'], Glyph: ContactGlyph,
  },
  'app-chatbot': {
    id: 'app-chatbot', title: { en: 'Portfolio Assistant', ar: 'مساعد المعرض' },
    gradient: ['var(--chat-2)', 'var(--chat-3)'], Glyph: ChatGlyph, bodyClass: 'section-chatbot',
  },
};

// Display order for the home screen's explore row/grid (chatbot opens from
// the chat widget / floating button instead, so it's excluded here).
export const EXPLORE_ORDER = [
  'app-summary', 'app-education', 'app-experience', 'app-skills', 'app-projects',
  'app-volunteering', 'app-referrals', 'app-game', 'app-meet', 'app-languages',
  'app-leadership', 'app-certifications', 'app-awards', 'app-contact',
];

export function gradientCss(app, angle = '135deg') {
  return `linear-gradient(${angle}, ${app.gradient[0]}, ${app.gradient[1]})`;
}
