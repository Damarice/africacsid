import { getProjects } from "@/lib/wordpress";
import ProjectsClient from "./ProjectsClient";

export const revalidate = 60;

// Static fallback projects
const staticProjects = [
  {
    id: 2,
    title: "Women, Faith, and Climate Security Project",
    image: "/KAIROS Canada Partnership.JPG",
    alt: "Women Faith and Climate Security - KAIROS Canada",
    tags: ["Gender-Conflict-Climate Nexus", "Women's Leadership", "Peace Building", "Climate Resilience"],
    partner: "KAIROS Canada",
    status: "Ongoing",
    paragraphs: [
      `Africa CSID, with support from KAIROS Canada, is committed to strengthening the gender‑conflict‑climate nexus through the Women, Faith, and Climate Security Project.`,
      `This is a transformative initiative aimed at strengthening the gender‑conflict‑climate nexus across Kenya's fragile ecosystems. Implemented in pastoral communities in Baringo and the fisher communities of the Lake Victoria Basin, the project seeks to empower women as agents of peace and resilience amid climate‑driven resource scarcity and conflict.`,
      `By institutionalizing women‑led peace committees, fostering interfaith solidarity, and advancing climate‑resilient livelihoods, the project bridges pastoral and fisher contexts under a common peace‑climate framework. It aligns with Kenya's Security Strategy, the National Climate Change Action Plan, and global Women, Peace, and Security commitments.`,
      `Directly benefiting 600 women, children, and youth, and reaching over 3,000 community members—the project seeks to elevate grassroot voices through forums, interfaith dialogues, and multimedia campaigns under Justice and Renewal: Women, Faith, and Climate Peace.`,
      `Rooted in faith and cultural values, it showcases the power of women, faith, and community in shaping a more peaceful and sustainable future for Kenya and beyond.`,
    ],
  },
  {
    id: 3,
    title: "Capacity Building for Gender Mainstreaming in Climate Action and Dissemination of the NGCCAP 2025-2027 Report",
    image: "/Climate Change.JPG",
    alt: "NGCCAP Gender Mainstreaming Project",
    tags: ["Gender Mainstreaming", "Climate Governance", "Capacity Building", "NDC Partnership"],
    partner: "NDC Partnership, State Department for Gender and Affirmative Action, State Department for Environment and Climate Action",
    status: "Completed",
    paragraphs: [
      `Africa CSID is committed to advancing gender‑responsive climate governance.`,
      `Implemented across five regions in Kenya — Pwani, LREB, Mount Kenya & Aberdares, North Rift, and South Eastern — the project reached 25 counties with support from the NDC Partnership, the State Department for Gender and Affirmative Action, and the State Department for Environment and Climate Action.`,
      `The initiative directly engaged over 300 participants, including county gender officers, planners, and disaster risk reduction focal points. Through participatory workshops and training, stakeholders were equipped with updated tools and a Gender Mainstreaming Guideline tailored to county contexts.`,
    ],
  },
];

export default async function ProjectsPage() {
  const wpProjects = await getProjects(20);
  const projects = wpProjects.length > 0 ? wpProjects : staticProjects;

  return <ProjectsClient projects={projects} />;
}
