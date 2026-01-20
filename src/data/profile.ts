export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  description: string;
  impact: string;
  tech: string[];
};

export type Education = {
  title: string;
  place: string;
  period: string;
};

export const profile = {
  name: 'Antonio Regidor Ballesteros',
  title: 'Desarrollador de Software',
  seniority: 'Backend & Full-Stack · 8+ años',
  location: 'Madrid, España',
  email: 'aregidorballesteros@gmail.com',
  phone: '+34 626 189 187',
  photo: '/PersonalPage/yo_3.jpeg',
  summary:
    'Desarrollador de software con experiencia en backend y full-stack, especializado en modernizar sistemas legacy, construir APIs escalables y llevar soluciones a producción con calidad. Abierto a relocalización internacional y a aportar en equipos colaborativos.',
  objective:
    'Contribuir en equipos innovadores resolviendo problemas reales con código claro y mantenible, apoyado en datos y buenas prácticas.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/antonio-regidor-ballesteros-09741b150/',
    github: 'https://github.com/Gamellan',
  },
  cvLink: '/PersonalPage/CV-Antonio-Regidor.pdf',
};

export const skills = [
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'C#', 'REST APIs', 'Django', 'Express', 'Spring'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'HTML/CSS', 'Knockout'],
  },
  {
    category: 'Datos y cloud',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MariaDB', 'AWS (básico)', 'Azure'],
  },
  {
    category: 'Prácticas',
    items: ['Agile / Scrum', 'CI/CD basics', 'Integración BPO', 'Automatización de voz'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'REST', 'APIs', 'pandas'],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Desarrollador de Software',
    company: 'Grupo Reacciona',
    location: 'Las Rozas, España',
    period: '2025 – Actualidad',
    highlights: [
      'Migración de código legacy ASP.Net a Python y Django, modernizando servicios críticos.',
      'Automatización de procesos de datos con pandas y despliegues en AWS.',
    ],
    stack: ['Python', 'Django', 'pandas', 'AWS'],
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
    stack: ['Node.js', 'Express', 'MySQL', '.NET', 'Python', 'Azure', 'ASL'],
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
    stack: ['Java', 'Spring', 'Hibernate', 'JavaScript'],
  },
];

export const projects: Project[] = [
  {
    name: 'Migración legacy a Python/Django',
    description:
      'Refactor de servicios ASP.Net a Django, simplificando código, reduciendo complejidad y habilitando despliegues más rápidos.',
    impact: 'Menor tiempo de entrega y mantenimiento al estandarizar servicios y tests.',
    tech: ['Python', 'Django', 'pandas', 'AWS'],
  },
  {
    name: 'Automatización BPO y reporting',
    description:
      'Integraciones con plataformas BPO para capturar datos de llamadas, almacenarlos y generar informes con KPIs claros.',
    impact: 'Visibilidad de rendimiento y decisiones basadas en datos para equipos de operaciones.',
    tech: ['Node.js', 'Express', 'MySQL', 'Azure'],
  },
  {
    name: 'Bots de voz e integraciones de softphone',
    description:
      'Diseño e implementación de bots para llamadas entrantes y salientes, con ruteo y captura de resultados.',
    impact: 'Mejora de tiempos de respuesta y reducción de carga manual en centros de contacto.',
    tech: ['Node.js', 'ASL', 'Azure'],
  },
];

export const education: Education[] = [
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
];
