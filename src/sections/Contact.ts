import type { Profile } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { Section } from '../components/Section'

export function Contact({ email, links, workAuthorization }: Pick<Profile, 'email' | 'links' | 'workAuthorization'>): SafeHtml {
  return Section({
    id: 'contact',
    title: 'Contact',
    intro: 'Open to back-end, full-stack and platform engineering opportunities. Email is the fastest way to reach me.',
    variant: 'alt',
    children: html`
      <p class="contact__auth">
        <strong>Work authorization:</strong> ${workAuthorization}
      </p>
      <ul class="actions">
        <li><a class="button button--primary" href="mailto:${email}">${email}</a></li>
        ${links.map(
          (link) => html`
            <li>
              <a class="button" href="${link.url}" target="_blank" rel="noopener noreferrer">
                ${link.label}<span class="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          `,
        )}
      </ul>
    `,
  })
}
