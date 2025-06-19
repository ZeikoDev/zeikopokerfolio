export interface Project {
  name: { en: string; es: string };
  hand: 'royalFlush' | 'straightFlush' | 'fullHouse';
  description: { en: string; es: string };
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
    name: {
      en: "Premium Academy",
      es: "Premium Academy"
    },
    hand: "royalFlush",
    description: {
      en: "Premium Academy is a personal development e-learning platform built with React and Firebase. It includes secure video delivery via VdoCipher, AI-powered course recommendations, subscription management with Trelli, and payment integration with Epayco. I also developed a custom Python bot that syncs user roles with Discord via webhooks.",
      es: "Premium Academy es una plataforma de e-learning para desarrollo personal construida con React y Firebase. Incluye entrega segura de videos vía VdoCipher, recomendaciones de cursos con IA, gestión de suscripciones con Trelli e integración de pagos con Epayco. También desarrollé un bot personalizado en Python que sincroniza roles de usuario con Discord vía webhooks."
    },
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
    name: {
      en: "Arcopedicousa",
      es: "Arcopedicousa"
    },
    hand: "straightFlush",
    description: {
      en: "An e-commerce platform specializing in orthopedic footwear, receiving over 15,000 visits per month. Originally built on WordPress, the client requested a migration to AWS for improved scalability and performance. We successfully migrated the infrastructure, deploying the site on an EC2 instance and ensuring greater stability and load capacity.",
      es: "Una plataforma de e-commerce especializada en calzado ortopédico, que recibe más de 15,000 visitas mensuales. Originalmente construida en WordPress, el cliente solicitó una migración a AWS para mejorar la escalabilidad y rendimiento. Migramos exitosamente la infraestructura, desplegando el sitio en una instancia EC2 y asegurando mayor estabilidad y capacidad de carga."
    },
    technologies: ["AWS", "EC2", "WordPress"],
    impactCount: "15kplus",
    impactType: "users",
    complexity: "high",
    image: "/assets/projects/arcopedicousa.png",
    externalLink: "https://arcopedicousa.com",
    slug: "arcopedicousa",
  },
  {
    name: {
      en: "Aprendizaje en Español - ITM (SidevSoft)",
      es: "Aprendizaje en Español - ITM (SidevSoft)"
    },
    hand: "fullHouse",
    description: {
      en: "An educational web platform to support people with hearing impairments in learning Spanish through interactive content and guidance from qualified teachers. As a freelance Frontend Developer, I was responsible for building the main views and developing mini-games using pure HTML, CSS, and JavaScript—without frameworks.",
      es: "Una plataforma web educativa para apoyar a personas con discapacidad auditiva en el aprendizaje del español a través de contenido interactivo y orientación de profesores calificados. Como desarrollador Frontend freelance, fui responsable de construir las vistas principales y desarrollar mini-juegos usando HTML, CSS y JavaScript puros—sin frameworks."
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    impactCount: "100plus",
    impactType: "users",
    complexity: "medium",
    image: "/assets/projects/aprendizajenespanol.png",
    slug: "itm",
  },
];
