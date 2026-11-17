export interface Link {
  label: string
  url: string
}

export interface Experience {
  role: string
  company: string
  from: number
  /** Omit when the role is current. */
  to?: number
  summary: string
  highlights: string[]
  stack: string[]
}

export interface Project {
  name: string
  description: string
  url: string
  stack: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  note?: string
}

export interface Metric {
  value: string
  label: string
  context: string
}

export interface FlowStep {
  label: string
  detail: string
}

export interface Architecture {
  title: string
  context: string
  caption: string
  steps: FlowStep[]
  /** Trade-offs behind the flow. Shown as a short list under the diagram. */
  decisions?: string[]
}

export interface Pillar {
  title: string
  description: string
}

export interface CvFile {
  file: string
  label: string
}

export interface Profile {
  name: string
  jobTitle: string
  summary: string
  about: string[]
  mainStack: string[]
  workAuthorization: string
  seoDescription: string
  email: string
  siteUrl: string
  photo: {
    src: string
    alt: string
  }
  cv: CvFile
  links: Link[]
  metrics: Metric[]
  experience: Experience[]
  architectures: Architecture[]
  projects: Project[]
  skills: SkillGroup[]
  pillars: Pillar[]
  education: Education[]
  certifications: string[]
}
