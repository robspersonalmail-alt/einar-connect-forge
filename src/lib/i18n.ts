type Language = 'en' | 'sv'

const translations: Record<string, Record<Language, string>> = {
  hero_title: {
    en: 'Welcome to {{site}}',
    sv: 'Välkommen till {{site}}'
  },
  hero_sub: {
    en: 'Discover amazing stories and connect with readers worldwide.',
    sv: 'Upptäck fantastiska berättelser och skapa kontakt med läsare världen över.'
  },
  cta_subscribe: {
    en: 'Subscribe',
    sv: 'Prenumerera'
  },
  nav_home: {
    en: 'Home',
    sv: 'Hem'
  },
  nav_books: {
    en: 'Books',
    sv: 'Böcker'
  },
  nav_about: {
    en: 'About',
    sv: 'Om'
  },
  books_title: {
    en: 'My Books',
    sv: 'Mina Böcker'
  },
  books_coming_soon: {
    en: 'Coming Soon',
    sv: 'Kommer Snart'
  },
  about_title: {
    en: 'About the Author',
    sv: 'Om Författaren'
  }
}

export function t(key: string, lang: Language, variables?: Record<string, string>): string {
  let text = translations[key]?.[lang] || translations[key]?.['en'] || key
  
  if (variables) {
    Object.entries(variables).forEach(([key, value]) => {
      text = text.replace(new RegExp(`{{${key}}}`, 'g'), value)
    })
  }
  
  return text
}