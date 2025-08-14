import { useMeta } from '@/lib/meta'
import { t } from '@/lib/i18n'

export function Books({ site }: { site: string }) {
  useMeta({ 
    title: `${t('nav_books', 'en')} - ${site}`, 
    description: `Browse all books by ${site}`,
    image: '/brands/default/og.svg'
  })
  
  const books = [
    {
      id: 1,
      title: "The Chronicles Begin",
      description: "An epic fantasy adventure that sets the stage for an unforgettable journey.",
      status: "available",
      cover: "/api/placeholder/300/450"
    },
    {
      id: 2,
      title: "Mysteries Unveiled",
      description: "A thrilling mystery that will keep you guessing until the very last page.",
      status: "available", 
      cover: "/api/placeholder/300/450"
    },
    {
      id: 3,
      title: "Future Horizons",
      description: "A science fiction masterpiece exploring the possibilities of tomorrow.",
      status: "coming-soon",
      cover: "/api/placeholder/300/450"
    }
  ]
  
  return (
    <div className="py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-hero text-brand">
          {t('books_title', 'en')}
        </h1>
        <p className="text-subtitle">
          A collection of stories that transport readers to new worlds
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div 
            key={book.id} 
            className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-brand transition-smooth group"
          >
            <div className="aspect-[3/4] bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center">
                    <span className="text-2xl text-brand-foreground">📖</span>
                  </div>
                  <h3 className="font-bold text-lg">{book.title}</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold group-hover:text-brand transition-smooth">
                  {book.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                {book.status === 'coming-soon' ? (
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    {t('books_coming_soon', 'en')}
                  </span>
                ) : (
                  <button className="px-6 py-2 bg-brand hover:bg-brand-hover text-brand-foreground rounded-xl transition-smooth hover:scale-105">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}