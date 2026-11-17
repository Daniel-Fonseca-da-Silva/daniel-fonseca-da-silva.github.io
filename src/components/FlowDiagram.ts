import type { Architecture } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'

/** Left-to-right flow of components. Stacks vertically on small screens. */
export function FlowDiagram({ title, context, caption, steps, decisions = [] }: Architecture): SafeHtml {
  return html`
    <figure class="card flow">
      <figcaption class="flow__header">
        <span class="flow__context">${context}</span>
        <span class="flow__title">${title}</span>
      </figcaption>
      <ol class="flow__steps">
        ${steps.map(
          (step) => html`
            <li class="flow__step">
              <strong class="flow__label">${step.label}</strong>
              <span class="flow__detail">${step.detail}</span>
            </li>
          `,
        )}
      </ol>
      <p class="flow__caption">${caption}</p>
      ${decisions.length > 0
        ? html`
            <div class="flow__decisions">
              <p class="flow__decisions-title">Key decisions</p>
              <ul class="bullets">${decisions.map((decision) => html`<li>${decision}</li>`)}</ul>
            </div>
          `
        : ''}
    </figure>
  `
}
