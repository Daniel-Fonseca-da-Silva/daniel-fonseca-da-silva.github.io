import type { Experience } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'

interface TimelineChartProps {
  entries: Experience[]
  start: number
  end: number
}

/** Gantt-style chart: one row per role, bars positioned on a yearly axis. */
export function TimelineChart({ entries, start, end }: TimelineChartProps): SafeHtml {
  const span = end - start + 1
  const years = Array.from({ length: span }, (_, index) => start + index)

  return html`
    <figure class="chart chart--wide">
      <figcaption class="chart__caption">Career timeline</figcaption>
      <div class="gantt__scroll">
        <div class="gantt" style="--span: ${span}">
          <div class="gantt__axis" aria-hidden="true">
            <span></span>
            <div class="gantt__years">${years.map((year) => html`<span>${year}</span>`)}</div>
          </div>
          <ol class="gantt__rows">
            ${entries.map((entry) => {
              const left = ((entry.from - start) / span) * 100
              const width = (((entry.to ?? end) - entry.from + 1) / span) * 100
              return html`
                <li class="gantt__row">
                  <span class="gantt__label">${entry.company}</span>
                  <span class="gantt__track">
                    <span class="gantt__bar" style="left: ${left}%; width: ${width}%">
                      <span class="sr-only">${entry.from} to ${entry.to ?? 'present'}</span>
                    </span>
                  </span>
                </li>
              `
            })}
          </ol>
        </div>
      </div>
    </figure>
  `
}
