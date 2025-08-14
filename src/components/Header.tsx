import { Link, useLocation } from 'react-router-dom'
import { t } from '@/lib/i18n'

export function Header({ site }: { site: string }) {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-soft">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand transition-smooth hover:opacity-80">
          {site}
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-smooth hover:text-brand ${
              isActive('/') ? 'text-brand font-medium' : 'text-foreground'
            }`}
          >
            {t('nav_home', 'en')}
          </Link>
          <Link 
            to="/books" 
            className={`transition-smooth hover:text-brand ${
              isActive('/books') ? 'text-brand font-medium' : 'text-foreground'
            }`}
          >
            {t('nav_books', 'en')}
          </Link>
          <Link 
            to="/about" 
            className={`transition-smooth hover:text-brand ${
              isActive('/about') ? 'text-brand font-medium' : 'text-foreground'
            }`}
          >
            {t('nav_about', 'en')}
          </Link>
        </nav>
      </div>
    </header>
  )
}