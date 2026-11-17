import type { Project } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { TagList } from './TagList'

export function ProjectCard(project: Project): SafeHtml {
  return html`
    <article class="card">
      <h3 class="card__title">${project.name}</h3>
      <p>${project.description}</p>
      ${TagList({ label: `${project.name} technologies`, items: project.stack })}
      <a
        class="card__link"
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit ${project.name}<span class="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  `
}
