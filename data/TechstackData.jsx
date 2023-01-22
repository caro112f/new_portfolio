import { TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaSass, FaGithub, FaFigma, FaTrello } from "react-icons/fa";
import { SiAntdesign, SiTailwindcss, SiTypescript, SiChakraui, SiNetlify, SiAdobephotoshop, SiSass, SiWordpress, SiNpm } from "react-icons/si";
import { DiScrum } from "react-icons/di"

const color = "#881337";
//Levels: 1= some knowledge, 2= good knowledge, 3= experiences, 4= very experienced, 5= expert
export const techstack = [
  {
    id: 1,
    title: "NextJs",
    logo: <TbBrandNextjs size={40} color={color} />,
    level: 3,
  },
  {
    id: 2,
    title: "React",
    logo: <FaReact size={40} color={color} />,
    level: 3,
  },
  {
    id: 3,
    title: "Tailwind",
    logo: <SiTailwindcss size={40} color={color} />,
    level: 3,
  },
  {
    id: 4,
    title: "SASS",
    logo: <SiSass size={40} color={color} />,
    level: 2,
  },
  {
    id: 5,
    title: "Typescript",
    logo: <SiTypescript size={40} color={color} />,
    level: 2,
  },
  {
    id: 6,
    title: "Chakra UI",
    logo: <SiChakraui size={40} color={color} />,
    level: 3,
  },
  {
    id: 7,
    title: "Ant Design",
    logo: <SiAntdesign size={40} color={color} />,
    level: 3,
  },
  {
    id: 8,
    title: "Wordpress",
    logo: <SiWordpress size={40} color={color} />,
    level: 3,
  },
  {
    id: 9,
    title: "Github",
    logo: <FaGithub size={40} color={color} />,
    level: 4,
  },
  {
    id: 10,
    title: "Netlify",
    logo: <SiNetlify size={40} color={color} />,
    level: 4,
  },
  {
    id: 11,
    title: "NPM",
    logo: <SiNpm size={40} color={color} />,
    level: 4,
  },
  {
    id: 12,
    title: "Figma",
    logo: <FaFigma size={40} color={color} />,
    level: 3,
  },
  {
    id: 13,
    title: "Scrum",
    logo: <DiScrum size={40} color={color} />,
    level: 3,
  },
  {
    id: 14,
    title: "Trello",
    logo: <FaTrello size={40} color={color} />,
    level: 3,
  },
];
