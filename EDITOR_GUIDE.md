# 📝 Guide de l'Éditeur de Contenu Mason Sterling

## 🚀 Accès à l'Éditeur

### Méthode 1 : URL avec Paramètre
Ajoutez `?edit=true` à l'URL de votre site :
```
https://votre-site.com/?edit=true
```

### Méthode 2 : Raccourci Clavier
Appuyez sur **Ctrl+Shift+E** n'importe où sur le site

### Méthode 3 : Mode Développement
L'éditeur est automatiquement visible en mode développement local

## 🎨 Fonctionnalités de l'Éditeur

### Sections Éditables

#### 🏠 **Accueil**
- Titre principal
- Sous-titre
- Bouton d'appel à l'action (texte et lien)
- Image de fond
- Carrousel de photos

#### 💿 **EP & Musique**
- Titre de l'EP
- Description
- Liens streaming (Spotify, Apple Music, SoundCloud)
- Liste des pistes (titre, durée, paroles)
- Pochette de l'album

#### 🎵 **Singles**
- Informations pour chaque single
- Date de sortie
- Pochette
- Liens streaming
- Statut (sorti/à venir)

#### 👤 **À Propos**
- Titre de section
- Biographie complète
- Photo de profil
- Statistiques (listeners, streams, etc.)

#### 🎤 **Tournée**
- Dates de concerts
- Lieux et villes
- Liens billetterie
- Statut (disponible/complet)

#### 📱 **Réseaux Sociaux**
- Instagram
- Facebook
- Twitter/X
- YouTube
- Spotify
- SoundCloud
- TikTok
- Email de contact

#### 📧 **Newsletter**
- Titre et description
- Avantages pour les abonnés
- Configuration Mailchimp (optionnel)

#### 🔍 **SEO**
- Titre de la page
- Description meta
- Mots-clés
- Image Open Graph

## 💾 Sauvegarde et Export

### Sauvegarde Locale
- Cliquez sur **💾 Sauvegarder** ou utilisez **Ctrl+S**
- Les changements sont stockés dans le navigateur
- La page se recharge automatiquement

### Export/Import JSON
1. **Exporter** : Cliquez sur **📥 Exporter** pour télécharger vos contenus
2. **Importer** : Cliquez sur **📤 Importer** pour charger un fichier JSON

### Backup Recommandé
Exportez régulièrement votre contenu pour avoir une sauvegarde :
- Avant des changements majeurs
- Une fois par semaine
- Après avoir fini vos modifications

## 🖼️ Gestion des Images

### Upload d'Images
1. Cliquez sur le bouton **📷 Upload** à côté d'un champ image
2. Sélectionnez votre image (JPG, PNG, WebP)
3. L'image est convertie en base64 et stockée localement

### URL d'Images
Vous pouvez aussi utiliser des URLs directes :
- Images hébergées sur un CDN
- Images dans `/public/assets/images/`
- Liens externes (Unsplash, etc.)

### Optimisation
- **Taille recommandée** : Max 2MB par image
- **Dimensions** : 
  - Hero : 1920x1080
  - Pochettes : 800x800
  - Photos profil : 600x600

## 🎯 Meilleures Pratiques

### Textes
- Gardez les titres courts et percutants
- Utilisez des descriptions engageantes
- Vérifiez l'orthographe avant de sauvegarder

### Liens
- Testez tous les liens après modification
- Utilisez des URLs complètes pour les liens externes
- Pour les liens internes, utilisez des chemins relatifs (#section)

### SEO
- Titre : 50-60 caractères
- Description : 150-160 caractères
- Mots-clés : 5-10 mots pertinents

## 🔧 Dépannage

### L'éditeur ne s'affiche pas
1. Vérifiez que vous avez ajouté `?edit=true` à l'URL
2. Essayez le raccourci **Ctrl+Shift+E**
3. Videz le cache du navigateur

### Les changements ne s'appliquent pas
1. Assurez-vous d'avoir cliqué sur **Sauvegarder**
2. Attendez le rechargement de la page
3. Vérifiez la console pour des erreurs

### Perte de données
1. Les données sont stockées dans `localStorage`
2. Ne videz pas les données du site
3. Exportez régulièrement en JSON

## 🚨 Mode Production

Pour désactiver l'éditeur en production :
1. Retirez le paramètre `?edit=true` de l'URL
2. Supprimez `edit_mode` du localStorage
3. Déployez avec `NODE_ENV=production`

## 📊 Structure des Données

Le contenu est stocké dans un objet JSON avec cette structure :
```json
{
  "hero": { ... },
  "ep": { ... },
  "singles": [ ... ],
  "about": { ... },
  "tour": [ ... ],
  "social": { ... },
  "newsletter": { ... },
  "seo": { ... }
}
```

## 🔐 Sécurité

- L'éditeur est côté client uniquement
- Aucune donnée n'est envoyée à un serveur
- Les modifications sont locales au navigateur
- Pour une sécurité accrue, utilisez un CMS headless

## 🆘 Support

Pour toute question ou problème :
1. Consultez ce guide
2. Vérifiez la console du navigateur
3. Exportez vos données avant de contacter le support

---

**Astuce Pro** : Créez plusieurs exports JSON pour différentes versions de votre site (Noël, tournée, nouveau single, etc.) et switchez facilement entre elles ! 🎄🎤🎵