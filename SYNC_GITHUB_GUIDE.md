# 🔄 Guide : Synchronisation Automatique avec GitHub

## 🎯 Objectif
Faire que vos modifications dans l'éditeur se sauvegardent AUTOMATIQUEMENT sur GitHub (et donc sur votre site en ligne).

## ✨ Comment ça marche ?

### Sans Configuration GitHub :
1. Vous modifiez dans l'éditeur
2. Vous cliquez "Sauvegarder"
3. ✅ Changements visibles localement
4. ❌ PAS visible sur le site en ligne

### Avec Configuration GitHub (RECOMMANDÉ) :
1. Vous modifiez dans l'éditeur
2. Vous cliquez "Sauvegarder"
3. ✅ Changements visibles localement
4. ✅ AUTOMATIQUEMENT envoyé sur GitHub
5. ✅ Visible sur le site en ligne en 2 minutes !

## 📋 Configuration (5 minutes, une seule fois)

### Étape 1 : Créer un Token GitHub

1. **Connectez-vous** à GitHub
2. **Allez sur** : https://github.com/settings/tokens/new
3. **Configurez** :
   - Token name : `Mason Sterling Editor`
   - Expiration : `90 days` (ou `No expiration`)
   - Cochez : ✅ **repo** (Full control of private repositories)
4. **Cliquez** sur `Generate token` (bouton vert)
5. **IMPORTANT** : Copiez le token qui commence par `ghp_xxxxx...`
   
   ⚠️ **ATTENTION** : Vous ne pourrez plus le revoir ! Copiez-le maintenant.

### Étape 2 : Configurer l'Éditeur

1. **Ouvrez votre site** avec l'éditeur (`?edit=true`)
2. **Cliquez** sur le bouton `🔗 GitHub` dans l'éditeur
3. **Collez** votre token
4. **C'est fait !** ✅

## 🚀 Utilisation Quotidienne

### Workflow Simple :
1. **Ouvrir** l'éditeur (`?edit=true` ou Ctrl+Shift+E)
2. **Modifier** ce que vous voulez (textes, images, liens)
3. **Cliquer** sur 💾 Sauvegarder
4. **Automatiquement** :
   - ✅ Sauvegardé localement
   - ✅ Envoyé sur GitHub
   - ✅ Déployé sur Vercel/GitHub Pages
5. **Attendez** 2-3 minutes
6. **Voilà !** Votre site est à jour partout !

## 🎨 Exemples Concrets

### Changer votre bio :
```
1. Ouvrir l'éditeur
2. Aller dans "À Propos"
3. Modifier le texte
4. Cliquer "Sauvegarder"
5. ✅ Automatiquement sur GitHub et en ligne !
```

### Ajouter une nouvelle photo :
```
1. Ouvrir l'éditeur
2. Aller dans "Accueil"
3. Cliquer "📷 Upload" 
4. Choisir votre photo
5. Cliquer "Sauvegarder"
6. ✅ Photo visible partout !
```

### Mettre à jour les dates de tournée :
```
1. Ouvrir l'éditeur
2. Aller dans "Tournée"
3. Modifier les dates/lieux
4. Cliquer "Sauvegarder"
5. ✅ Mis à jour instantanément !
```

## ❓ FAQ

### Q: C'est sécurisé ?
**R:** Oui ! Le token est stocké localement dans votre navigateur. Personne d'autre ne peut l'utiliser.

### Q: Le token expire ?
**R:** Après 90 jours (ou jamais si vous choisissez "No expiration"). Vous devrez en créer un nouveau.

### Q: Je peux modifier depuis n'importe quel ordinateur ?
**R:** Oui, mais vous devrez entrer le token sur chaque nouvel ordinateur.

### Q: Ça coûte quelque chose ?
**R:** Non ! GitHub est gratuit pour votre usage.

### Q: Les changements sont immédiats ?
**R:** 
- Localement : OUI (instantané)
- Sur GitHub : OUI (quelques secondes)
- Sur le site en ligne : 2-3 minutes (le temps du déploiement)

## 🔥 Avantages

✅ **Plus besoin de coder**
✅ **Plus besoin de Git en ligne de commande**
✅ **Modifications depuis n'importe où**
✅ **Backup automatique sur GitHub**
✅ **Historique de tous vos changements**
✅ **Rollback possible si erreur**

## 🆘 Problèmes ?

### "Token invalide"
→ Vérifiez que vous avez bien copié TOUT le token (ghp_xxxx...)

### "Erreur de sauvegarde"
→ Vérifiez votre connexion internet
→ Essayez de recréer un token

### "Changements pas visibles en ligne"
→ Attendez 2-3 minutes
→ Videz le cache (Ctrl+F5)
→ Vérifiez sur GitHub que le commit est bien là

## 🎉 Résumé

Avec cette configuration (5 minutes) :
1. **Vous modifiez** visuellement
2. **Vous sauvegardez** 
3. **C'est en ligne** automatiquement !

Plus besoin de :
- ❌ Ligne de commande
- ❌ Git push/pull
- ❌ FTP
- ❌ Connaissance technique

**Vous êtes 100% autonome !** 🚀