export function Footer({ site }: { site: string }) {
  return (
    <footer className="border-t border-border bg-muted/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-brand transition-smooth"
            >
              Newsletter
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-brand transition-smooth"
            >
              Store
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-brand transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}