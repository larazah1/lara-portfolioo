import SummaryContent from './SummaryContent.jsx';
import EducationContent from './EducationContent.jsx';
import ExperienceContent from './ExperienceContent.jsx';
import SkillsContent from './SkillsContent.jsx';
import ProjectsContent from './ProjectsContent.jsx';
import VolunteeringContent from './VolunteeringContent.jsx';
import RecommendationsContent from './RecommendationsContent.jsx';
import LanguagesContent from './LanguagesContent.jsx';
import ChatbotContent from './ChatbotContent.jsx';
import GameContent from './GameContent.jsx';
import MeetContent from './MeetContent.jsx';
import LeadershipContent from './LeadershipContent.jsx';
import CertificationsContent from './CertificationsContent.jsx';
import AwardsContent from './AwardsContent.jsx';
import ContactContent from './ContactContent.jsx';

// Maps every app id to its presentational content component. Consumed by
// both the desktop Window body and the mobile page-stack, so section
// content is defined exactly once.
export const CONTENT_COMPONENTS = {
  'app-summary': SummaryContent,
  'app-education': EducationContent,
  'app-experience': ExperienceContent,
  'app-skills': SkillsContent,
  'app-projects': ProjectsContent,
  'app-volunteering': VolunteeringContent,
  'app-referrals': RecommendationsContent,
  'app-languages': LanguagesContent,
  'app-chatbot': ChatbotContent,
  'app-game': GameContent,
  'app-meet': MeetContent,
  'app-leadership': LeadershipContent,
  'app-certifications': CertificationsContent,
  'app-awards': AwardsContent,
  'app-contact': ContactContent,
};
