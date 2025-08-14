import { useState } from 'react'
import { useMeta } from '@/lib/meta'
import { t } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Home({ site }: { site: string }) {
  useMeta({ 
    title: site, 
    description: `Official website for ${site}`, 
    image: '/brands/default/og.svg' 
  })
  
  const [email, setEmail] = useState('')
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with: ${email}`)
      setEmail('')
    }
  }
  
  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-hero bg-gradient-hero bg-clip-text text-transparent">
            {t('hero_title', 'en', { site })}
          </h1>
          <p className="text-subtitle max-w-2xl mx-auto">
            {t('hero_sub', 'en')}
          </p>
        </div>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 h-12 px-4 rounded-xl border-2 border-muted focus:border-brand transition-smooth"
            required
          />
          <Button 
            type="submit"
            className="h-12 px-8 bg-brand hover:bg-brand-hover text-brand-foreground font-medium rounded-xl shadow-brand transition-smooth hover:scale-105 hover:shadow-lg"
          >
            {t('cta_subscribe', 'en')}
          </Button>
        </form>
      </section>
      
      {/* Featured Content */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-brand transition-smooth">
          <h3 className="text-xl font-bold mb-4 text-brand">Latest Release</h3>
          <p className="text-muted-foreground leading-relaxed">
            Discover my newest book featuring compelling characters and unforgettable stories.
          </p>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-brand transition-smooth">
          <h3 className="text-xl font-bold mb-4 text-brand">Book Series</h3>
          <p className="text-muted-foreground leading-relaxed">
            Explore interconnected stories that span multiple volumes and captivating worlds.
          </p>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-brand transition-smooth">
          <h3 className="text-xl font-bold mb-4 text-brand">Events & News</h3>
          <p className="text-muted-foreground leading-relaxed">
            Stay updated with book signings, readings, and exclusive author events.
          </p>
        </div>
      </section>
    </div>
  )
}