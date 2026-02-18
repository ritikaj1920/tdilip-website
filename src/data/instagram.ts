export interface InstagramPost {
  id: number;
  description: string;
  likes: string;
  comments: string;
  isVideo: boolean;
  image: string;
}

export const instagramProfile = {
  handle: '@dilip.tk19',
  name: 'T Dilip',
  posts: 207,
  followers: '359.4K',
  following: 177,
  bio: "Fielding Coach - Indian National Men's Cricket Team",
  profileUrl: 'https://www.instagram.com/dilip.tk19/',
  avatar: '/assets/instafeeds/pp.jpg',
};

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    description: 'CHAMPIONS! Every ounce of effort. Every moment of belief. All worth it. #ICCCHAMPIONSTROPHY2025',
    likes: '2.1M',
    comments: '5.2K',
    isVideo: false,
    image: '/assets/instafeeds/f1.jpg',
  },
  {
    id: 2,
    description: 'Dressing Room BTS | Fielder of the Match | #Final',
    likes: '1.5M',
    comments: '3.8K',
    isVideo: false,
    image: '/assets/instafeeds/f2.jpg',
  },
  {
    id: 3,
    description: "#TeamIndia's Fielding Session POV From the lens of our Fielding Coach T Dilip",
    likes: '573.7K',
    comments: '618',
    isVideo: true,
    image: '/assets/instafeeds/f3.jpg',
  },
  {
    id: 4,
    description: 'Dressing Room BTS | Fielder of the Match | #INDvAUS',
    likes: '1.6M',
    comments: '4K',
    isVideo: true,
    image: '/assets/instafeeds/f4.jpg',
  },
  {
    id: 5,
    description: 'The case of a missing fielding medal Some fun moments post the #NZvIND game',
    likes: '1.2M',
    comments: '1.4K',
    isVideo: true,
    image: '/assets/instafeeds/f5.jpg',
  },
  {
    id: 6,
    description: 'Dressing Room BTS | Fielder of the Match | #PAKvIND',
    likes: '1.8M',
    comments: '3.6K',
    isVideo: true,
    image: '/assets/instafeeds/f6.jpg',
  },
  {
    id: 7,
    description: 'Dressing Room BTS | Fielder of the Match | #BANvIND',
    likes: '1.1M',
    comments: '2.9K',
    isVideo: true,
    image: '/assets/instafeeds/f7.jpg',
  },
  {
    id: 8,
    description: 'Dressing Room BTS | Impact Fielder of the ODI Series',
    likes: '636.4K',
    comments: '712',
    isVideo: true,
    image: '/assets/instafeeds/f8.jpg',
  },
];
