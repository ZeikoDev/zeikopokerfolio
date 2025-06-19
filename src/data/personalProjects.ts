export interface ProjectDetails {
    longDescription: { en: string; es: string };
    highlights: { en: string[]; es: string[] };
    screenshots: string[];
}

export interface PersonalProject {
    slug: string;
    name: { en: string; es: string };
    description: { en: string; es: string };
    technologies: string[];
    image: string;
    externalUrl?: string;
    details: ProjectDetails;
}

export const personalProjects: PersonalProject[] = [
    {
        slug: "inventory-dashboard",
        name: {
            en: "Zeiko Inventory Dashboard",
            es: "Panel de Gestión de Inventario"
        },
        description: {
            en: "Modern dashboard for inventory, company, and user management with role-based access control.",
            es: "Panel moderno para gestión de inventario, empresas y usuarios con control de acceso por roles."
        },
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Django",
            "PostgreSQL",
            "Material UI",
        ],
        image: "/assets/projects/inventory-dashboard.png",
        externalUrl: "https://github.com/zeikodev/zeiko-inventory-dashboard",
        details: {
            longDescription: {
                en: "I developed a fullstack application for inventory and company management. It allows users (with admin or external roles) to manage products, inventories, companies, and users from an intuitive dashboard. Includes JWT authentication, permission control, entity editing and creation, and real-time data visualization.",
                es: "Desarrollé una aplicación fullstack para la gestión de inventarios y empresas. Permite a los usuarios (con roles de admin o externo) gestionar productos, inventarios, empresas y usuarios desde un panel intuitivo. Incluye autenticación JWT, control de permisos, edición y creación de entidades, y visualización de datos en tiempo real."
            },
            highlights: {
                en: [
                    "Management of products, inventory, companies, and users",
                    "Role-based access control (admin/external) and JWT authentication",
                    "Modern and responsive interface with Material UI",
                    "Full CRUD and permission-protected navigation",
                    "Data export and advanced visualization"
                ],
                es: [
                    "Gestión de productos, inventario, empresas y usuarios",
                    "Control de acceso por roles (admin/externo) y autenticación JWT",
                    "Interfaz moderna y responsiva con Material UI",
                    "CRUD completo y navegación protegida por permisos",
                    "Exportación de datos y visualización avanzada"
                ]
            },
            screenshots: ["/assets/projects/inventory-dashboard.png"]
        }
    },
    {
        slug: "discotek",
        name: {
            en: "Discotek",
            es: "Discotek"
        },
        description: {
            en: "A mobile application for discovering and exploring nightclubs with real-time location tracking and comprehensive club information.",
            es: "Aplicación móvil para descubrir y explorar discotecas con seguimiento de ubicación en tiempo real e información completa de los clubes."
        },
        technologies: [
            "React Native",
            "TypeScript",
            "Expo",
            "React Navigation",
            "expo-location",
        ],
        image: "/assets/projects/discotek.png",
        externalUrl: "https://github.com/zeikodev/DK",
        details: {
            longDescription: {
                en: "I built a mobile application that helps users discover and explore nightclubs in various locations. The app features real-time GPS location tracking, distance calculation, and comprehensive club information including pricing, capacity, and opening hours. Users can search and filter clubs based on various criteria, with automatic sorting by proximity to their current location.",
                es: "Construí una aplicación móvil que ayuda a los usuarios a descubrir y explorar discotecas en varias ubicaciones. La app incluye seguimiento de ubicación GPS en tiempo real, cálculo de distancias e información completa de los clubes, incluyendo precios, capacidad y horarios. Los usuarios pueden buscar y filtrar clubes según varios criterios, con ordenamiento automático por proximidad."
            },
            highlights: {
                en: [
                    "Advanced search and filtering by name, location, and price",
                    "Real-time GPS location tracking and distance calculation",
                    "Detailed club cards with comprehensive information",
                    "Location-based sorting and distance display",
                    "Mobile-first design with smooth navigation"
                ],
                es: [
                    "Búsqueda y filtrado avanzado por nombre, ubicación y precio",
                    "Seguimiento de ubicación GPS en tiempo real y cálculo de distancias",
                    "Tarjetas detalladas de clubes con información completa",
                    "Ordenamiento por proximidad y visualización de distancias",
                    "Diseño mobile-first con navegación fluida"
                ]
            },
            screenshots: [
                "/assets/projects/dk-1.png",
                "/assets/projects/dk-2.png"
            ]
        }
    },
    {
        slug: "easylife",
        name: {
            en: "Easylife",
            es: "Easylife"
        },
        description: {
            en: "A mobile app for booking, tracking, and managing professional services with real-time updates and map integration.",
            es: "App móvil para reservar, rastrear y gestionar servicios profesionales con actualizaciones en tiempo real e integración de mapas."
        },
        technologies: [
            "React Native",
            "TypeScript",
            "Firebase",
            "React Native Maps",
            "NativeWind"
        ],
        image: "/assets/projects/easylife.png",
        externalUrl: "https://github.com/zeikodev/easylife",
        details: {
            longDescription: {
                en: "Easylife is a comprehensive service management platform that enables users to request, track, and manage various professional services. The app features real-time service tracking, scheduling capabilities, and a user-friendly interface for managing service requests. Users can browse available services, schedule appointments, track service providers in real-time, and rate their experiences.",
                es: "Easylife es una plataforma integral de gestión de servicios que permite a los usuarios solicitar, rastrear y gestionar diversos servicios profesionales. La app incluye seguimiento de servicios en tiempo real, programación de citas y una interfaz amigable para la gestión de solicitudes. Los usuarios pueden explorar servicios disponibles, agendar citas, rastrear proveedores en tiempo real y calificar sus experiencias."
            },
            highlights: {
                en: [
                    "Real-time service tracking with map integration",
                    "Service scheduling and management",
                    "User authentication and profile management",
                    "Service provider rating system",
                    "Interactive map interface for service location",
                    "Push notifications for service updates",
                    "Multi-language support (Spanish/English)",
                    "Social media authentication integration"
                ],
                es: [
                    "Seguimiento de servicios en tiempo real con integración de mapas",
                    "Programación y gestión de servicios",
                    "Autenticación de usuarios y gestión de perfiles",
                    "Sistema de calificación de proveedores",
                    "Interfaz de mapa interactivo para ubicación de servicios",
                    "Notificaciones push para actualizaciones de servicios",
                    "Soporte multilenguaje (español/inglés)",
                    "Integración de autenticación con redes sociales"
                ]
            },
            screenshots: [
                "/assets/projects/easylife-1.png",
                "/assets/projects/easylife-2.png"
            ]
        }
    },
    {
        slug: "patient-management-system",
        name: {
            en: "Patient Management System",
            es: "Sistema de Gestión de Pacientes"
        },
        description: {
            en: "A comprehensive desktop application for managing patient records, medical history, and diagnoses with an intuitive GUI interface.",
            es: "Aplicación de escritorio para gestionar historiales médicos, pacientes y diagnósticos con una interfaz gráfica intuitiva."
        },
        technologies: ["Python", "Tkinter", "JSON", "datetime"],
        image: "/assets/projects/patient-managment.png",
        externalUrl: "https://github.com/ZeikoDev/Manejo-de-pacientes",
        details: {
            longDescription: {
                en: "A robust patient management system built with Python and Tkinter that enables healthcare providers to efficiently manage patient records. The application features a user-friendly interface for adding, editing, and searching patient information. It includes comprehensive medical history tracking, automated diagnosis based on symptoms, and secure local data storage using JSON format. The system is designed to streamline healthcare record management while maintaining data integrity and accessibility.",
                es: "Un sistema robusto de gestión de pacientes construido con Python y Tkinter que permite a los profesionales de la salud gestionar eficientemente los registros médicos. La aplicación cuenta con una interfaz amigable para agregar, editar y buscar información de pacientes. Incluye seguimiento completo de historial médico, diagnóstico automatizado basado en síntomas y almacenamiento seguro de datos en formato JSON. El sistema está diseñado para optimizar la gestión de registros médicos manteniendo la integridad y accesibilidad de los datos."
            },
            highlights: {
                en: [
                    "Complete patient information management (personal details, contact info, medical history)",
                    "Automated diagnosis system based on symptom analysis",
                    "Comprehensive medical history tracking with date stamps",
                    "Advanced search functionality with multiple criteria",
                    "Secure local data storage with JSON format",
                    "User-friendly GUI interface with intuitive navigation",
                    "Real-time data validation and error handling",
                    "Detailed patient view with complete medical history"
                ],
                es: [
                    "Gestión completa de información del paciente (datos personales, contacto, historial médico)",
                    "Sistema de diagnóstico automatizado basado en análisis de síntomas",
                    "Seguimiento completo de historial médico con fechas",
                    "Búsqueda avanzada con múltiples criterios",
                    "Almacenamiento seguro de datos en formato JSON",
                    "Interfaz gráfica amigable e intuitiva",
                    "Validación de datos en tiempo real y manejo de errores",
                    "Vista detallada del paciente con historial médico completo"
                ]
            },
            screenshots: [
                "/assets/projects/patient-managment.png",
                "/assets/projects/pm-1.png",
                "/assets/projects/pm-2.png",
                "/assets/projects/pm-3.png"
            ]
        }
    }
];
