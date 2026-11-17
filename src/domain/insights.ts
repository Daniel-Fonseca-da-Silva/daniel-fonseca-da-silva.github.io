import type { Experience, Profile } from './profile'

export interface UsageBar {
  label: string
  count: number
}

export interface CareerRange {
  start: number
  end: number
}

export function formatPeriod({ from, to }: Pick<Experience, 'from' | 'to'>): string {
  return `${from} – ${to ?? 'Present'}`
}

/** Counts how many roles and projects use each technology, most used first. */
export function technologyUsage(profile: Profile, limit = 10): UsageBar[] {
  const counts = new Map<string, number>()
  const stacks = [
    ...profile.experience.map((entry) => entry.stack),
    ...profile.projects.map((project) => project.stack),
  ]

  for (const stack of stacks) {
    for (const technology of new Set(stack)) {
      counts.set(technology, (counts.get(technology) ?? 0) + 1)
    }
  }

  return [...counts]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    .slice(0, limit)
}

export function careerRange(
  experience: Experience[],
  currentYear = new Date().getFullYear(),
): CareerRange {
  return {
    start: Math.min(...experience.map((entry) => entry.from)),
    end: Math.max(...experience.map((entry) => entry.to ?? currentYear)),
  }
}
