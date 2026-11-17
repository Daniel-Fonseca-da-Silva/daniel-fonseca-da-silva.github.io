import type { Profile } from './domain/profile'

// Static <meta> tags live in index.html so social crawlers (which do not run JS) see them.
// This module adds what depends on the profile data: canonical URL and Person JSON-LD.
export function applySeo(profile: Profile): void {
  setCanonical(profile.siteUrl)
  injectPersonSchema(profile)
}

function setCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.append(link)
  }
  link.href = url
}

function injectPersonSchema(profile: Profile): void {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.jobTitle,
    description: profile.seoDescription,
    email: profile.email,
    url: profile.siteUrl,
    sameAs: profile.links.map((link) => link.url),
    knowsAbout: profile.skills.flatMap((group) => group.items),
    alumniOf: profile.education.map((entry) => ({
      '@type': 'EducationalOrganization',
      name: entry.institution,
    })),
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.append(script)
}
