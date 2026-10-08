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
}

// Replace these placeholders with your own projects and links.
export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Two',
    description:
      'A short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['React', 'Node.js', 'REST API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Three',
    description:
      'A short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['Python', 'Docker', 'AWS'],
    liveUrl: '#',
    repoUrl: '#',
  },
]
