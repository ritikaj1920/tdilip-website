export interface Tweet {
  id: number;
  content: string;
  likes: number;
  comments: number;
  retweets: number;
  views?: string;
  timestamp: string;
  hasImage: boolean;
  image?: string;
}

export const twitterProfile = {
  handle: "@dilip_cc",
  name: "T Dilip",
  posts: "1.1K",
  followers: "1.3K",
  following: 738,
  bio: "Fielding Coach - Indian National Men's Cricket Team",
  profileUrl: "https://x.com/dilip_cc",
  avatar: "/assets/twitterfeeds/pp.jpg",
};

export const tweets: Tweet[] = [
  {
    id: 1,
    content: "World Champions #T20WorldCup2024",
    likes: 620,
    comments: 15,
    retweets: 85,
    views: "9.5K",
    timestamp: "Jun 29, 2024",
    hasImage: true,
    image: "https://pbs.twimg.com/media/GRV0opxbMAAXgXs.jpg",
  },
  {
    id: 8,
    content: "@ajinkyarahane88 , @rajasthanroyals Well played jinks",
    likes: 42,
    comments: 3,
    retweets: 7,
    timestamp: "May 2013",
    hasImage: true,
    image: "https://pbs.twimg.com/media/BJkMGpFCMAAXzWh.jpg",
  },
  {
    id: 2,
    content:
      "Incredible bowling by @imkuldeep18 ! Mixing up variations at will and with some control #ENGvIND",
    likes: 89,
    comments: 3,
    retweets: 12,
    timestamp: "Jul 2023",
    hasImage: false,
  },
  {
    id: 3,
    content:
      "@vijayshankar260 great talent ! Looking forward to see him in action #allrounder @SunRisers",
    likes: 45,
    comments: 2,
    retweets: 8,
    timestamp: "Apr 2019",
    hasImage: false,
  },
  {
    id: 4,
    content:
      "Pressure! It's an opportunity to become hero @msdhoni master of it in domestic @abhisheknayari getting closer from every game @BCCI",
    likes: 120,
    comments: 8,
    retweets: 25,
    timestamp: "Feb 2014",
    hasImage: false,
  },
  {
    id: 5,
    content:
      "Top 3 elite fielding coaches of world cricket @mikeyoung @trevorpenny @coach_rsridhar #innovative #simple #enjoyable lucky to work with all",
    likes: 200,
    comments: 12,
    retweets: 40,
    timestamp: "Mar 2018",
    hasImage: false,
  },
  {
    id: 6,
    content:
      "@anilkumble1074 @BCCI top class test match . These kind of wins do lift the moral",
    likes: 55,
    comments: 4,
    retweets: 10,
    timestamp: "Sep 2016",
    hasImage: false,
  },
  {
    id: 7,
    content:
      "@pragyanojha fantastic bowling mate. Wishing for many more from you :)",
    likes: 30,
    comments: 2,
    retweets: 5,
    timestamp: "Nov 2013",
    hasImage: false,
  },
];
