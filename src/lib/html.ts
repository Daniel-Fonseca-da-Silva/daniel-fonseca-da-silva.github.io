// Minimal tagged-template renderer. Every interpolated value is HTML-escaped
// unless it is explicitly wrapped with `raw()`, so untrusted data cannot inject markup.

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export class SafeHtml {
  readonly value: string

  constructor(value: string) {
    this.value = value
  }
}

export function raw(value: string): SafeHtml {
  return new SafeHtml(value)
}

type Interpolation = SafeHtml | string | number | null | undefined | Interpolation[]

function escape(value: Interpolation): string {
  if (value instanceof SafeHtml) return value.value
  if (Array.isArray(value)) return value.map(escape).join('')
  if (value === null || value === undefined) return ''
  return String(value).replace(/[&<>"']/g, (char) => ESCAPES[char])
}

export function html(strings: TemplateStringsArray, ...values: Interpolation[]): SafeHtml {
  let output = ''
  strings.forEach((chunk, index) => {
    output += chunk
    if (index < values.length) output += escape(values[index])
  })
  return new SafeHtml(output)
}
