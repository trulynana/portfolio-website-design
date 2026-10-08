export const profile = {
  name: 'Nana Sarpong',
  role: 'Full Stack Engineer',
  email: 'sarpong.nana@northeastern.edu',
  linkedin: 'https://linkedin.com/in/nana-sarpong/',
}

export const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'REST & GraphQL APIs',
  'SQL & NoSQL Databases',
  'Cloud & DevOps',
  'System Design',
]

export type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  context: string
  period: string
}

export const projects: Project[] = [
  {
    title: 'FlowState',
    context: 'Personal Project',
    period: 'Jun 2025 – Present',
    description:
      'A responsive task management app with multi-state progress tracking and task-specific timers, built to keep students engaged with deadlines and in a deep-work flow.',
    tags: ['React.js', 'Bulma', 'JavaScript'],
    repoUrl: 'https://github.com/trulynana/FlowState',
  },
  {
    title: 'Jobify',
    context: 'RIT Coursework',
    period: 'Apr 2026 – May 2026',
    description:
      'A remote job finder that pulls real-time listings from the Jobicy API, with embedded search filters, form validation, and a status tracker for positions you have applied to.',
    tags: ['Flutter', 'Dart', 'Jobicy API'],
    repoUrl: 'https://github.com/trulynana/jobifyproject',
  },
  {
    title: 'PatchWork',
    context: 'RIT Senior Capstone',
    period: 'Aug 2025 – May 2026',
    description:
      'A Frankenstein-themed cooperative physical game built by a 12-person team. I developed front-end game mechanics, server-side scoring, and Arduino integrations for custom controllers.',
    tags: ['p5.js', 'Node.js', 'C++', 'Arduino UNO R4'],
    liveUrl: 'https://patchwork.framer.website/',
  },
]

export type Degree = {
  degree: string
  school: string
  location: string
  period: string
  status: string
  description: string
  url?: string
}

export const education: Degree[] = [
  {
    degree: 'Master of Science in Software Engineering Systems',
    school: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Expected May 2028',
    status: 'In progress',
    description:
      'Graduate coursework focused on software architecture, scalable systems design, and modern engineering practices.',
  },
  {
    degree: 'Bachelor of Science in New Media Interactive Development',
    school: 'Rochester Institute of Technology',
    location: 'Rochester, NY',
    period: 'Aug 2022 – May 2026',
    status: 'Completed',
    description:
      'Coursework centered on building interactive applications across different media and devices, blending programming, interface design, and responsive development.',
    url: 'https://www.rit.edu/study/new-media-interactive-development-bs',
  },
]
