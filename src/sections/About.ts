import type { Profile } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { Section } from '../components/Section'
import { TagList } from '../components/TagList'

export function About({ about, mainStack }: Pick<Profile, 'about' | 'mainStack'>): SafeHtml {
  return Section({
    id: 'about',
    title: 'About',
    children: html`
      <div class="split">
        <div class="about__text">
          ${about.map((paragraph) => html`<p>${paragraph}</p>`)}
        </div>
        <div class="card">
          <h3 class="card__title">Main stack</h3>
          ${TagList({ label: 'Main stack', items: mainStack })}
        </div>
      </div>
    `,
  })
}
