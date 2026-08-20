import nirmalyaImg from '@/assets/nirmalya-sengupta.png';
import patrickImg from '@/assets/patrick-ubezio.png';
import deviprasadImg from '@/assets/deviprasad-singh.png';

export interface TeamMember {
  name: string;
  displayName: string;
  subTitle?: string;
  bio: string;
  linkedin: string;
  email?: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Nirmalya Sengupta',
    displayName: 'Nirmalya',
    bio: 'Data, analytics and technology expert passionate about making learning personalized, measurable and impactful.',
    email: 'nirmalya.sengupta@a3cend.com',
    linkedin: 'https://www.linkedin.com/in/nirmalya-sg/',
    image: nirmalyaImg,
  },
  {
    name: 'Patrick Ubezio',
    displayName: 'Patrick',
    bio: 'Strategy and leadership expert with global biopharma experience. Certified executive coach driving transformation through human connection.',
    email: 'patrick.ubezio@a3cend.com',
    linkedin: 'https://www.linkedin.com/in/patrickubezio/',
    image: patrickImg,
  },
  {
    name: 'Deviprasad Singh',
    displayName: 'Deviprasad Singh',
    bio: 'Chief Commercial Officer at Chryselys with 25+ years at Novartis, Bristol Myers Squibb, and Eli Lilly. Passionate about coaching young leaders.',
    email: 'deviprasad.singh@a3cend.com',
    linkedin: 'https://www.linkedin.com/in/deviprasad-singh-1149167/',
    image: deviprasadImg,
  },
];
