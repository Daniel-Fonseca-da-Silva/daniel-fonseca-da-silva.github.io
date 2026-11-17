import type { Project } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'

export function Projects(projects: Project[]): SafeHtml {
  return Section({
    id: 'projects',
    title: 'Projects',
    children: html`<div class="grid grid--3">${projects.map((project) => ProjectCard(project))}</div>`,
  })
}
