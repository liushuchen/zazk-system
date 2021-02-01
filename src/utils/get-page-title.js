import defaultSettings from '@/settings'

const title = defaultSettings.title || '中安智库'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
