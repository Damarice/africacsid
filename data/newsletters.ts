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
  }
];
