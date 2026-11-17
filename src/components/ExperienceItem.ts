import type { Experience } from '../domain/profile'
import { formatPeriod } from '../domain/insights'
import { html, type SafeHtml } from '../lib/html'
import { TagList } from './TagList'

export function ExperienceItem(experience: Experience): SafeHtml {
  return html`
    <li class="timeline__item">
      <article class="timeline__card">
        <header class="timeline__header">
          <div>
            <h3 class="timeline__title">${experience.role}</h3>
            <p class="timeline__company">${experience.company}</p>
          </div>
          <time class="timeline__period">${formatPeriod(experience)}</time>
        </header>
        <p class="timeline__summary">${experience.summary}</p>
        <ul class="bullets">
          ${experience.highlights.map((highlight) => html`<li>${highlight}</li>`)}
        </ul>
        ${TagList({ label: `${experience.company} technologies`, items: experience.stack })}
      </article>
    </li>
  `
}
