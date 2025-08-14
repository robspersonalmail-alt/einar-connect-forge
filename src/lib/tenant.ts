import { Brand } from '@/types/brand'

const hostToTenant: Record<string, string> = {
  // Map domains to tenants here, e.g.:
  // 'janedoe.com': 'janedoe',
  // 'books.johndoe.com': 'john',
}

export function resolveTenant(host?: string): string {
  const envDefault = import.meta.env.VITE_DEFAULT_TENANT || 'default'
  const h = (host || (typeof window !== 'undefined' ? window.location.hostname : '')).toLowerCase()
  if (h in hostToTenant) return hostToTenant[h]
  return envDefault
}

export async function loadBrand(tenant: string): Promise<Brand> {
  try {
    const mod = await import(`../brands/${tenant}.json`)
    return mod.default as Brand
  } catch (error) {
    console.warn(`Could not load brand for tenant "${tenant}", falling back to default`)
    const defaultMod = await import('../brands/default.json')
    return defaultMod.default as Brand
  }
}

export function applyBrandToCSS(brand: Brand) {
  const r = document.documentElement
  
  // Convert hex to HSL for CSS variables
  const hexToHsl = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (!result) return '0 0% 0%'
    
    const r = parseInt(result[1], 16) / 255
    const g = parseInt(result[2], 16) / 255
    const b = parseInt(result[3], 16) / 255
    
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2
    
    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
        default: h = 0
      }
      h /= 6
    }
    
    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
  }
  
  const brandHsl = hexToHsl(brand.primaryColor)
  const [h, s, l] = brandHsl.split(' ')
  const lightness = parseInt(l.replace('%', ''))
  const hoverLightness = Math.max(lightness - 8, 0)
  
  r.style.setProperty('--brand-color', brandHsl)
  r.style.setProperty('--brand-foreground', hexToHsl(brand.foreground))
  r.style.setProperty('--brand-color-hover', `${h} ${s} ${hoverLightness}%`)
  r.style.setProperty('--font-sans', brand.fontSans)
  document.title = brand.siteName
}