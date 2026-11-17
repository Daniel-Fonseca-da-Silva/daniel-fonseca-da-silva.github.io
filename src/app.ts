import type { Profile } from './domain/profile'
import { html, type SafeHtml } from './lib/html'
import { About } from './sections/About'
import { Approach } from './sections/Approach'
import { Architecture } from './sections/Architecture'
import { Contact } from './sections/Contact'
import { CvDownload } from './sections/CvDownload'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Impact } from './sections/Impact'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { technologyUsage } from './domain/insights'

// Composition root: assembles page sections from the profile data.
export function App(profile: Profile): SafeHtml {
  return html`
    <a class="skip-link" href="#main">Skip to content</a>
    ${Header()}
    <main id="main">
      ${Hero(profile)}
      ${About(profile)}
      ${Impact(profile.metrics)}
      ${Experience(profile.experience)}
      ${Architecture(profile.architectures)}
      ${Projects(profile.projects)}
      ${Skills({ groups: profile.skills, usage: technologyUsage(profile) })}
      ${Approach(profile.pillars)}
      ${Education({ entries: profile.education, certifications: profile.certifications })}
      ${CvDownload(profile.cv)}
      ${Contact(profile)}
    </main>
    ${Footer({ name: profile.name })}
  `
}
