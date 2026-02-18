export interface Achievement {
  title: string;
  year: string;
}

export const goldTrophies: Achievement[] = [
  { title: 'Asia Cup', year: '2023 \u2014 Champions (vs Sri Lanka)' },
  { title: 'ICC T20 World Cup', year: '2024 \u2014 Champions (vs South Africa)' },
  { title: 'ICC Champions Trophy', year: '2025 \u2014 Champions (vs New Zealand)' },
  { title: 'Asia Cup', year: '2025 \u2014 Champions (vs Pakistan)' },
];

export const silverTrophies: Achievement[] = [
  { title: 'ICC Cricket World Cup', year: '2023 \u2014 Final' },
  { title: 'ICC WTC Final', year: '2023 \u2014 Final (The Oval, London)' },
];

export const otherAchievements: Achievement[] = [
  { title: 'T20 World Cup Semi-Final', year: '2022 \u2014 Semi-Finalist' },
  { title: 'No. 1 in All Formats', year: '2023 \u2014 Test, ODI & T20I simultaneously' },
  { title: 'BCCI Level 3 Certification', year: 'Highest coaching qualification \u2014 NCA' },
];
