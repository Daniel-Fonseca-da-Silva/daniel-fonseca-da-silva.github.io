import type { Architecture as ArchitectureDiagram } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { FlowDiagram } from '../components/FlowDiagram'
import { Section } from '../components/Section'

export function Architecture(diagrams: ArchitectureDiagram[]): SafeHtml {
  return Section({
    id: 'architecture',
    title: 'Architecture',
    intro: 'How I structure systems that have to stay available under load and remain easy to change.',
    variant: 'alt',
    children: html`<div class="stack">${diagrams.map((diagram) => FlowDiagram(diagram))}</div>`,
  })
}
