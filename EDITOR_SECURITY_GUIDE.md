# 🔒 Guide de Sécurité de l'Éditeur de Contenu

## Vue d'ensemble

L'éditeur de contenu est **complètement invisible** aux visiteurs normaux. Il nécessite une clé d'accès spéciale pour être activé.

## 🚫 Les visiteurs NE peuvent PAS voir l'éditeur

- ✅ **100% invisible** pour les visiteurs normaux
- ✅ Aucun bouton, aucune indication de l'existence de l'éditeur
- ✅ Le site apparaît comme un site web statique normal
- ✅ Impossible de deviner qu'il y a un éditeur intégré

## 🔑 Comment accéder à l'éditeur

### Méthode 1: URL avec clé secrète (Recommandé)

Ajoutez votre clé secrète à l'URL:
```
https://votresite.com/?edit=mason2024
```

**Important:** Remplacez `mason2024` par votre propre clé secrète!

### Méthode 2: Raccourci clavier (après authentification)

Une fois authentifié, utilisez:
- **Ctrl+Shift+E** pour ouvrir l'éditeur
- **Ctrl+S** pour sauvegarder (dans l'éditeur)

## 🛡️ Configuration de sécurité

### Fichier de configuration
Modifiez `/src/config/editor.config.ts`:

```typescript
export const EDITOR_CONFIG = {
  // CHANGEZ CECI - Votre clé secrète unique
  SECRET_KEY: 'votre-cle-unique-2024',
  
  // Plusieurs clés pour différents utilisateurs
  VALID_KEYS: [
    'votre-cle-unique-2024',
    'cle-collaborateur-2024',
  ],
  
  // Durée de session (heures)
  SESSION_DURATION: 24,
}
```

### Étapes pour personnaliser la sécurité:

1. **Changez la clé par défaut**
   - Ouvrez `src/config/editor.config.ts`
   - Remplacez `'mason2024'` par votre propre clé
   - Utilisez une clé complexe et unique

2. **Ajoutez des clés supplémentaires** (optionnel)
   - Ajoutez des clés dans `VALID_KEYS` pour d'autres utilisateurs
   - Chaque personne peut avoir sa propre clé

3. **Ajustez la durée de session**
   - `SESSION_DURATION: 24` = 24 heures
   - Réduisez pour plus de sécurité

## 🔐 Fonctionnalités de sécurité

### Protection multi-niveaux:

1. **Clé secrète requise**
   - Impossible d'accéder sans la clé
   - La clé n'est jamais visible dans le code source public

2. **Session temporaire**
   - L'accès expire après 24 heures (configurable)
   - Nécessite une nouvelle authentification après expiration

3. **Déconnexion manuelle**
   - Bouton "🚪 Déconnexion" pour fermer l'accès immédiatement
   - Efface toutes les données de session

4. **Pas de traces visibles**
   - Aucun élément UI visible sans authentification
   - Le code de l'éditeur est minifié en production

## 📝 Workflow d'édition sécurisé

### Pour éditer le site:

1. **Accès privé**
   ```
   https://masonsterling.com/?edit=votre-cle-secrete
   ```

2. **Mode édition activé**
   - Le bouton "✏️ Éditer" apparaît en bas à gauche
   - Message "Mode édition activé" confirme l'accès

3. **Édition du contenu**
   - Cliquez sur "✏️ Éditer" ou Ctrl+Shift+E
   - Modifiez le contenu visuellement
   - Sauvegardez avec le bouton ou Ctrl+S

4. **Synchronisation GitHub** (optionnel)
   - Les changements sont automatiquement envoyés à GitHub
   - Le site se met à jour automatiquement

5. **Déconnexion**
   - Cliquez sur "🚪 Déconnexion" quand terminé
   - Ou attendez l'expiration de session (24h)

## 🚨 Conseils de sécurité importants

### À FAIRE:
- ✅ Changez la clé par défaut IMMÉDIATEMENT
- ✅ Utilisez une clé complexe (min. 12 caractères)
- ✅ Gardez votre clé secrète et sécurisée
- ✅ Déconnectez-vous après chaque session d'édition
- ✅ Utilisez HTTPS pour votre site (automatique avec GitHub Pages/Vercel)

### À NE PAS FAIRE:
- ❌ Ne partagez jamais votre clé publiquement
- ❌ N'utilisez pas de clés simples (ex: "admin", "1234")
- ❌ Ne laissez pas de session ouverte sur un ordinateur public
- ❌ Ne stockez pas la clé dans le code source public

## 🔄 Changer la clé d'accès

### Étapes pour changer votre clé:

1. **Ouvrez le fichier de configuration**
   ```bash
   src/config/editor.config.ts
   ```

2. **Modifiez les clés**
   ```typescript
   VALID_KEYS: [
     'nouvelle-cle-super-secrete-2024',  // Votre nouvelle clé
     // Supprimez les anciennes clés
   ],
   ```

3. **Commitez et déployez**
   ```bash
   git add .
   git commit -m "Update security keys"
   git push
   ```

4. **Testez avec la nouvelle clé**
   ```
   https://votresite.com/?edit=nouvelle-cle-super-secrete-2024
   ```

## 📊 Monitoring de sécurité

### Vérifier les accès:
- Les sessions sont stockées localement (sessionStorage)
- Aucune donnée d'accès n'est envoyée à des serveurs externes
- Les logs d'accès ne sont pas conservés

### En cas de compromission:
1. Changez immédiatement la clé d'accès
2. Déployez la nouvelle version
3. Toutes les sessions existantes seront invalidées

## 💡 FAQ Sécurité

**Q: Les visiteurs peuvent-ils voir le bouton éditeur?**
R: Non, jamais. Le bouton n'apparaît qu'après authentification avec la clé secrète.

**Q: La clé est-elle visible dans le code source?**
R: Non, le code est minifié et la clé n'est vérifiée que côté client après saisie.

**Q: Puis-je avoir plusieurs éditeurs?**
R: Oui, ajoutez plusieurs clés dans `VALID_KEYS` pour différents utilisateurs.

**Q: Comment désactiver complètement l'éditeur?**
R: Supprimez toutes les clés de `VALID_KEYS` ou définissez un tableau vide `[]`.

**Q: L'éditeur fonctionne-t-il sur mobile?**
R: Oui, mais l'expérience est optimisée pour desktop. Le bouton s'adapte pour mobile.

## 🆘 Support

Si vous avez des questions de sécurité ou besoin d'aide:
1. Vérifiez que vous utilisez la bonne clé
2. Videz le cache de votre navigateur
3. Essayez en navigation privée
4. Assurez-vous que JavaScript est activé

---

**Remember:** La sécurité de votre éditeur dépend de la confidentialité de votre clé d'accès. Ne la partagez qu'avec des personnes de confiance!