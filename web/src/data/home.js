export const greeting = {
  eyebrow: { en: 'Good afternoon', ar: 'مساء الخير' },
  name: { en: 'You', ar: 'أنت' },
};

export const chatWidget = {
  tag: { en: 'Portfolio Assistant', ar: 'مساعد المعرض' },
  heading: { en: 'Ask me anything about my work', ar: 'اسألني أي شيء عن عملي' },
  preview: { en: '"What did you build at your last role?"', ar: '"ماذا بنيت في وظيفتك الأخيرة؟"' },
  cta: { en: 'Start chat', ar: 'ابدأ المحادثة' },
};

export const funFactsLabel = { en: 'Fun facts about Lara', ar: 'حقائق ممتعة عن لارا' };

export const funFacts = [
  {
    bg: 'var(--fact1-2)',
    eyebrow: { en: 'Favorite World Cup Team?', ar: 'فريق كأس العالم المفضل؟' },
    body: { en: '🇪🇸 Spain!', ar: '🇪🇸 إسبانيا!' },
  },
  {
    bg: 'var(--fact2-2)',
    eyebrow: { en: 'My biggest weakness?', ar: 'أكبر نقطة ضعف لدي؟' },
    body: { en: "Design 😭 I'm trying to become a better designer every day.", ar: 'التصميم 😭 أحاول أن أصبح مصممًا أفضل كل يوم.' },
  },
  {
    bg: 'var(--fact3-2)',
    eyebrow: { en: 'Where do I see myself in five years?', ar: 'أين أرى نفسي بعد خمس سنوات؟' },
    body: { en: 'Working in YOUR company. So... accept me 😄', ar: 'أعمل في شركتك. لذا... اقبلني 😄' },
  },
  {
    bg: 'var(--fact4-2)',
    eyebrow: { en: 'What do I think you should do?', ar: 'ما الذي أعتقد أنه يجب عليك فعله؟' },
    body: { en: 'Interview me 😉', ar: 'قابلني 😉' },
    cta: { en: '📅 Schedule Interview', ar: '📅 حدد موعد مقابلة' },
    ctaApp: 'app-meet',
  },
  {
    bg: 'var(--fact5-2)',
    eyebrow: { en: 'Random fact', ar: 'حقيقة عشوائية' },
    body: { en: 'I genuinely enjoy building products people actually use.', ar: 'أستمتع حقًا ببناء منتجات يستخدمها الناس فعلاً.' },
  },
];

export const meetingCtaBtn = { en: '📅 Book a Meeting with Lara!', ar: '📅 احجز اجتماعًا مع لارا!' };

export const exploreLabel = { en: 'Explore', ar: 'استكشف' };

export const meetPreview = {
  label: { en: 'Book time with Lara', ar: 'احجز وقتًا مع لارا' },
  text: { en: "Have a few minutes? Grab a slot on Lara's calendar and let's talk.", ar: 'لديك بضع دقائق؟ احجز موعدًا في تقويم لارا ولنتحدث.' },
  dates: [
    { num: 27, day: 'Mon' },
    { num: 28, day: 'Tue', active: true },
    { num: 29, day: 'Wed' },
    { num: 30, day: 'Thu' },
  ],
  times: [
    { label: '9:30 AM' },
    { label: '11:00 AM', active: true },
    { label: '2:00 PM' },
  ],
  cta: { en: 'View Full Calendar', ar: 'عرض التقويم الكامل' },
};
