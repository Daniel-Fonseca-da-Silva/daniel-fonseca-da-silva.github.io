import { html, type SafeHtml } from '../lib/html'

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'cv', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export function Header(): SafeHtml {
  return html`
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="site-header__brand" href="#top">Daniel Fonseca da Silva</a>
        <nav aria-label="Main navigation">
          <ul class="nav-list">
            ${NAV_ITEMS.map((item) => html`<li><a href="#${item.id}">${item.label}</a></li>`)}
          </ul>
        </nav>
      </div>
    </header>
  `
}
