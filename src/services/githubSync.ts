// Service de synchronisation avec GitHub
// Sauvegarde automatique du contenu dans le repository

class GitHubSync {
  private token: string = ''
  private owner: string = 'masterDakill'
  private repo: string = 'masonsterling'
  private branch: string = 'main'
  private contentPath: string = 'public/content.json'

  // Configurer le token GitHub (à faire une seule fois)
  setToken(token: string) {
    this.token = token
    localStorage.setItem('github_token', token)
  }

  // Récupérer le token stocké
  getToken(): string {
    return this.token || localStorage.getItem('github_token') || ''
  }

  // Sauvegarder le contenu sur GitHub
  async saveToGitHub(content: any, message: string = 'Update content via editor'): Promise<boolean> {
    const token = this.getToken()
    
    if (!token) {
      alert('⚠️ Token GitHub requis. Consultez le guide.')
      return false
    }

    try {
      // 1. Récupérer le SHA actuel du fichier
      const currentFile = await this.getFile()
      const sha = currentFile?.sha

      // 2. Encoder le contenu en base64
      const contentString = JSON.stringify(content, null, 2)
      const contentBase64 = btoa(unescape(encodeURIComponent(contentString)))

      // 3. URL de l'API GitHub
      const apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.contentPath}`

      // 4. Faire la requête PUT pour mettre à jour le fichier
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          content: contentBase64,
          sha: sha, // SHA requis pour update
          branch: this.branch
        })
      })

      if (response.ok) {
        this.showNotification('✅ Sauvegardé sur GitHub!', 'success')
        return true
      } else {
        const error = await response.json()
        console.error('Erreur GitHub:', error)
        this.showNotification('❌ Erreur de sauvegarde GitHub', 'error')
        return false
      }
    } catch (error) {
      console.error('Erreur:', error)
      this.showNotification('❌ Erreur de connexion', 'error')
      return false
    }
  }

  // Récupérer le fichier actuel depuis GitHub
  async getFile(): Promise<any> {
    const token = this.getToken()
    if (!token) return null

    try {
      const apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.contentPath}?ref=${this.branch}`
      
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      })

      if (response.ok) {
        return await response.json()
      }
      return null
    } catch (error) {
      console.error('Erreur récupération:', error)
      return null
    }
  }

  // Charger le contenu depuis GitHub
  async loadFromGitHub(): Promise<any> {
    const file = await this.getFile()
    
    if (file && file.content) {
      try {
        // Décoder le base64
        const contentString = decodeURIComponent(escape(atob(file.content)))
        const content = JSON.parse(contentString)
        this.showNotification('✅ Contenu chargé depuis GitHub', 'success')
        return content
      } catch (error) {
        console.error('Erreur parsing:', error)
        return null
      }
    }
    return null
  }

  // Afficher une notification
  private showNotification(message: string, type: 'success' | 'error') {
    const notification = document.createElement('div')
    notification.className = `github-notification ${type}`
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      animation: slideIn 0.3s ease;
      background: ${type === 'success' ? '#10b981' : '#ef4444'};
    `
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 4000)
  }

  // Créer un commit et push automatique
  async autoCommitAndPush(content: any): Promise<boolean> {
    const date = new Date().toLocaleString('fr-CA')
    const message = `📝 Mise à jour du contenu - ${date}`
    return await this.saveToGitHub(content, message)
  }

  // Vérifier si la configuration est valide
  isConfigured(): boolean {
    return !!this.getToken()
  }

  // Guide de configuration
  showSetupGuide() {
    const guide = `
🔐 Configuration GitHub Token:

1. Allez sur: https://github.com/settings/tokens/new
2. Nom: "Mason Sterling Editor"
3. Expiration: 90 jours (ou plus)
4. Cochez: ✅ repo (Full control)
5. Cliquez "Generate token"
6. Copiez le token (ghp_xxxxx...)
7. Collez-le dans l'éditeur

⚠️ IMPORTANT: Gardez ce token secret!
    `
    alert(guide)
  }
}

export default new GitHubSync()