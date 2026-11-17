import type { Pillar } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { Section } from '../components/Section'

export function Approach(pillars: Pillar[]): SafeHtml {
  return Section({
    id: 'approach',
    title: 'Engineering approach',
    intro: 'The principles behind the systems I build and the way I work with teams.',
    children: html`
      <div class="grid grid--2">
        ${pillars.map(
          (pillar) => html`
            <article class="card pillar">
              <h3 class="card__title">${pillar.title}</h3>
              <p>${pillar.description}</p>
            </article>
          `,
        )}
      </div>
    `,
  })
}
