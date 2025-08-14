import { useEffect, useState } from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from '@/layouts/SiteLayout'
import { Home } from '@/routes/Home'
import { Books } from '@/routes/Books'
import { About } from '@/routes/About'
import { resolveTenant, loadBrand, applyBrandToCSS } from '@/lib/tenant'
import { Brand } from '@/types/brand'
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [brand, setBrand] = useState<Brand | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeBrand = async () => {
      try {
        const tenant = resolveTenant()
        const brandData = await loadBrand(tenant)
        setBrand(brandData)
        applyBrandToCSS(brandData)
      } catch (error) {
        console.error('Failed to initialize brand:', error)
      } finally {
        setLoading(false)
      }
    }
    
    initializeBrand()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading your author site...</p>
        </div>
      </div>
    )
  }

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Failed to load site</h1>
          <p className="text-muted-foreground">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteLayout site={brand.siteName}>
            <Routes>
              <Route path="/" element={<Home site={brand.siteName} />} />
              <Route path="/books" element={<Books site={brand.siteName} />} />
              <Route path="/about" element={<About site={brand.siteName} />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App;
