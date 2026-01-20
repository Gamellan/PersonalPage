export type Language = 'es' | 'en';

export const translations = {
  en: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',

    hero: {
      seniority: 'Backend & Full-Stack · 8+ years',
      downloadCV: 'Download CV',
      writeMe: 'Write me',
    },

    sections: {
      aboutTitle: 'About',
      aboutSubtitle: 'Results-driven professional',
      skillsTitle: 'Skills',
      skillsSubtitle: 'Technologies & practices',
      experienceTitle: 'Experience',
      experienceSubtitle: 'Key roles & achievements',
      projectsTitle: 'Projects',
      projectsSubtitle: 'Tangible impact',
      educationTitle: 'Education',
      educationSubtitle: 'Studies & certifications',
      contactTitle: 'Contact',
      contactSubtitle: 'Let\'s discuss your project',
    },

    contact: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      languages: 'Languages',
      languagesValue: 'Spanish (Native), English (C1)',
    },

    profile: {
      name: 'Antonio Regidor Ballesteros',
      title: 'Software Developer',
      location: 'Madrid, Spain',
      email: 'aregidorballesteros@gmail.com',
      phone: '+34 626 189 187',
      summary:
        'Software developer with backend and full-stack experience, specialized in modernizing legacy systems, building scalable APIs and delivering production-quality solutions. Open to international relocation and eager to contribute in collaborative teams.',
      objective:
        'Contribute to innovative teams solving real problems with clear and maintainable code, backed by data and best practices.',
    },

    skills: {
      backend: 'Backend',
      frontend: 'Frontend',
      dataCloud: 'Data & Cloud',
      practices: 'Practices',
      tools: 'Tools',
    },

    experiences: [
      {
        role: 'Software Developer',
        company: 'Grupo Reacciona',
        location: 'Las Rozas, Spain',
        period: '2025 – Present',
        highlights: [
          'Migration of legacy ASP.Net code to Python and Django, modernizing critical services.',
          'Data process automation with pandas and AWS deployments.',
        ],
      },
      {
        role: 'Software Developer',
        company: 'Re-Inventa',
        location: 'Madrid, Spain',
        period: '2018 – 2025',
        highlights: [
          'REST APIs and web apps with Node.js, Express and MySQL, delivered in fast cycles.',
          'Automation tools with .NET, Python and Node.js to reduce manual tasks and errors.',
          'BPO integrations: on-screen data, result storage and reporting with key metrics.',
          'Voice bots and softphone integrations to route calls and improve experience.',
          'Led workshops with clients and on-site international deployments ensuring adoption.',
        ],
      },
      {
        role: 'Web Developer',
        company: 'Tictum Innovation and Technology',
        location: 'Madrid, Spain',
        period: '2017 – 2018',
        highlights: [
          'Asynchronous video interview platform with Java, Spring, Hibernate and JavaScript.',
          '7 months of employment following internship, contributing to backend and frontend.',
        ],
      },
    ],

    projects: [
      {
        name: 'Legacy to Python/Django Migration',
        description:
          'Refactor of ASP.Net services to Django, simplifying code, reducing complexity and enabling faster deployments.',
        impact: 'Lower delivery and maintenance time by standardizing services and tests.',
      },
      {
        name: 'BPO Automation & Reporting',
        description:
          'BPO platform integrations to capture call data, store results and generate reports with clear KPIs.',
        impact: 'Performance visibility and data-driven decisions for operations teams.',
      },
      {
        name: 'Voice Bots & Softphone Integrations',
        description:
          'Design and implementation of bots for inbound and outbound calls, with routing and result capture.',
        impact: 'Improved response times and reduced manual load in contact centers.',
      },
    ],

    education: [
      {
        title: 'Technical Specialist in Multiplatform Application Development',
        place: 'Centro de estudios San Román, Madrid',
        period: '2014 – 2016',
      },
      {
        title: 'Advanced Cybersecurity in Operation Technologies Environments',
        place: 'Aprendea',
        period: '2025',
      },
      {
        title: 'Web Application Development',
        place: 'Tictum Innovation and Technology',
        period: '2017',
      },
      {
        title: 'Secondary Education',
        place: 'Madrid, Spain',
        period: '',
      },
    ],
  },

  es: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    education: 'Formación',
    contact: 'Contacto',

    hero: {
      seniority: 'Backend & Full-Stack · 8+ años',
      downloadCV: 'Descargar CV',
      writeMe: 'Escríbeme',
    },

    sections: {
      aboutTitle: 'Sobre mí',
      aboutSubtitle: 'Profesional orientado a resultados',
      skillsTitle: 'Habilidades',
      skillsSubtitle: 'Tecnologías y prácticas',
      experienceTitle: 'Experiencia',
      experienceSubtitle: 'Roles clave y logros',
      projectsTitle: 'Proyectos',
      projectsSubtitle: 'Impacto tangible',
      educationTitle: 'Formación',
      educationSubtitle: 'Estudios y certificaciones',
      contactTitle: 'Contacto',
      contactSubtitle: 'Hablemos de tu proyecto',
    },

    contact: {
      email: 'Correo',
      phone: 'Teléfono',
      location: 'Ubicación',
      languages: 'Idiomas',
      languagesValue: 'Español (Nativo), Inglés (C1)',
    },

    profile: {
      name: 'Antonio Regidor Ballesteros',
      title: 'Desarrollador de Software',
      location: 'Madrid, España',
      email: 'aregidorballesteros@gmail.com',
      phone: '+34 626 189 187',
      summary:
        'Desarrollador de software con experiencia en backend y full-stack, especializado en modernizar sistemas legacy, construir APIs escalables y llevar soluciones a producción con calidad. Abierto a relocalización internacional y a aportar en equipos colaborativos.',
      objective:
        'Contribuir en equipos innovadores resolviendo problemas reales con código claro y mantenible, apoyado en datos y buenas prácticas.',
    },

    skills: {
      backend: 'Backend',
      frontend: 'Frontend',
      dataCloud: 'Datos y cloud',
      practices: 'Prácticas',
      tools: 'Herramientas',
    },

    experiences: [
      {
        role: 'Desarrollador de Software',
        company: 'Grupo Reacciona',
        location: 'Las Rozas, España',
        period: '2025 – Actualidad',
        highlights: [
          'Migración de código legacy ASP.Net a Python y Django, modernizando servicios críticos.',
          'Automatización de procesos de datos con pandas y despliegues en AWS.',
        ],
      },
      {
        role: 'Desarrollador de Software',
        company: 'Re-Inventa',
        location: 'Madrid, España',
        period: '2018 – 2025',
        highlights: [
          'APIs REST y apps web con Node.js, Express y MySQL, entregadas con ciclos rápidos.',
          'Automatizaciones con .NET, Python y Node.js para reducir tareas manuales y errores.',
          'Integraciones BPO: datos en pantalla, almacenamiento de resultados y reporting con métricas clave.',
          'Bots de voz e integraciones de softphone para enrutar llamadas y mejorar la experiencia.',
          'Lideré talleres con clientes y despliegues on-site internacionales asegurando adopción.',
        ],
      },
      {
        role: 'Desarrollador Web',
        company: 'Tictum Innovation and Technology',
        location: 'Madrid, España',
        period: '2017 – 2018',
        highlights: [
          'Plataforma de entrevistas de video asincrónicas con Java, Spring, Hibernate y JavaScript.',
          '7 meses de empleo tras prácticas, participando en backend y frontend.',
        ],
      },
    ],

    projects: [
      {
        name: 'Migración legacy a Python/Django',
        description:
          'Refactor de servicios ASP.Net a Django, simplificando código, reduciendo complejidad y habilitando despliegues más rápidos.',
        impact: 'Menor tiempo de entrega y mantenimiento al estandarizar servicios y tests.',
      },
      {
        name: 'Automatización BPO y reporting',
        description:
          'Integraciones con plataformas BPO para capturar datos de llamadas, almacenarlos y generar informes con KPIs claros.',
        impact: 'Visibilidad de rendimiento y decisiones basadas en datos para equipos de operaciones.',
      },
      {
        name: 'Bots de voz e integraciones de softphone',
        description:
          'Diseño e implementación de bots para llamadas entrantes y salientes, con ruteo y captura de resultados.',
        impact: 'Mejora de tiempos de respuesta y reducción de carga manual en centros de contacto.',
      },
    ],

    education: [
      {
        title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
        place: 'Centro de estudios San Román, Madrid',
        period: '2014 – 2016',
      },
      {
        title: 'Ciberseguridad avanzada en entornos de las tecnologías de la operación',
        place: 'Aprendea',
        period: '2025',
      },
      {
        title: 'Desarrollo de aplicaciones con tecnología web',
        place: 'Tictum Innovation and Technology',
        period: '2017',
      },
      {
        title: 'Bachillerato',
        place: 'Madrid, España',
        period: '',
      },
    ],
  },
};
