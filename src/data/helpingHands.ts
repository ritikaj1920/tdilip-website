export const hhMission = 'At Helping Hands, our mission is to empower and uplift sportspersons by providing them with the mentorship, guidance, and support they need to achieve their highest potential.';

export const hhVision = 'Our vision is to be the leading support network for cricketers across all levels, fostering a culture of mentorship, learning, and teamwork.';

export interface BlogArticle {
  title: string;
  date: string;
  slug: string;
  image: string;
  excerpt: string;
}

export const blogArticles: BlogArticle[] = [
  {
    title: 'Empowering Dreams: A Helping Hands Contribution to Aspiring Athletes',
    date: '28 Sept 2023',
    slug: 'empowering-gymkhana-athletes',
    image: '/assets/blog/banner.jpg',
    excerpt: 'Support provided to state-level athletes from Gymkhana Athletic Ground for nationals participation.',
  },
  {
    title: "Rising from the Streets: A Young Cricketer's Journey",
    date: '28 Sept 2023',
    slug: 'rising-from-the-streets',
    image: '/assets/blog/01.jpg',
    excerpt: "Story of an underprivileged cricketer's success through the mentorship program.",
  },
  {
    title: 'Empowering Women in Cricket: Breaking Barriers',
    date: '28 Sept 2023',
    slug: 'empowering-women-in-cricket',
    image: '/assets/blog/02.jpg',
    excerpt: 'How Helping Hands is breaking down barriers for women in cricket and empowering the next generation of female cricketers.',
  },
  {
    title: 'How Peer Learning Changed the Game for a Local Cricket Team',
    date: '28 Sept 2023',
    slug: 'peer-learning',
    image: '/assets/blog/03.jpg',
    excerpt: 'The innovative Peer Learning Program that transformed a struggling team into tournament champions.',
  },
  {
    title: 'Community Camps: Bridging Gaps through Cricket',
    date: '28 Sept 2023',
    slug: 'community-camps',
    image: '/assets/blog/04.jpg',
    excerpt: 'Bringing professional-level coaching to underserved areas through Community Cricket Camps.',
  },
  {
    title: 'The Power of Team-Building: A Success Story of Collaboration',
    date: '28 Sept 2023',
    slug: 'team-building-triumph',
    image: '/assets/blog/05.jpg',
    excerpt: 'How a team-building program transformed a group of talented individuals into a unified, winning team.',
  },
];

export interface CoreValue {
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  { title: 'Empathy', description: 'Understanding and addressing individual needs' },
  { title: 'Collaboration', description: 'Collective growth through shared knowledge and experience' },
  { title: 'Inclusivity', description: 'Supporting cricketers from diverse backgrounds' },
  { title: 'Commitment', description: 'Dedicated pursuit of excellence' },
  { title: 'Innovation', description: 'Adopting contemporary coaching methodologies' },
];

export interface KeyPractice {
  title: string;
  description: string;
}

export const keyPractices: KeyPractice[] = [
  { title: 'Mentorship Programs', description: 'Connecting emerging players with experienced professionals' },
  { title: 'Team-Building Exercises', description: 'Collaborative activities enhancing on-field and off-field dynamics' },
  { title: 'Community Initiatives', description: 'Workshops and camps in underserved regions' },
  { title: 'Peer-to-Peer Learning', description: 'Player knowledge-sharing for continuous development' },
  { title: 'Resource Support', description: 'Providing tools and training opportunities' },
];

export interface BoardMember {
  name: string;
  role: string;
  title: string;
  description: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: 'T. Dilip',
    role: 'Founder',
    title: 'Cricket Fielding Coach',
    description: 'Founder of Helping Hands, dedicated to empowering sportspersons through mentorship and community support.',
  },
  {
    name: 'T. Dilip',
    role: 'Head Coach',
    title: "Fielding Coach — India National Men's Cricket Team",
    description: 'Leading fielding transformation at the highest level of Indian cricket.',
  },
  {
    name: 'T. Dilip',
    role: 'Mentor',
    title: 'Community Program Director',
    description: 'Driving grassroots cricket development through innovative mentorship and community programs.',
  },
];
