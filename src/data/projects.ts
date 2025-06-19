export interface Project {
  name: string;
  hand: 'royalFlush' | 'straightFlush' | 'fullHouse';
  description: string;
  technologies: string[];
  impactCount: '1kplus' | '15kplus' | '100plus';
  impactType: 'users';
  complexity: 'high' | 'medium' | 'low';
  image: string;
  externalLink?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    name: "Premium Academy",
    hand: "royalFlush",
    description:
      "Premium Academy is a personal development e-learning platform built with React and Firebase. It includes secure video delivery via VdoCipher, AI-powered course recommendations, subscription management with Trelli, and payment integration with Epayco. I also developed a custom Python bot that syncs user roles with Discord via webhooks.",
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "TailwindCSS",
      "VdoCipher",
      "ePayco",
      "Trelli",
      "Discord API",
      "Vercel",
    ],
    impactCount: "1kplus",
    impactType: "users",
    complexity: "high",
    image: "/assets/projects/premiumacademy.png",
    externalLink: "https://premiumacademy.pro",
    slug: "premium-academy",
  },
  {
    name: "Arcopedicousa",
    hand: "straightFlush",
    description:
      "An e-commerce platform specializing in orthopedic footwear, receiving over 15,000 visits per month. Originally built on WordPress, the client requested a migration to AWS for improved scalability and performance. We successfully migrated the infrastructure, deploying the site on an EC2 instance and ensuring greater stability and load capacity.",
    technologies: ["AWS", "EC2", "WordPress"],
    impactCount: "15kplus",
    impactType: "users",
    complexity: "high",
    image: "/assets/projects/arcopedicousa.png",
    externalLink: "https://arcopedicousa.com",
    slug: "arcopedicousa",
  },
  {
    name: "Aprendizaje en Español - ITM (SidevSoft)",
    hand: "fullHouse",
    description:
      "An educational web platform to support people with hearing impairments in learning Spanish through interactive content and guidance from qualified teachers. As a freelance Frontend Developer, I was responsible for building the main views and developing mini-games using pure HTML, CSS, and JavaScript—without frameworks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    impactCount: "100plus",
    impactType: "users",
    complexity: "medium",
    image: "/assets/projects/aprendizajenespanol.png",
    slug: "itm",
  },
];
