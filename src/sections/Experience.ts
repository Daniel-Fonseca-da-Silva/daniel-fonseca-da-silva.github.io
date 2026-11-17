import type { Experience as ExperienceEntry } from '../domain/profile'
import { careerRange } from '../domain/insights'
import { html, type SafeHtml } from '../lib/html'
import { ExperienceItem } from '../components/ExperienceItem'
import { Section } from '../components/Section'
import { TimelineChart } from '../components/TimelineChart'

export function Experience(entries: ExperienceEntry[]): SafeHtml {
  const { start, end } = careerRange(entries)

  return Section({
    id: 'experience',
    title: 'Experience',
    intro: `Roles across retail, public-sector, mobility and SaaS products, from ${start} to today.`,
    children: html`
      ${TimelineChart({ entries, start, end })}
      <ol class="timeline">${entries.map((entry) => ExperienceItem(entry))}</ol>
    `,
  })
}
