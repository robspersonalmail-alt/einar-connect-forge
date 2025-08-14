import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function SiteLayout({ site, children }: { site: string, children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Header site={site} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-8">{children}</div>
      </main>
      <Footer site={site} />
    </div>
  )
}