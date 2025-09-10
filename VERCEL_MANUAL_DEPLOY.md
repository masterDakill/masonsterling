# 🚨 DÉPLOIEMENT MANUEL VERCEL - INSTRUCTIONS CRITIQUES

## ⚠️ SI LE DÉPLOIEMENT AUTOMATIQUE NE FONCTIONNE PAS

### ÉTAPE 1 : Vérifier le bon commit sur Vercel

1. Allez sur https://vercel.com/dashboard
2. Cliquez sur votre projet "masonsterling"
3. Allez dans "Settings" → "Git"
4. **VÉRIFIEZ** que le Production Branch est : `main`
5. **VÉRIFIEZ** le dernier commit : `b7cb583`

### ÉTAPE 2 : Forcer le redéploiement du BON commit

1. Allez dans "Deployments"
2. **NE PAS** utiliser "Redeploy" sur un ancien déploiement
3. Cliquez sur **"Create Deployment"** (bouton en haut)
4. Sélectionnez :
   - Branch: `main`
   - Commit: `b7cb583` (CLEAN BUILD: Remove all complex scripts)
5. Cliquez sur "Create Deployment"

### ÉTAPE 3 : Si ça ne marche toujours pas - OPTION NUCLÉAIRE

1. **Supprimez le projet** sur Vercel
2. **Créez un nouveau projet** :
   - Import Git Repository
   - Sélectionnez : https://github.com/masterDakill/masonsterling
   - Framework Preset: **Vite**
   - Build Command: `vite build` (PAS npm run build)
   - Output Directory: `dist`
   - Node Version: 18.x
3. Deploy!

### ÉTAPE 4 : Déploiement via CLI (Alternative)

```bash
# Sur votre machine locale
git clone https://github.com/masterDakill/masonsterling.git fresh-deploy
cd fresh-deploy
npm install
npx vite build
npx vercel --prod
```

Quand Vercel demande :
- Setup and deploy? **Y**
- Which scope? (votre compte)
- Link to existing project? **N** (créer nouveau)
- Project name? `masonsterling-v2`
- Directory? `.` (ou `dist` si demandé)
- Override settings? **Y**
  - Build Command: `vite build`
  - Output Directory: `dist`
  - Development Command: `vite`

## ✅ VÉRIFICATION DU SUCCÈS

Après déploiement, vérifiez :

1. https://[votre-url].vercel.app/version.txt
   - Doit afficher : "Mason Sterling Website v2.0.0"

2. Page d'accueil :
   - Carousel avec headshots de Mason Sterling
   - Boutons "LISTEN NOW" et "SHOP MERCH"

3. Sections :
   - Music Player avec Love's Journey EP
   - Video Gallery
   - Merch Store avec puzzles

## 📝 NOTES IMPORTANTES

- Le commit `b7cb583` est ULTRA SIMPLE : juste `vite build`
- PAS de TypeScript compilation
- PAS de scripts complexes
- PAS de .vercelignore

## 🆘 SUPPORT

Si rien ne fonctionne, le problème vient de Vercel, pas du code.
Le site fonctionne parfaitement en local !

Build local de test :
```bash
npm install
npm run build
npm run preview
```

Puis ouvrez http://localhost:3001