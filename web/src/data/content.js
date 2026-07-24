// Verbatim section content ported from index2.html's .app-page markup.
// Note: unlike the home screen, these interior sections were never
// bilingual in the original (no data-en/data-ar) — ported English-only.

export const skills = {
  nav: [
    { icon: '✦', label: 'All', active: true },
    { icon: '◧', label: 'Design' },
    { icon: '⌘', label: 'Code' },
    { icon: '◔', label: 'Product' },
    { icon: '▤', label: 'Data' },
    { icon: '✎', label: 'Writing' },
  ],
  eyebrow: '24 SKILLS · 6 DISCIPLINES',
  heading: 'Fluent in the tools that turn ideas into shipped work.',
  tags: [
    { label: 'Product Design', big: true },
    { label: 'Figma' },
    { label: 'React' },
    { label: 'TypeScript' },
    { label: 'Leadership', big: true },
    { label: 'SQL' },
    { label: 'User Research' },
    { label: 'Copywriting' },
    { label: 'Prototyping' },
    { label: 'Swift' },
    { label: 'Systems Thinking', big: true },
  ],
};

export const education = {
  eyebrow: 'Education',
  heading: 'Your academic record',
  diploma: {
    school: 'Stanford University',
    period: 'B.S. Computer Science · 2018–2022',
    badge: 'Honors',
    sub: "Minor in Design · Dean's List x4",
  },
  credits: { label: 'Credits completed', value: '128 / 128', pct: 100 },
  statsRow1: [
    { n: '3.9', l: 'GPA' },
    { n: '6', l: 'Honors & Awards' },
  ],
  statsRow2: [
    { n: '14', l: 'Courses w/ Distinction' },
    { n: '2', l: 'Degrees' },
  ],
};

export const experience = {
  title: 'Experience',
  cta: 'See résumé',
  segments: ['Current', 'Past', 'All'],
  quote: 'Six roles, one continuous craft — building products people actually use.',
  roles: [
    { gradient: ['var(--exp-1)', 'var(--exp-2)'], name: 'Senior Product Designer', meta: 'Anthropic · 2023–Present' },
    { gradient: ['#3D5CFF', '#8FA6FF'], name: 'Product Designer', meta: 'Figma · 2021–2023' },
    { gradient: ['#0FA36B', '#5CF2C1'], name: 'UX Intern', meta: 'Apple · Summer 2020' },
  ],
};

export const projects = {
  heading: '4 shipped',
  sub: 'Selected work, 2021–2026',
  list: [
    { accent: 'var(--p1-accent)', icon: 'layers', name: 'Portfolio OS', tag: 'iOS · Design system' },
    { accent: 'var(--p2-accent)', icon: 'card', name: 'Popcorn eSIM', tag: 'Mobile · Fintech' },
    { accent: 'var(--p3-accent)', icon: 'book', name: 'Trove Journal', tag: 'Wellness app' },
    { accent: 'var(--p4-accent)', icon: 'circles', name: 'Connect', tag: 'Concept · Telecom' },
  ],
};

export const volunteering = {
  title: 'Volunteering',
  cta: 'See causes',
  ctaGradient: ['var(--vol-1)', 'var(--vol-2)'],
  segments: ['Ongoing', 'Past', 'All'],
  quote: 'Six causes and counting — showing up for the community beyond the day job.',
  roles: [
    { gradient: ['var(--vol-1)', 'var(--vol-2)'], name: 'Code for Good', meta: 'Volunteer Mentor · 2023–Present' },
    { gradient: ['#E1336B', '#FF9BB8'], name: 'Habitat for Humanity', meta: 'Build Volunteer · 2022' },
    { gradient: ['#C2410C', '#FF7A59'], name: 'Local Food Bank', meta: 'Weekly Volunteer · 2021–Present' },
  ],
};

export const recommendations = {
  small: 'Recommendations',
  heading: 'What people say',
  list: [
    {
      avatarGradient: ['var(--ref-1)', 'var(--ref-2)'], initials: 'SC',
      name: 'Sarah Chen', role: 'Engineering Lead, Anthropic',
      quote: '"Alex is the rare designer who thinks in systems and still sweats the pixel-level details. I\'d work with them again in a heartbeat."',
      contacts: ['sarah.chen@anthropic.com', 'LinkedIn'],
    },
    {
      avatarGradient: ['#0FA36B', '#5CF2C1'], initials: 'MW',
      name: 'Marcus Webb', role: 'Product Director, Figma',
      quote: '"One of the most collaborative partners I\'ve had on a product team — every handoff was painless, every review was sharp."',
      contacts: ['marcus@figma.com', '+1 (415) 555-0132'],
    },
    {
      avatarGradient: ['#C2410C', '#FF7A59'], initials: 'PN',
      name: 'Priya Nair', role: 'Former Manager, Apple',
      quote: '"Alex\'s attention to detail raised the bar for our entire team\'s output. A genuine craftsperson."',
      contacts: ['priya.nair@icloud.com', 'LinkedIn'],
    },
  ],
};

export const languages = {
  nav: [
    { icon: 'EN', label: 'English', active: true },
    { icon: 'ES', label: 'Spanish' },
    { icon: 'FR', label: 'French' },
    { icon: 'JP', label: 'Japanese' },
  ],
  quote: 'How many ways can you say hello?',
  fluency: [
    { lang: 'English', level: 'Native', pct: 100 },
    { lang: 'Spanish', level: 'Fluent', pct: 82 },
    { lang: 'French', level: 'Conversational', pct: 55 },
    { lang: 'Japanese', level: 'Beginner', pct: 25 },
  ],
};

export const chatbotSeed = {
  messages: [
    { from: 'bot', text: "Hi! I'm Alex's portfolio assistant. Ask me about skills, projects, or experience." },
    { from: 'user', text: "What's Alex's strongest area?" },
    { from: 'bot', text: 'Product design and systems thinking — 6 shipped roles and 4+ years leading design at scale.' },
    { from: 'user', text: 'Any projects worth checking out?' },
    { from: 'bot', text: 'Portfolio OS and Connect, both in the Projects app — end-to-end design systems work.' },
  ],
  placeholder: 'Ask a question…',
};

export const quizQuestions = [
  { q: 'Which tool does Alex reach for first when designing?', options: ['Figma', 'Excel', 'Photoshop 5', 'MS Paint'], correct: 0 },
  { q: 'How many projects has Alex shipped?', options: ['3', '7', '4', '20'], correct: 2 },
  { q: "Besides English, what's Alex's strongest language?", options: ['Spanish', 'Mandarin', 'German', 'Latin'], correct: 0 },
  { q: 'Where did Alex intern?', options: ['Google', 'Apple', 'Netflix', 'Tesla'], correct: 1 },
  { q: 'Roughly how many hours has Alex volunteered?', options: ['10', '50', '150+', '500'], correct: 2 },
];

export const meetLara = {
  avatar: 'L', name: 'Lara Nguyen', sub: 'Recruiting Partner · 30 min video call',
  headline: 'Book a meeting with Lara',
  dates: [
    { num: 24, day: 'Fri' },
    { num: 27, day: 'Mon', active: true },
    { num: 28, day: 'Tue' },
    { num: 29, day: 'Wed' },
    { num: 30, day: 'Thu' },
    { num: 31, day: 'Fri' },
  ],
  times: [
    { label: '9:00 AM' },
    { label: '9:30 AM', active: true },
    { label: '10:00 AM' },
    { label: '11:00 AM' },
    { label: '1:30 PM' },
    { label: '2:00 PM' },
  ],
  cta: 'Confirm booking',
};

export const summary = {
  aboutLabel: 'About me',
  stack: [
    { bg: 'var(--skills-2)', eyebrow: 'Track record', body: 'Delivered 10+ client projects' },
    { bg: 'var(--edu-2)', eyebrow: 'Started early', body: 'Freelancing since I was 16' },
    { bg: 'var(--exp-2)', eyebrow: '0 → 1', body: 'Shipped 4 products from scratch' },
    { bg: 'var(--proj-2)', eyebrow: 'Leadership', body: 'Led design across 3 companies' },
    { bg: 'var(--vol-2)', eyebrow: 'Giving back', body: '150+ hours volunteered' },
  ],
  info: [
    { label: 'Title', value: 'Senior Product Designer' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Experience', value: '4+ years' },
    { label: 'Focus', value: 'Design systems, 0→1 product, leadership' },
  ],
};

export const leadership = {
  title: 'Leadership',
  quote: "Growing the people around me is the work I'm proudest of.",
  roles: [
    { gradient: ['var(--vol-1)', 'var(--vol-2)'], name: 'Design Team Lead', meta: 'Anthropic · 4 direct reports' },
    { gradient: ['#0FA36B', '#5CF2C1'], name: 'Mentor, Code for Good', meta: '6 mentees since 2023' },
    { gradient: ['#3D5CFF', '#8FA6FF'], name: 'Design Guild Founder', meta: 'Figma · Grew to 40 members' },
  ],
};

export const certifications = {
  eyebrow: '3 CERTIFICATIONS',
  heading: 'Credentials that back up the craft.',
  rows: [
    { year: '2024', value: 'Certified Scrum Product Owner' },
    { year: '2023', value: 'Google UX Design Certificate' },
    { year: '2022', value: 'Nielsen Norman UX Certification' },
  ],
};

export const awards = {
  eyebrow: '4 AWARDS',
  heading: 'Recognition along the way.',
  rows: [
    { year: '2025', value: 'Anthropic Design Excellence Award' },
    { year: '2023', value: 'Figma Community Spotlight' },
    { year: '2022', value: 'Apple WWDC Student Scholarship' },
    { year: '2021', value: 'Stanford Design Thesis Honors' },
  ],
};

export const contact = {
  eyebrow: "LET'S TALK",
  heading: "Reach out any way that's easiest.",
  rows: [
    { label: 'Email', value: 'alex.morgan@email.com' },
    { label: 'Phone', value: '+1 (415) 555-0148' },
    { label: 'LinkedIn', value: '/in/alexmorgan' },
  ],
};
