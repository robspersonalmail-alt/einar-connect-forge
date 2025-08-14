export function Footer({ site }: { site: string }) {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-[15px] font-medium text-muted-foreground hover:text-brand transition-gentle"
            >
              Newsletter
            </a>
            <a 
              href="#" 
              className="text-[15px] font-medium text-muted-foreground hover:text-brand transition-gentle"
            >
              Store
            </a>
            <a 
              href="#" 
              className="text-[15px] font-medium text-muted-foreground hover:text-brand transition-gentle"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}