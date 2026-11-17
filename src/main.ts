import './style.css'
import { App } from './app'
import { profile } from './data/profile'
import { applySeo } from './seo'

const root = document.querySelector<HTMLDivElement>('#app')

if (!root) {
  throw new Error('Missing #app root element in index.html')
}

root.innerHTML = App(profile).value
applySeo(profile)
