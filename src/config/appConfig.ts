const rawBaseUrl = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL ? import.meta.env.BASE_URL : '/';
const cleanBaseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export const APP_CONFIG = {
  appName: 'KaamSaathi',
  tagline: 'Phone se free time ko useful banao.',
  subTagline: 'Join karo. Simple tasks karo. Pese kamao.',
  siteUrl: 'https://arundidauli.github.io/kaamsaathi/',
  whatsappUrl: 'https://chat.whatsapp.com/GdO5DoH9CpIHgotkF7S0Xd',
  telegramUrl: 'https://t.me/kaamsaathi',
  supportEmail: 'namaste@kaamsaathi.in',
  partnerEmail: 'partners@kaamsaathi.in',
  partnerWhatsappUrl: 'https://api.whatsapp.com/send?text=Namaste%20KaamSaathi,%20I%20want%20to%20partner%20or%20launch%20a%20campaign%20for%20my%20brand/channel.',
  version: 'v2.2.0-showcase',
  logo: `${cleanBaseUrl}logo.png`,
  logoIcon: `${cleanBaseUrl}logo-icon.png`,
  logoTransparent: `${cleanBaseUrl}logo-transparent.png`,
  originalLogo: `${cleanBaseUrl}Kaamsaathi_logo.jpeg`,
  heroImage: `${cleanBaseUrl}kaamsaathi.png`,
  ogImage: 'https://arundidauli.github.io/kaamsaathi/og-image.png',
  youtubeUrl: 'https://youtu.be/61MJxVKKxZE',
  youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/61MJxVKKxZE?autoplay=1&rel=0',
  localVideoUrl: `${cleanBaseUrl}kaamsathi.mp4`,
  communityImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
  testingImage: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
} as const;
