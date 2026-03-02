export interface Vacancy {
  id: number;
  title: string;
  location: string;
  type: string;
  deadline: string;
  description: string;
  requirements: string[];
  slug: string;
}

export const vacancies: Vacancy[] = [
  // When you have vacancies from WordPress, add them here in this format:
  // {
  //   id: 1,
  //   title: "Program Officer - Climate Change",
  //   location: "Nairobi, Kenya",
  //   type: "Full-time",
  //   deadline: "March 30, 2026",
  //   description: "We are seeking a passionate Program Officer...",
  //   requirements: ["Bachelor's degree in Environmental Science...", "3+ years experience..."],
  //   slug: "program-officer-climate-change"
  // }
];
