import type { Metric } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { Section } from '../components/Section'
import { Stat } from '../components/Stat'

export function Impact(metrics: Metric[]): SafeHtml {
  return Section({
    id: 'impact',
    title: 'Impact in numbers',
    intro: 'Measurable results from production systems, taken from my CV.',
    variant: 'alt',
    children: html`<ul class="stats">${metrics.map((metric) => Stat(metric))}</ul>`,
  })
}
