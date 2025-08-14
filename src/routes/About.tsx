import { useMeta } from '@/lib/meta'
import { t } from '@/lib/i18n'

export function About({ site }: { site: string }) {
  useMeta({ 
    title: `${t('about_title', 'en')} - ${site}`, 
    description: `Learn more about ${site} and their writing journey`,
    image: '/brands/default/og.svg'
  })
  
  return (
    <div className="py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-hero text-brand">
          {t('about_title', 'en')}
        </h1>
        <p className="text-subtitle">
          Discover the story behind the stories
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center shadow-soft">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center">
                <span className="text-4xl text-brand-foreground">✍️</span>
              </div>
              <p className="text-muted-foreground">Author Photo</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-brand">Welcome to My World</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about crafting stories that transport readers to extraordinary worlds 
              filled with compelling characters and unforgettable adventures.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand">Writing Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey as an author began with a simple love for storytelling. Over the years, 
                I've developed a unique voice that blends imagination with authentic human experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand">Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great stories have the power to change perspectives, inspire dreams, 
                and connect us across cultures and backgrounds. Every book I write is crafted with this mission in mind.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#" 
              className="px-6 py-3 bg-brand hover:bg-brand-hover text-brand-foreground rounded-xl transition-smooth hover:scale-105 shadow-brand"
            >
              Contact Me
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border-2 border-brand text-brand hover:bg-brand hover:text-brand-foreground rounded-xl transition-smooth"
            >
              Book a Reading
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}