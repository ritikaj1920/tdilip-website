export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: 'Fielding Technique',
    items: [
      {
        question: 'What is the most important skill for slip catching?',
        answer: 'Slip catching requires soft hands, late adjustment, and intense concentration. At the highest level, the ball reaches the slip cordon in fractions of a second, so positioning and anticipation matter more than raw reflexes. We use RoboArm machines and tennis ball drills to simulate the speed and trajectory of edges.',
      },
      {
        question: 'How do you train for diving catches and ground fielding?',
        answer: 'Diving technique is about controlled falling, not reckless throwing of the body. We work on landing mechanics, rolling techniques, and body positioning drawn from baseball outfielding methods. The goal is to make every dive safe, repeatable, and effective across all surfaces.',
      },
      {
        question: 'How can a player improve throwing accuracy under pressure?',
        answer: 'Accuracy comes from repetition under match-like intensity. We design drills where the consequence of a missed throw matters \u2014 competitive scenarios with scoring systems. Over time, the muscle memory built in training translates directly to match situations.',
      },
    ],
  },
  {
    category: 'Coaching Philosophy',
    items: [
      {
        question: 'What is the story behind the Best Fielder Medal?',
        answer: 'The Best Fielder Medal was introduced approximately four months before the 2023 Cricket World Cup. It\u2019s a dressing-room award presented after each international match to the player judged to have made the most impactful fielding contribution. The presentations became a viral sensation.',
      },
      {
        question: 'Why are your training sessions known for being so intense?',
        answer: 'Intensity in training builds composure under pressure. Every session begins with competitive fielding contests that set the tone. Players are divided into smaller groups to create accountability and healthy rivalry. If you can perform at your best in the most demanding training environment, match situations feel manageable.',
      },
      {
        question: 'How do cross-sport methods like baseball influence your coaching?',
        answer: 'Working with Australian coach Mike Young at the Deccan Chargers introduced me to baseball outfielding techniques \u2014 particularly catching mechanics, throwing accuracy from different angles, and positioning. Innovation comes from looking beyond the boundaries of a single sport.',
      },
    ],
  },
  {
    category: 'Career & Journey',
    items: [
      {
        question: 'How did you transition from playing cricket to coaching?',
        answer: 'I represented Hyderabad at various age-group levels and played senior domestic cricket. Over time, I found that my interest in mentoring teammates \u2014 particularly in fielding \u2014 outweighed my playing ambitions. I began the BCCI Level 1 coaching course in 2004 and completed Level 2 by 2007.',
      },
      {
        question: 'What was your role at the National Cricket Academy?',
        answer: 'I joined the NCA in Bangalore in 2011 as specialist fielding coach. Over a decade, I worked with virtually every player who went on to represent India, including Shubman Gill, Yashasvi Jaiswal, Tilak Varma, and Axar Patel.',
      },
    ],
  },
];
