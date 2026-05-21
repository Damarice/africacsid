import { getPlatforms } from "@/lib/wordpress";
import PlatformsClient from "./PlatformsClient";

export const revalidate = 60;

// Static fallback platforms
const staticPlatforms = [
  {
    name: "African Food Systems Transformation Collective",
    acronym: "AFSTC",
    logo: "/images/AFSTC.png",
    description: "The Africa Centre for Sustainable Development (Africa CSID) is honored to join the African Food Systems Transformation Collective (AFSTC) as a member of the Advisory Committee of Experts.",
    details: "It is convened by the Africa Climate Foundation (ACF), chaired by UNESCO, and hosted by the DSI-NRF Centre of Excellence in Food Security at the University of the Western Cape. Since joining the collective, Africa CSID has actively contributed to shaping inclusive, sustainable food systems through collaborative policy development and stakeholder engagement.",
  },
  {
    name: "Just Rural Transition",
    acronym: "JRT",
    logo: "/images/JRT.png",
    description: "The Just Rural Transition (JRT) initiative serves as a collaborative platform that unites various stakeholders, including food producers, governments, businesses, investors, civil society organisations, and rural and indigenous communities.",
    details: "Their mission revolves around cultivating a global community of both public and private sector participants. This community collectively designs, implements, and scales comprehensive and inclusive approaches to tackle the issues faced by food systems.",
    objectives: [
      "Supporting farming, fishing, livestock-keeping, and indigenous communities in adapting to challenges.",
      "Providing sustainable, nutritious, and affordable food for all.",
      "Reducing global food loss and waste by half compared to 2019 levels.",
      "Recognizing the full value of natural capital in promoting human health and well-being.",
      "Halting the degradation of critical ecosystems and the loss of biodiversity.",
      "Contributing to a substantial portion of the required global carbon emissions reduction.",
      "Mobilizing substantial public and private financial support in pursuit of their vision.",
    ],
    endorsementLink: "https://justruraltransition.org/wp-content/uploads/sites/12/2022/03/JRT-_Endorsements_StatementsOfSupport-1.pdf",
  },
  {
    name: "Intersectoral Forum on Agrobiodiversity and Agroecology",
    acronym: "ISFAA",
    logo: "/images/ISFAA.png",
    description: "The Africa Centre for Sustainable Development is an active member of the Intersectoral Forum on Agrobiodiversity and Agroecology (ISFAA).",
    details: "ISFAA serves as a diverse and inclusive platform that brings together a wide array of stakeholders. The primary objective of ISFAA is to facilitate constructive discussions and collaborative efforts aimed at overcoming the challenges and constraints that our current food system encounters.",
  },
  {
    name: "Kenya Climate Smart Agriculture Multi Stakeholder Platform",
    acronym: "CSA MSP",
    logo: "/images/CSA MSP.png",
    description: "The Africa Centre for Sustainable Development (Africa CSID) is a member of the Kenya Climate Smart Agriculture Multi Stakeholder Platform (CSA MSP).",
    details: "This platform serves as a network of organizations dedicated to promoting Climate Smart Agriculture practices. Its primary objective revolves around facilitating collaboration among stakeholders engaged in Climate Smart Agriculture initiatives.",
  },
  {
    name: "Kenya Climate Change Working Group",
    acronym: "KCCWG",
    logo: "/images/KCCWG.jpeg",
    description: "Efforts to confront the consequences of climate change require a collaborative approach. The Kenya Climate Change Working Group was established in April 2009.",
    details: "This platform brings together members from diverse civil society organizations, donor partners, government departments, and agencies, all dedicated to addressing climate change and advocating for climate justice.",
    thematicGroups: [
      "Mitigation", "Technology Transfer", "Adaptation",
      "Gender and Capacity Building", "Youth and Marginalized Communities",
      "Climate Change Science and Negotiations", "Climate Finance and Transparency",
      "Wildlife and Tourism",
    ],
  },
];

export default async function PlatformsPage() {
  const wpPlatforms = await getPlatforms(20);
  const wpNames = new Set(wpPlatforms.map(p => p.name));
  const platforms = [...wpPlatforms, ...staticPlatforms.filter(p => !wpNames.has(p.name))];

  return <PlatformsClient platforms={platforms} />;
}
