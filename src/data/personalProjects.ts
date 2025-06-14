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
    slug?: string;
}

export const personalProjects: PersonalProject[] = [
    {
        name: "Zeiko Inventory Dashboard",
        description: "Modern dashboard for inventory, company, and user management with role-based access control.",
        technologies: ["React", "TypeScript", "Node.js", "Django", "PostgreSQL", "Material UI"],
        image: "/src/assets/projects/inventory-dashboard.png",
        slug: "inventory-dashboard",
        details: {
            longDescription: "I developed a fullstack application for inventory and company management. It allows users (with admin or external roles) to manage products, inventories, companies, and users from an intuitive dashboard. Includes JWT authentication, permission control, entity editing and creation, and real-time data visualization.",
            highlights: [
                "Management of products, inventory, companies, and users",
                "Role-based access control (admin/external) and JWT authentication",
                "Modern and responsive interface with Material UI",
                "Full CRUD and permission-protected navigation",
                "Data export and advanced visualization",
            ],
            screenshots: [
                "/src/assets/projects/inventory-dashboard.png"
            ],
        },
    },
    {
        name: "Discotek",
        description: "A mobile application for discovering and exploring nightclubs with real-time location tracking and comprehensive club information.",
        technologies: [
            "React Native",
            "TypeScript",
            "Expo",
            "React Navigation",
            "expo-location",
        ],
        image: "/src/assets/projects/discotek.png",
        slug: "discotek",
        details: {
            longDescription: "I built a mobile application that helps users discover and explore nightclubs in various locations. The app features real-time GPS location tracking, distance calculation, and comprehensive club information including pricing, capacity, and opening hours. Users can search and filter clubs based on various criteria, with automatic sorting by proximity to their current location.",
            highlights: [
                "Advanced search and filtering by name, location, and price",
                "Real-time GPS location tracking and distance calculation",
                "Detailed club cards with comprehensive information",
                "Location-based sorting and distance display",
                "Mobile-first design with smooth navigation"
            ],
            screenshots: [
                "/src/assets/projects/discotek.png",
                "/src/assets/projects/dk-1.png",
                "/src/assets/projects/dk-2.png",
            ]
        }
    },
    {
        "name": "Easylife",
        "description": "A mobile app for booking, tracking, and managing professional services with real-time updates and map integration.",
        "technologies": [
            "React Native",
            "TypeScript",
            "Firebase",
            "React Native Maps",
            "NativeWind",
        ],
        "image": "/src/assets/projects/easylife.png",
        "slug": "easylife",
        "details": {
            "longDescription": "Easylife is a comprehensive service management platform that enables users to request, track, and manage various professional services. The app features real-time service tracking, scheduling capabilities, and a user-friendly interface for managing service requests. Users can browse available services, schedule appointments, track service providers in real-time, and rate their experiences.",
            "highlights": [
                "Real-time service tracking with map integration",
                "Service scheduling and management",
                "User authentication and profile management",
                "Service provider rating system",
                "Interactive map interface for service location",
                "Push notifications for service updates",
                "Multi-language support (Spanish/English)",
                "Social media authentication integration"
            ],
            "screenshots": [
                "/src/assets/projects/easylife.png",
                "/src/assets/projects/easylife-1.png",
                "/src/assets/projects/easylife-2.png",
            ]
        }
    }
]; 