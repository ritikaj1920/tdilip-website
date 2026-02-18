export interface TeamCategory {
  category: string;
  teams: string[];
}

export const teamsData: TeamCategory[] = [
  {
    category: 'National',
    teams: ['India Senior Men\u2019s Team', 'India A', 'India U-19', 'NCA (National Cricket Academy)'],
  },
  {
    category: 'Domestic',
    teams: ['Hyderabad', 'Andhra', 'Vidarbha', 'Jharkhand', 'Baroda'],
  },
  {
    category: 'Franchise',
    teams: ['Deccan Chargers (IPL)', 'Delhi Capitals (IPL)', 'Sunrisers Hyderabad (IPL)', 'Rising Pune Supergiant (IPL)', 'Trinbago Knight Riders (CPL)'],
  },
  {
    category: 'Women\u2019s',
    teams: ['India Women\u2019s Team (WPL)'],
  },
];
