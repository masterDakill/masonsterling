# 🚀 Instructions de Déploiement Manuel pour Vercel

## ⚠️ SI LE DÉPLOIEMENT AUTOMATIQUE NE FONCTIONNE PAS

### Option 1 : Redéploiement depuis Vercel Dashboard

1. Allez sur https://vercel.com/dashboard
2. Cliquez sur votre projet "masonsterling"
3. Allez dans "Settings" → "Functions"
4. Cliquez sur "Clear Build Cache"
5. Retournez dans "Deployments"
6. Cliquez sur les 3 points du dernier déploiement
7. Sélectionnez "Redeploy"
8. Cochez "Use different commit" 
9. Sélectionnez le commit : `dcf63a5` (fix: Force Vercel to use correct build configuration)

### Option 2 : Déploiement Manuel via CLI

```bash
# Dans votre terminal local
git clone https://github.com/masterDakill/masonsterling.git
cd masonsterling
npm install
npm run build
npx vercel --prod
```

### Option 3 : Créer un Nouveau Projet Vercel

1. Supprimez l'ancien projet sur Vercel
2. Créez un nouveau projet
3. Importez depuis GitHub : https://github.com/masterDakill/masonsterling
4. Utilisez ces paramètres :
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

## ✅ Vérification du Déploiement

Après le déploiement, vérifiez que ces éléments sont présents :

1. **Page d'accueil** : Carousel avec les headshots de Mason Sterling
2. **Section Music** : Lecteur audio avec Love's Journey EP
3. **Section Videos** : Galerie avec 2 vidéos
4. **Section Merch** : Boutique avec puzzles
5. **Design** : Effets 3D et animations Apple-style

## 📊 Version Actuelle

- **Version**: 2.0.0
- **Date**: 2025-09-10
- **Commit**: dcf63a5
- **Features**: MusicPlayer, VideoGallery, MerchStore, 3D Effects

## 🔗 URLs

- **GitHub**: https://github.com/masterDakill/masonsterling
- **Site Local**: https://3001-i2ptywwlbzpfqlxakefa4-6532622b.e2b.dev
- **Production**: https://masonsterling.vercel.app

## 📝 Notes

Le site sur GitHub contient TOUS les composants et assets nécessaires.
Si le déploiement échoue, c'est un problème de configuration Vercel, pas de code.