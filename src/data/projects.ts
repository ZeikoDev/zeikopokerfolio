export interface Project {
    name: string;
    hand: string;
    description: string;
    technologies: string[];
    impact: string;
    complexity: string;
    image: string;
    externalLink?: string;
    slug: string;
}

export const projects: Project[] = [
    {
        name: 'Premium Academy',
        hand: 'Royal Flush',
        description: 'Premium Academy is a personal development e-learning platform built with React and Firebase. It includes secure video delivery via VdoCipher, AI-powered course recommendations, subscription management with Trelli, and payment integration with Epayco. I also developed a custom Python bot that syncs user roles with Discord via webhooks.',
        technologies: ['React', 'JavaScript', 'Firebase', 'TailwindCSS','VdoCipher' , 'ePayco','Trelli','Discord API','Vercel'],
        impact: '1k+ users',
        complexity: 'High',
        image: '/src/assets/proyects/premiumacademy.png',
        externalLink: 'https://premiumacademy.pro',
        slug: 'premium-academy',
    },
    {
        name: 'Arcopedicousa',
        hand: 'Straight Flush',
        description: 'An e-commerce platform specializing in orthopedic footwear, receiving over 15,000 visits per month. Originally built on WordPress, the client requested a migration to AWS for improved scalability and performance. We successfully migrated the infrastructure, deploying the site on an EC2 instance and ensuring greater stability and load capacity.',
        technologies: ['AWS', 'EC2','WordPress'],
        impact: '15k+ users',
        complexity: 'High',
        image: '/src/assets/proyects/Arcopedicousa.png',
        externalLink: 'https://arcopedicousa.com',
        slug: 'arcopedicousa',
    },
    {
        name: 'Aprendizaje en Español - ITM (SidevSoft)',
        hand: 'Full House',
        description: 'An educational web platform to support people with hearing impairments in learning Spanish through interactive content and guidance from qualified teachers. As a freelance Frontend Developer, I was responsible for building the main views and developing mini-games using pure HTML, CSS, and JavaScript—without frameworks.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        impact: '100+ users',
        complexity: 'Medium',
        image: '/src/assets/proyects/aprendizajenespanol.png',
        slug: 'itm',
    },
]; 