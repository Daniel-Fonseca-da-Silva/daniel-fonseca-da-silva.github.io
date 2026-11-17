import { html, type SafeHtml } from '../lib/html'

interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps): SafeHtml {
  const year = new Date().getFullYear()
  return html`
    <footer class="site-footer">
      <div class="container">
        <p>© ${year} ${name}. Built with TypeScript and Vite.</p>
      </div>
    </footer>
  `
}
