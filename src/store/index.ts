import { atom, computed } from 'nanostores'

export type Locale = 'en' | 'uk'

export const $locale = atom<Locale>('uk')
export const $cursorHover = atom(false)
export const $menuOpen = atom(false)

export function setLocale(l: Locale) {
  $locale.set(l)
}

export function setCursorHover(v: boolean) {
  $cursorHover.set(v)
}

export function toggleMenu() {
  $menuOpen.set(!$menuOpen.get())
}
