import type { Education as EducationEntry } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { Section } from '../components/Section'

interface EducationProps {
  entries: EducationEntry[]
  certifications: string[]
}

export function Education({ entries, certifications }: EducationProps): SafeHtml {
  return Section({
    id: 'education',
    title: 'Education & Certifications',
    variant: 'alt',
    children: html`
      <div class="split">
        <div class="card">
          <h3 class="card__title">Education</h3>
          ${entries.map(
            (entry) => html`
              <article class="education-item">
                <h4>${entry.degree}</h4>
                <p class="muted">${entry.institution} · ${entry.period}</p>
                ${entry.note ? html`<p>${entry.note}</p>` : ''}
              </article>
            `,
          )}
        </div>
        <div class="card">
          <h3 class="card__title">Certifications</h3>
          <ul class="bullets">
            ${certifications.map((certification) => html`<li>${certification}</li>`)}
          </ul>
        </div>
      </div>
    `,
  })
}
