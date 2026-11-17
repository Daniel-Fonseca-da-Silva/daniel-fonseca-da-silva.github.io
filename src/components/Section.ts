import { html, type SafeHtml } from '../lib/html'

interface SectionProps {
  id: string
  title: string
  intro?: string
  variant?: 'default' | 'alt'
  children: SafeHtml
}

// Numbering is handled by CSS counters, so reordering sections never requires edits here.
export function Section({ id, title, intro, variant = 'default', children }: SectionProps): SafeHtml {
  return html`
    <section id="${id}" class="section section--${variant}" aria-labelledby="${id}-title">
      <div class="container">
        <header class="section__header">
          <h2 id="${id}-title" class="section__title">${title}</h2>
          ${intro ? html`<p class="section__intro">${intro}</p>` : ''}
        </header>
        ${children}
      </div>
    </section>
  `
}
