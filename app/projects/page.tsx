import { Metadata } from "next";

import ProjectShowcase, { ProjectProps } from "@/components/project-showcase";
import { constructMetadata } from "@/utils";

export const metadata: Metadata = constructMetadata({
  title: "Projects",
  description: "Projects I have worked on",
  canonical: "/projects",
});

const projects: ProjectProps[] = [
  {
    title: "Zephyrus CO2 Ejection System",
    description:
      "Zephyrus: Designed and developed a CO2 ejection system for rocket recovery",
    additionalInfo: [
      "Utilizes a pyrogenic charge to drive a piston, puncturing CO2 tanks to pressurize the recovery compartment, enabling rocket separation and decelerator deployment",
      "Conducted system design and analysis to meet performance requirements",
      "Manufactured and ground-tested before launch",
      "Managed operations and team progress",
    ],
    links: [],
    highlights: [
      {
        imageUrl: "/projects/zephyrus/horizontal-zephyrus.jpeg",
        title: "Horizontal Zephyrus",
      },
      {
        imageUrl: "/projects/zephyrus/vertical-zephyrus.jpeg",
        title: "Vertical Zephyrus",
      },
      {
        imageUrl: "/projects/zephyrus/vertical-design.jpeg",
        title: "Vertical Design",
      },
      {
        imageUrl: "/projects/zephyrus/system_assembly.jpeg",
        title: "System Assembly",
      },
      {
        imageUrl: "/projects/zephyrus/overall_drogue.jpeg",
        title: "Overall Drogue",
      },
      {
        imageUrl: "/projects/zephyrus/drawing_mount.jpeg",
        title: "Drawing Mount",
      },
      {
        imageUrl: "/projects/zephyrus/drawing_cap.jpeg",
        title: "Drawing Cap",
      },
      {
        imageUrl: "/projects/zephyrus/drawing_puncture.jpeg",
        title: "Drawing Puncture",
      },
    ],
  },
  {
    title: "Parachute Production",
    description:
      "DGB Parachute: Led the design, development, and testing of an DGB-type parachute for rocket recovery. The SRAD parachute represents a novel challenge for the team. A disk-gap-band design has been selected as the drogue parachute for the CR25 Aether. Manufacturing began in early 2025.",
    additionalInfo: [
      "Managed the project lifecycle, including cost tracking, resource procurement, and stakeholder engagement to ensure timely delivery",
      "The design process involved iterative analysis to meet performance requirements, while descent characteristics were empirically validated through testing",
      "Oversaw the manufacturing process, which included precise sewing and stitching of fabric panels (gores) to ensure structural integrity and functionality",
    ],
    links: [],
    highlights: [
      {
        imageUrl: "/projects/parachute-production/parachute-1.jpeg",
        title: "Parachute 1",
      },
      {
        imageUrl: "/projects/parachute-production/parachute-2.jpeg",
        title: "Parachute 2",
      },
      {
        imageUrl: "/projects/parachute-production/parachute-3.jpeg",
        title: "Parachute 3",
      }
    ],
  },
  {
    title: "CF Reinforced 3D Print Onyx Parabolic Rocket Nose Cone",
    description:
      "The nose cone shown was used for the rocket. The shape is parabolic chosen because it is economical and sufficient for reducing aerodynamic drag, as the pointy end is easier to manufacture and machine. The entire part is sectioned into multiple pieces to account for the height range the 3D printer could operate within, and then the sections were bonded to each other with aerospace-grade epoxy. Traveling at transonic speeds, the part proved structurally sound for aerospace flights.",
    links: [],
    highlights: [
      {
        imageUrl: "/projects/rocket-nose/cone.png",
        title: "Nose 1",
      },
      {
        imageUrl: "/projects/rocket-nose/cone2.png",
        title: "Nose 2",
      },
    ],
  },
  {
    title: "Lazarus Rocket Complete Rocket Assembly",
    description:
      "Complete Rocket Assembly of the 30000 ft high power altitude rocket, set to launch in June. The overall assembly consists of several subassemblies, including Payload, Propulsion system, Avionics and Avionics Bay, Recovery system and Structural configurations.",
    links: [],
    highlights: [
      {
        imageUrl: "/projects/lazarus-rocket/CR24-lazarus.png",
        title: "CR24 Lazarus",
      },
      {
        imageUrl: "/projects/lazarus-rocket/CR24-broken.png",
        title: "CR24 Broken",
      },
      {
        imageUrl: "/projects/lazarus-rocket/group.png",
        title: "Launchpad Team",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ProjectShowcase projects={projects} />
    </div>
  );
}
