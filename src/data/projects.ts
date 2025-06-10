export interface Project {
    name: string;
    hand: string;
    description: string;
    technologies: string[];
    impact: string;
    complexity: string;
    image: string;
    externalLink?: string;
}

export const projects: Project[] = [
    {
        name: 'Premium Academy',
        hand: 'Royal Flush',
        description: 'A full-featured e-commerce platform with real-time inventory and payment processing',
        technologies: ['React', 'JavaScript', 'Firebase', 'TailwindCSS'],
        impact: '2k+ users',
        complexity: 'High',
        image: '/src/assets/proyects/premiumacademy.png',
        externalLink: 'https://premiumacademy.pro',
    },
    {
        name: 'Arcopedicousa',
        hand: 'Straight Flush',
        description: 'WebSocket-based chat application with end-to-end encryption',
        technologies: ['AWS', 'S3', 'Socket.io'],
        impact: '3k+ users',
        complexity: 'Medium',
        image: '/src/assets/proyects/Arcopedicousa.png',
        externalLink: 'https://arcopedicousa.com',
    },
    {
        name: 'Aprendizaje en español ITM',
        hand: 'Full House',
        description: 'Project management tool with real-time collaboration features',
        technologies: ['React', 'GraphQL', 'PostgreSQL', 'Docker'],
        impact: '100+ users',
        complexity: 'Medium',
        image: '/src/assets/proyects/aprendizajenespanol.png',
    },
]; 