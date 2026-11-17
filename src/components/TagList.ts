import { html, type SafeHtml } from '../lib/html'

interface TagListProps {
  label: string
  items: string[]
}

export function TagList({ label, items }: TagListProps): SafeHtml {
  return html`
    <ul class="tags" aria-label="${label}">
      ${items.map((item) => html`<li class="tag">${item}</li>`)}
    </ul>
  `
}
