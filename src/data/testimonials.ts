export interface Testimonial {
  id: number;
  name: string;
  text: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mensx Deuoox',
    text: 'T Dilip\'s coaching philosophy is nothing short of transformational. His dedication to improving fielding standards has inspired an entire generation of cricketers.',
    color: '#1a3a5c',
  },
  {
    id: 2,
    name: 'Kawser Rox',
    text: 'Working with Coach Dilip taught me that fielding is not just a skill but a mindset. His energy and innovative drills push you beyond your limits.',
    color: '#2a1a4c',
  },
  {
    id: 3,
    name: 'Ivan Rony',
    text: 'His attention to detail is remarkable. Every fielding session is meticulously planned, and the results speak for themselves on the field.',
    color: '#1c3a2c',
  },
  {
    id: 4,
    name: 'Supto Protiva',
    text: 'Coach Dilip brings an unmatched passion to every training session. He makes you believe that every catch, every dive, and every run-out matters.',
    color: '#3a1a1a',
  },
];
