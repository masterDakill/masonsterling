// Configuration de l'éditeur
// IMPORTANT: Changez ces valeurs pour votre sécurité

export const EDITOR_CONFIG = {
  // Mot de passe pour accéder à l'éditeur
  // Changez ceci pour quelque chose de unique et sécurisé
  SECRET_KEY: '$Mason241436$',
  
  // Alternative: Utilisez plusieurs clés pour différents utilisateurs
  VALID_KEYS: [
    '$Mason241436$',      // Votre clé principale
    '$Mason241436$',      // Clé admin
    // Ajoutez d'autres clés si nécessaire
  ],
  
  // Emails autorisés (optionnel, pour future authentification)
  AUTHORIZED_EMAILS: [
    'contact@masonsterling-ai.com',
    // Ajoutez d'autres emails autorisés
  ],
  
  // Masquer complètement en production
  HIDE_IN_PRODUCTION: true,
  
  // Durée de session en heures (24h par défaut)
  SESSION_DURATION: 24,
  
  // Message d'erreur personnalisé
  ACCESS_DENIED_MESSAGE: 'Accès refusé. Clé d\'édition invalide.',
  
  // URL de redirection après déconnexion
  LOGOUT_REDIRECT: '/'
}

// Fonction pour vérifier l'accès
export const checkEditorAccess = (): boolean => {
  const urlParams = new URLSearchParams(window.location.search)
  const key = urlParams.get('edit')
  
  // Vérifier si la clé est valide
  if (key && EDITOR_CONFIG.VALID_KEYS.includes(key)) {
    // Sauvegarder l'accès pour cette session
    sessionStorage.setItem('editor_access', 'granted')
    sessionStorage.setItem('editor_access_time', Date.now().toString())
    return true
  }
  
  // Vérifier la session existante
  const savedAccess = sessionStorage.getItem('editor_access')
  const accessTime = sessionStorage.getItem('editor_access_time')
  
  if (savedAccess === 'granted' && accessTime) {
    const hoursElapsed = (Date.now() - parseInt(accessTime)) / (1000 * 60 * 60)
    if (hoursElapsed < EDITOR_CONFIG.SESSION_DURATION) {
      return true
    }
  }
  
  return false
}

// Fonction pour se déconnecter de l'éditeur
export const logoutEditor = () => {
  sessionStorage.removeItem('editor_access')
  sessionStorage.removeItem('editor_access_time')
  localStorage.removeItem('edit_mode')
  window.location.href = EDITOR_CONFIG.LOGOUT_REDIRECT
}