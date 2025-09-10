# 🚀 Guide de Déploiement sur GitHub Pages (GRATUIT)

## ✨ Pourquoi GitHub Pages ?

- ✅ **100% GRATUIT** - Aucun coût mensuel
- ✅ **HTTPS/SSL inclus** - Sécurité gratuite
- ✅ **CDN mondial** - Site rapide partout
- ✅ **Déploiement automatique** - Push = Deploy
- ✅ **Domaine personnalisé** - Utilisez votre propre domaine
- ✅ **Aucune limite** - Bande passante illimitée

## 📋 Prérequis

- Compte GitHub (gratuit)
- Repository `masonsterling` déjà créé
- Node.js installé localement

## 🎯 Méthode 1 : Déploiement Manuel (Simple)

### Étape 1 : Build le projet
```bash
# Dans votre terminal local
cd masonsterling
npm install
npm run build
```

### Étape 2 : Déployer sur GitHub Pages
```bash
# Une seule commande !
npm run deploy
```

### Étape 3 : Activer GitHub Pages
1. Allez sur https://github.com/masterDakill/masonsterling
2. Cliquez sur **Settings** (⚙️)
3. Dans le menu gauche, cliquez sur **Pages**
4. Source : Sélectionnez **Deploy from a branch**
5. Branch : Sélectionnez **gh-pages**
6. Folder : **/ (root)**
7. Cliquez **Save**

### Étape 4 : Accéder à votre site
Votre site sera disponible à :
```
https://masterdakill.github.io/masonsterling
```

⏱️ **Note** : Le premier déploiement peut prendre jusqu'à 10 minutes.

## 🤖 Méthode 2 : Déploiement Automatique (GitHub Actions)

### Configuration (une seule fois)
1. Sur GitHub, allez dans **Settings** > **Pages**
2. Source : Sélectionnez **GitHub Actions**
3. C'est tout ! Le workflow est déjà configuré

### Déploiement automatique
Maintenant, à chaque fois que vous faites un push sur la branche `main` :
```bash
git add .
git commit -m "Mise à jour du site"
git push origin main
```

Le site se déploie automatiquement ! 🎉

## 🌐 Utiliser un Domaine Personnalisé (Optionnel)

### Étape 1 : Acheter un domaine
- Namecheap (~12$/an)
- Google Domains (~12$/an)
- GoDaddy (~15$/an)

### Étape 2 : Configurer le DNS
Chez votre registrar, ajoutez ces enregistrements :

**Pour un domaine apex (masonsterling-ai.com)** :
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**Pour un sous-domaine (www.masonsterling-ai.com)** :
```
Type: CNAME
Name: www
Value: masterdakill.github.io
```

### Étape 3 : Ajouter le domaine sur GitHub
1. Dans **Settings** > **Pages**
2. Custom domain : `masonsterling-ai.com`
3. Cochez **Enforce HTTPS**
4. Créez un fichier `CNAME` dans `/public` :
```
masonsterling-ai.com
```

## 🔧 Commandes Utiles

```bash
# Développement local
npm run dev

# Build production
npm run build

# Déployer sur GitHub Pages
npm run deploy

# Voir le site localement avant deploy
npm run preview
```

## ❓ Dépannage

### Le site ne s'affiche pas
- Attendez 10 minutes après le premier déploiement
- Vérifiez que GitHub Pages est activé dans Settings
- Videz le cache de votre navigateur (Ctrl+F5)

### Erreur 404
- Vérifiez que la branche `gh-pages` existe
- Relancez `npm run deploy`

### Images ne s'affichent pas
- Vérifiez les chemins : `/assets/` au lieu de `./assets/`
- Les images doivent être dans le dossier `public/`

### Le routing ne fonctionne pas
- C'est normal avec GitHub Pages pour les SPA
- Le fichier 404.html gère ça automatiquement

## 📊 Monitoring

Voir les statistiques de votre site :
1. Repository > **Insights** > **Traffic**
2. Vous verrez :
   - Visiteurs uniques
   - Pages vues
   - Sources de trafic
   - Contenu populaire

## 🎉 Avantages vs Hébergement Payant

| Feature | GitHub Pages | Hébergement Traditionnel |
|---------|-------------|--------------------------|
| Prix | GRATUIT | 5-20$/mois |
| SSL/HTTPS | ✅ Inclus | Parfois payant |
| CDN | ✅ Global | Souvent local |
| Bande passante | Illimitée* | Limitée |
| Stockage | 1GB | Variable |
| Domaine custom | ✅ | ✅ |
| Support | Communauté | Email/Chat |
| Uptime | 99.95% | 99.9% |

*Soft limit de 100GB/mois

## 🚀 Prochaines Étapes

1. **Déployez votre site** avec `npm run deploy`
2. **Partagez l'URL** : https://masterdakill.github.io/masonsterling
3. **Configurez un domaine** personnalisé (optionnel)
4. **Activez les analytics** dans le code
5. **Modifiez le contenu** avec l'éditeur visuel

## 💡 Tips Pro

- Utilisez CloudFlare (gratuit) devant pour encore plus de performance
- Activez les GitHub Actions pour déploiement automatique
- Faites des commits réguliers pour historique
- Utilisez les branches pour tester avant de déployer

---

**🎊 Félicitations !** Votre site est maintenant hébergé GRATUITEMENT avec une infrastructure mondiale de niveau entreprise !