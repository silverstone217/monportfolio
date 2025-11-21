import {
  BriefcaseBusiness,
  FilePenLine,
  Home,
  Images,
  Mail,
  Palette,
  Phone,
  Truck,
  UserCircle,
} from "lucide-react";

export const HomeLinks = [
  {
    label: "Accueil",
    value: "/",
    icon: Home,
  },
  {
    label: "Biographie",
    value: "#bio",
    icon: UserCircle,
  },
  {
    label: "Projet",
    value: "#project",
    icon: BriefcaseBusiness,
  },
  {
    label: "Contact",
    value: "#contact",
    icon: Phone,
  },
];

export const MyProjects = [
  {
    label: "DELIVERS",
    link: "https://delivers.vercel.app/",
    github: "https://github.com/silverstone217/delivers",
    icon: Truck,
    tech: ["Next.js", "Typescript", "PostgreSql"],
  },

  {
    label: "SLASH",
    link: "https://github.com/silverstone217/slash",
    github: "https://github.com/silverstone217/slash",
    icon: Images,
    tech: ["React Native", "Typescript", "Expo"],
  },
  {
    label: "EMAIL-SENDER API",
    link: "https://github.com/silverstone217/email-sender-api",
    github: "https://github.com/silverstone217/email-sender-api",
    icon: Mail,
    tech: ["Node.js", "Typescript", "Express.js", "Nodemailer"],
  },

  {
    label: "DECO-COLOR",
    link: "https://deco-color.vercel.app/",
    github: "https://github.com/silverstone217/deco-color",
    icon: Palette,
    tech: ["Next.js", "Typescript", "Vercel AI"],
  },
  {
    label: "OCR-RESUME",
    link: "https://ocr-resume.vercel.app/",
    github: "https://github.com/silverstone217/ocr_resume",
    icon: FilePenLine,
    tech: ["Next.js", "Typescript", "Vercel AI"],
  },
];
