export interface Newsletter {
  id: number;
  title: string;
  date: string;
  description: string;
  downloadUrl: string;
  slug: string;
}

export const newsletters: Newsletter[] = [
  {
    id: 1,
    title: "Jan - March 2026 Newsletter Edition: Community Led Action Driving Impact",
    date: "March 2026",
    description: "Community Led Action Driving Impact - Showcasing grassroots initiatives and community-driven solutions making a real difference in our programs.",
    downloadUrl: "/2026 1st Quarter Newsletter (1).pdf",
    slug: "jan-march-2026"
  },
  {
    id: 2,
    title: "Quarterly Newsletter - Q1 2024",
    date: "March 2024",
    description: "Highlights from our programs including climate action initiatives, peace-building workshops, and economic empowerment projects across Kenya.",
    downloadUrl: "#",
    slug: "q1-2024"
  },
  {
    id: 3,
    title: "Quarterly Newsletter - Q4 2023",
    date: "December 2023",
    description: "Year-end review of our achievements, community impact stories, and upcoming initiatives for 2024.",
    downloadUrl: "#",
    slug: "q4-2023"
  },
  {
    id: 4,
    title: "Quarterly Newsletter - Q3 2023",
    date: "September 2023",
    description: "Updates on our climate change programs, women empowerment initiatives, and youth engagement activities.",
    downloadUrl: "#",
    slug: "q3-2023"
  }
];
