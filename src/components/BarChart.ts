import type { UsageBar } from '../domain/insights'
import { html, type SafeHtml } from '../lib/html'

interface BarChartProps {
  caption: string
  bars: UsageBar[]
}

export function BarChart({ caption, bars }: BarChartProps): SafeHtml {
  const max = Math.max(...bars.map((bar) => bar.count), 1)

  return html`
    <figure class="chart">
      <figcaption class="chart__caption">${caption}</figcaption>
      <ol class="bar-chart">
        ${bars.map(
          (bar) => html`
            <li class="bar-chart__row">
              <span class="bar-chart__label">${bar.label}</span>
              <span class="bar-chart__track">
                <span class="bar-chart__fill" style="width: ${(bar.count / max) * 100}%"></span>
              </span>
              <span class="bar-chart__value">
                ${bar.count}<span class="sr-only"> roles and projects</span>
              </span>
            </li>
          `,
        )}
      </ol>
    </figure>
  `
}
