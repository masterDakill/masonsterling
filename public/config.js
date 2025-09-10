// Configuration pour hébergement traditionnel
// Ce fichier remplace les variables d'environnement .env
// IMPORTANT: Ne mettez JAMAIS de clés secrètes ici, seulement les clés publiques

window.ENV_CONFIG = {
  // Shopify (clés publiques uniquement)
  VITE_SHOPIFY_DOMAIN: 'votre-boutique.myshopify.com',
  VITE_SHOPIFY_STOREFRONT_TOKEN: 'votre-token-public-storefront',
  
  // Analytics (IDs publics)
  VITE_GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  VITE_META_PIXEL_ID: 'XXXXXXXXXXXXXXX',
  VITE_TIKTOK_PIXEL_ID: 'XXXXXXXXXXXXXXXXX',
  
  // API Endpoints (si vous avez un backend)
  VITE_API_URL: 'https://api.votre-domaine.com',
  
  // Mode
  VITE_ENVIRONMENT: 'production'
};

// Note: Pour la sécurité, utilisez un backend pour les opérations sensibles
// Ne jamais exposer les clés API privées côté client