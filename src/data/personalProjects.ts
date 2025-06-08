export interface ProjectDetails {
    longDescription: string;
    highlights: string[];
    screenshots: string[];
}

export interface PersonalProject {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    details: ProjectDetails;
    externalUrl?: string;
}

export const personalProjects: PersonalProject[] = [
    {
        name: "Poker Stats Analyzer",
        description: "Herramienta para analizar manos y estadísticas de poker en tiempo real.",
        technologies: ["Node.js", "PostgreSQL", "Chart.js"],
        image: "",
        details: {
            longDescription: "Desarrollé una app para jugadores de poker que permite cargar y analizar manos, ver estadísticas avanzadas y compartir resultados. Incluye autenticación, dashboards y exportación de datos.",
            highlights: [
                "Carga y análisis de manos en tiempo real",
                "Dashboards personalizables",
                "Exportación a CSV y PDF",
            ],
            screenshots: [],
        },
    },
]; 