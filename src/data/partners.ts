export interface Partner {
  id: number;
  name: string;
  logo?: string;
  url?: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Adidas",
    logo: "/assets/partners/adidas_white.png",
    url: "https://www.adidas.co.in/",
    description:
      "Global sportswear leader powering athletes with innovation, style, and performance-driven gear.",
  },
  {
    id: 2,
    name: "Sanspareils Greenlands",
    logo: "/assets/partners/sg_logo.png",
    url: "https://www.sgcricket.com/",
    description:
      "India's premier cricket equipment manufacturer, trusted by generations of cricketers worldwide.",
  },
];
