import type { Profile } from '../domain/profile'
import { publicUrl } from '../lib/url'
import { html, type SafeHtml } from '../lib/html'

export function Hero({ name, jobTitle, summary, photo, cv }: Profile): SafeHtml {
  return html`
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="eyebrow">${jobTitle}</p>
          <h1 id="hero-title">${name}</h1>
          <p class="hero__summary">${summary}</p>
          <div class="actions">
            <a class="button button--primary" href="#projects">View projects</a>
            <a class="button" href="${publicUrl(`cv/${cv.file}`)}" download>${cv.label}</a>
            <a class="button button--ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div class="hero__media">
          <img
            class="hero__photo"
            src="${photo.src}"
            alt="${photo.alt}"
            width="1024"
            height="1024"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  `
}
