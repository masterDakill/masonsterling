# Guide de Configuration Shopify pour Mason Sterling

## 📋 Étapes de Configuration

### 1. Créer un Compte Shopify
1. Allez sur [Shopify.com](https://www.shopify.com/)
2. Cliquez sur "Start free trial"
3. Remplissez les informations de votre boutique
4. Choisissez le plan qui convient (Basic Shopify à 39$/mois CAD recommandé)

### 2. Configurer Printify pour POD (Print-on-Demand)

#### Installation de Printify
1. Dans Shopify Admin, allez dans **Apps**
2. Recherchez **"Printify"** dans l'App Store
3. Installez l'application (gratuite)
4. Créez un compte Printify ou connectez-vous

#### Configuration des Produits
1. Dans Printify, cliquez sur **"Create Product"**
2. Pour les **Puzzles** :
   - Sélectionnez "Puzzles" dans la catégorie
   - Uploadez vos designs (min. 300 DPI)
   - Prix suggérés : 39.99$ - 44.99$ CAD

3. Pour les **Posters** :
   - Sélectionnez "Posters" 
   - Formats : 18x24" et 24x36"
   - Prix suggéré : 32.99$ CAD

4. Pour les **T-Shirts** :
   - Sélectionnez "Unisex Premium T-Shirt"
   - Uploadez designs front/back
   - Prix suggéré : 35.99$ CAD

5. Pour le **Vinyl** :
   - Utilisez un fournisseur spécialisé comme Diggers Factory
   - Prix suggéré : 49.99$ CAD

### 3. Créer une Application Privée pour l'API

1. Dans Shopify Admin, allez dans **Settings** > **Apps and sales channels**
2. Cliquez sur **"Develop apps"**
3. Cliquez sur **"Create an app"**
4. Nommez l'app : "Mason Sterling Website"
5. Dans **Configuration** > **Storefront API** :
   - Activez tous les scopes nécessaires :
     - ✅ Read products
     - ✅ Read product listings
     - ✅ Read collections
     - ✅ Read inventory
     - ✅ Manage checkouts
     - ✅ Read customer accounts
6. Cliquez sur **"Install app"**
7. Copiez le **Storefront Access Token**

### 4. Configurer les Collections

Créez les collections suivantes dans Shopify :
1. **Puzzles** - ID: puzzles
2. **Posters** - ID: posters  
3. **Apparel** - ID: apparel
4. **Vinyl** - ID: vinyl
5. **Featured** - ID: featured (produits en vedette)

### 5. Configuration du Site Web

1. Créez un fichier `.env` à la racine du projet :
```env
VITE_SHOPIFY_DOMAIN=mason-sterling.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=votre-token-ici
```

2. Testez la connexion :
```bash
npm run dev
```

### 6. Configuration des Paiements

1. Dans **Settings** > **Payments** :
   - Activez **Shopify Payments** (recommandé)
   - Ou ajoutez **Stripe** / **PayPal**
   
2. Configurez les devises :
   - Devise principale : CAD
   - Activez USD si nécessaire

### 7. Configuration de la Livraison

1. Dans **Settings** > **Shipping and delivery** :
   - Zone Canada : 
     - Standard (5-7 jours) : 9.99$ CAD
     - Express (2-3 jours) : 19.99$ CAD
     - Gratuit au-dessus de 75$ CAD
   
   - Zone USA :
     - Standard : 14.99$ USD
     - Express : 29.99$ USD
   
   - International :
     - Calculé selon le poids

### 8. Politiques Légales

Créez les pages suivantes dans Shopify :
1. **Privacy Policy** (Politique de confidentialité)
2. **Terms of Service** (Conditions d'utilisation)
3. **Refund Policy** (Politique de remboursement)
4. **Shipping Policy** (Politique d'expédition)

### 9. Domaine Personnalisé

1. Dans **Settings** > **Domains** :
   - Achetez ou connectez votre domaine
   - Ex: shop.masonsterling.com

### 10. Analytics et Marketing

#### Google Analytics 4
1. Créez un compte [Google Analytics](https://analytics.google.com/)
2. Créez une propriété GA4
3. Copiez l'ID de mesure (G-XXXXXXXXXX)
4. Ajoutez dans le `.env` :
```env
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Meta Pixel (Facebook/Instagram)
1. Allez dans [Facebook Business Manager](https://business.facebook.com/)
2. Créez un Pixel
3. Copiez l'ID du Pixel
4. Ajoutez dans le `.env` :
```env
VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

## 🎯 Checklist de Lancement

- [ ] Compte Shopify créé et configuré
- [ ] Printify installé et produits créés
- [ ] Application API créée avec token
- [ ] Collections organisées
- [ ] `.env` configuré avec les bonnes valeurs
- [ ] Paiements activés
- [ ] Zones de livraison configurées
- [ ] Politiques légales rédigées
- [ ] Domaine personnalisé (optionnel)
- [ ] Analytics configurés

## 💰 Estimation des Coûts Mensuels

- **Shopify Basic** : 39$ CAD/mois
- **Domaine** : ~20$ CAD/an
- **Apps supplémentaires** : 0-50$ CAD/mois
- **Transaction fees** : 2.9% + 30¢ par transaction
- **Printify** : Gratuit (marge incluse dans prix)

## 📞 Support

- **Shopify Support** : support@shopify.com
- **Printify Support** : support@printify.com
- **Documentation Shopify** : [help.shopify.com](https://help.shopify.com/)

## 🚀 Prochaines Étapes

1. Complétez la configuration Shopify
2. Ajoutez vos vrais produits avec images haute qualité
3. Testez le processus de commande complet
4. Lancez des campagnes marketing
5. Connectez Spotify for Artists pour vendre directement