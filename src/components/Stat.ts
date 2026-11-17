import type { Metric } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'

export function Stat({ value, label, context }: Metric): SafeHtml {
  return html`
    <li class="stat">
      <p class="stat__value">${value}</p>
      <p class="stat__label">${label}</p>
      <p class="stat__context">${context}</p>
    </li>
  `
}
