import type { SkillGroup } from '../domain/profile'
import type { UsageBar } from '../domain/insights'
import { html, type SafeHtml } from '../lib/html'
import { BarChart } from '../components/BarChart'
import { Section } from '../components/Section'
import { TagList } from '../components/TagList'

interface SkillsProps {
  groups: SkillGroup[]
  usage: UsageBar[]
}

export function Skills({ groups, usage }: SkillsProps): SafeHtml {
  return Section({
    id: 'skills',
    title: 'Skills',
    intro: 'Technologies I use most, measured across my roles and projects.',
    variant: 'alt',
    children: html`
      <div class="split">
        ${BarChart({ caption: 'Most used technologies', bars: usage })}
        <div class="skill-groups">
          ${groups.map(
            (group) => html`
              <div class="card">
                <h3 class="card__title">${group.title}</h3>
                ${TagList({ label: group.title, items: group.items })}
              </div>
            `,
          )}
        </div>
      </div>
    `,
  })
}
