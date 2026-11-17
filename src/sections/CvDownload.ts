import type { CvFile } from '../domain/profile'
import { html, type SafeHtml } from '../lib/html'
import { publicUrl } from '../lib/url'
import { Section } from '../components/Section'

// The PDF lives in public/cv/. Replace the file there and keep the name, or update `cv.file` in the profile data.
export function CvDownload({ file, label }: CvFile): SafeHtml {
  const href = publicUrl(`cv/${file}`)

  return Section({
    id: 'cv',
    title: 'Resume',
    intro: 'Download the full CV in PDF, ready to print or share.',
    children: html`
      <div class="card cv__bar">
        <div>
          <p class="cv__file">${file}</p>
          <p class="muted">PDF</p>
        </div>
        <a class="button button--primary" href="${href}" download>${label}</a>
      </div>
    `,
  })
}
