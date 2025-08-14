import { Link, useLocation } from 'react-router-dom'
import { t } from '@/lib/i18n'

export function Header({ site }: { site: string }) {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-xl sticky top-0 z-50 shadow-soft">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-brand transition-gentle hover:opacity-75">
          {site}
        </Link>
        
        <nav className="flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-[17px] font-medium transition-gentle hover:text-brand ${
              isActive('/') ? 'text-brand' : 'text-foreground/80'
            }`}
          >
            {t('nav_home', 'en')}
          </Link>
          <Link 
            to="/books" 
            className={`text-[17px] font-medium transition-gentle hover:text-brand ${
              isActive('/books') ? 'text-brand' : 'text-foreground/80'
            }`}
          >
            {t('nav_books', 'en')}
          </Link>
          <Link 
            to="/about" 
            className={`text-[17px] font-medium transition-gentle hover:text-brand ${
              isActive('/about') ? 'text-brand' : 'text-foreground/80'
            }`}
          >
            {t('nav_about', 'en')}
          </Link>
        </nav>
      </div>
    </header>
  )
}