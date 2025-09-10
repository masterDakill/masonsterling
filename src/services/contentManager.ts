// Service de gestion du contenu éditable
interface ContentData {
  // Hero Section
  hero: {
    title: string
    subtitle: string
    ctaText: string
    ctaLink: string
    backgroundImage: string
    headshots: string[]
  }
  
  // EP Section
  ep: {
    title: string
    description: string
    coverImage: string
    spotifyLink: string
    appleMusicLink: string
    soundcloudLink: string
    tracks: Array<{
      title: string
      duration: string
      audioUrl: string
      lyrics?: string
    }>
  }
  
  // Singles
  singles: Array<{
    id: string
    title: string
    releaseDate: string
    coverImage: string
    description: string
    spotifyLink?: string
    appleMusicLink?: string
    soundcloudLink?: string
    youtubeLink?: string
    isReleased: boolean
  }>
  
  // About Section
  about: {
    title: string
    bio: string
    image: string
    stats: Array<{
      label: string
      value: string
    }>
  }
  
  // Tour Dates
  tour: Array<{
    date: string
    venue: string
    city: string
    ticketLink: string
    soldOut: boolean
  }>
  
  // Social Links
  social: {
    instagram: string
    facebook: string
    twitter: string
    youtube: string
    spotify: string
    soundcloud: string
    tiktok: string
    email: string
  }
  
  // Merchandise
  merch: {
    shopifyDomain: string
    shopifyToken: string
    featuredProducts: string[]
    bannerText: string
  }
  
  // Newsletter
  newsletter: {
    title: string
    description: string
    benefits: string[]
    mailchimpApiKey?: string
    mailchimpListId?: string
  }
  
  // SEO
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
  }
}

class ContentManager {
  private contentKey = 'mason_sterling_content'
  private defaultContent: ContentData = {
    hero: {
      title: "Mason Sterling",
      subtitle: "Love's Journey EP - Available Now",
      ctaText: "Listen Now",
      ctaLink: "#music",
      backgroundImage: "/assets/images/hero-banner.jpg",
      headshots: [
        "/assets/images/headshot/headshot1.jpg",
        "/assets/images/headshot/headshot2.jpg",
        "/assets/images/headshot/headshot3.jpg",
        "/assets/images/headshot/headshot4.jpg",
        "/assets/images/headshot/headshot5.jpg",
        "/assets/images/headshot/headshot6.jpg",
        "/assets/images/headshot/headshot7.jpg"
      ]
    },
    ep: {
      title: "Love's Journey",
      description: "A sonic exploration of modern romance through neo-noir soundscapes and intimate storytelling.",
      coverImage: "/assets/images/book-cover.jpg",
      spotifyLink: "https://open.spotify.com/album/...",
      appleMusicLink: "https://music.apple.com/album/...",
      soundcloudLink: "https://soundcloud.com/mason-sterling/sets/loves-journey-ep",
      tracks: [
        {
          title: "Neon Love",
          duration: "3:42",
          audioUrl: "/assets/audio/neon-love.wav",
          lyrics: "City lights painting shadows on the wall..."
        },
        {
          title: "City Lights",
          duration: "4:15",
          audioUrl: "/assets/audio/city-lights.wav"
        },
        {
          title: "Velvet Dreams",
          duration: "3:58",
          audioUrl: "/assets/audio/velvet-dreams.wav"
        },
        {
          title: "Midnight Confessions",
          duration: "4:33",
          audioUrl: "/assets/audio/midnight-confessions.wav"
        },
        {
          title: "Love's Journey",
          duration: "5:21",
          audioUrl: "/assets/audio/loves-journey.wav"
        }
      ]
    },
    singles: [
      {
        id: "drawn-to-unknown",
        title: "Drawn to the Unknown",
        releaseDate: "2024-11-15",
        coverImage: "/assets/images/drawn-to-unknown-cover.jpg",
        description: "An anthem about embracing uncertainty and stepping beyond comfort zones.",
        spotifyLink: "https://open.spotify.com/track/...",
        appleMusicLink: "https://music.apple.com/...",
        soundcloudLink: "https://soundcloud.com/mason-sterling/drawn-to-the-unknown",
        youtubeLink: "https://youtube.com/watch?v=...",
        isReleased: true
      },
      {
        id: "more-than-my-name",
        title: "More than my Name",
        releaseDate: "2024-12-20",
        coverImage: "/assets/images/more-than-my-name-cover.jpg",
        description: "An empowering anthem about identity and self-discovery.",
        soundcloudLink: "https://soundcloud.com/mason-sterling/more-than-my-name-preview",
        isReleased: false
      }
    ],
    about: {
      title: "About Mason Sterling",
      bio: "Mason Sterling is a Canadian artist pushing the boundaries of modern music with his unique blend of electronic and acoustic elements. His latest EP 'Love's Journey' explores themes of romance, self-discovery, and urban life through a neo-noir lens.",
      image: "/assets/images/Portrait_Original.png",
      stats: [
        { label: "Monthly Listeners", value: "50K+" },
        { label: "Streams", value: "2M+" },
        { label: "Countries", value: "45" },
        { label: "Singles Released", value: "12" }
      ]
    },
    tour: [
      {
        date: "2025-01-15",
        venue: "Phoenix Concert Theatre",
        city: "Toronto, ON",
        ticketLink: "https://ticketmaster.ca/...",
        soldOut: false
      },
      {
        date: "2025-01-20",
        venue: "Corona Theatre",
        city: "Montreal, QC",
        ticketLink: "https://ticketmaster.ca/...",
        soldOut: false
      },
      {
        date: "2025-01-25",
        venue: "Commodore Ballroom",
        city: "Vancouver, BC",
        ticketLink: "https://ticketmaster.ca/...",
        soldOut: true
      }
    ],
    social: {
      instagram: "https://instagram.com/masonsterling",
      facebook: "https://facebook.com/masonsterlingsound",
      twitter: "https://twitter.com/masonsterling",
      youtube: "https://youtube.com/@masonsterling",
      spotify: "https://open.spotify.com/artist/masonsterling",
      soundcloud: "https://soundcloud.com/mason-sterling",
      tiktok: "https://tiktok.com/@masonsterling",
      email: "contact@masonsterling.com"
    },
    merch: {
      shopifyDomain: "mason-sterling.myshopify.com",
      shopifyToken: "",
      featuredProducts: [],
      bannerText: "Support the music with exclusive merchandise"
    },
    newsletter: {
      title: "Join the Journey",
      description: "Be the first to know about new music, exclusive content, and special offers",
      benefits: [
        "Early access to new singles and albums",
        "Exclusive behind-the-scenes content",
        "Pre-sale ticket access for tours",
        "10% discount on all merchandise",
        "Monthly newsletter with personal updates",
        "Access to fan community events"
      ],
      mailchimpApiKey: "",
      mailchimpListId: ""
    },
    seo: {
      title: "Mason Sterling - Official Website | Love's Journey EP",
      description: "Official website of Mason Sterling. Listen to the new EP 'Love's Journey', watch videos, buy merchandise, and get tour dates.",
      keywords: ["Mason Sterling", "Love's Journey", "Canadian Artist", "Electronic Music", "Neo-noir", "Indie Music"],
      ogImage: "/assets/images/og-image.jpg"
    }
  }
  
  // Charger le contenu
  getContent(): ContentData {
    if (typeof window === 'undefined') return this.defaultContent
    
    const saved = localStorage.getItem(this.contentKey)
    if (saved) {
      try {
        return { ...this.defaultContent, ...JSON.parse(saved) }
      } catch (e) {
        console.error('Erreur chargement contenu:', e)
      }
    }
    return this.defaultContent
  }
  
  // Sauvegarder le contenu
  saveContent(content: ContentData): void {
    localStorage.setItem(this.contentKey, JSON.stringify(content))
    window.dispatchEvent(new CustomEvent('content-updated', { detail: content }))
  }
  
  // Mettre à jour une section
  updateSection<K extends keyof ContentData>(
    section: K,
    data: ContentData[K]
  ): void {
    const content = this.getContent()
    content[section] = data
    this.saveContent(content)
  }
  
  // Exporter le contenu (JSON)
  exportContent(): string {
    return JSON.stringify(this.getContent(), null, 2)
  }
  
  // Importer le contenu (JSON)
  importContent(jsonString: string): boolean {
    try {
      const content = JSON.parse(jsonString)
      this.saveContent(content)
      return true
    } catch (e) {
      console.error('Erreur import:', e)
      return false
    }
  }
  
  // Réinitialiser au contenu par défaut
  resetToDefault(): void {
    this.saveContent(this.defaultContent)
  }
  
  // Sauvegarder dans le cloud (GitHub Gist ou Firebase)
  async saveToCloud(token?: string): Promise<boolean> {
    // Implémentation future avec GitHub Gist ou Firebase
    console.log('Sauvegarde cloud à implémenter')
    return false
  }
  
  // Charger depuis le cloud
  async loadFromCloud(token?: string): Promise<boolean> {
    // Implémentation future
    console.log('Chargement cloud à implémenter')
    return false
  }
}

export default new ContentManager()
export type { ContentData }