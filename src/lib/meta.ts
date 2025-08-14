import { useEffect } from 'react'

type MetaProps = {
  title: string
  description: string
  image?: string
  url?: string
}

export function useMeta({ title, description, image, url }: MetaProps) {
  useEffect(() => {
    // Set document title
    document.title = title
    
    // Helper function to set meta content
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
    
    // Basic meta tags
    setMeta('description', description)
    
    // Open Graph tags
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    
    if (image) {
      setMeta('og:image', image, true)
      setMeta('twitter:image', image)
    }
    
    if (url) {
      setMeta('og:url', url, true)
    }
    
    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
  }, [title, description, image, url])
}