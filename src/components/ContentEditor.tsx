import { useState, useEffect } from 'react'
import contentManager, { ContentData } from '../services/contentManager'
import githubSync from '../services/githubSync'
import './ContentEditor.css'

interface ContentEditorProps {
  isOpen: boolean
  onClose: () => void
}

const ContentEditor = ({ isOpen, onClose }: ContentEditorProps) => {
  const [content, setContent] = useState<ContentData>(contentManager.getContent())
  const [activeSection, setActiveSection] = useState('hero')
  const [unsavedChanges, setUnsavedChanges] = useState(false)
  const [showImageUploader, setShowImageUploader] = useState(false)
  const [currentImageField, setCurrentImageField] = useState<string>('')
  const [githubToken, setGithubToken] = useState(githubSync.getToken())
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setContent(contentManager.getContent())
    }
  }, [isOpen])

  const handleSave = async () => {
    contentManager.saveContent(content)
    setUnsavedChanges(false)
    
    // Notification de succès locale
    const notification = document.createElement('div')
    notification.className = 'editor-notification success'
    notification.textContent = '✓ Changements sauvegardés localement'
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 3000)
    
    // Sauvegarder sur GitHub si configuré
    if (githubSync.isConfigured()) {
      setIsSyncing(true)
      const success = await githubSync.autoCommitAndPush(content)
      setIsSyncing(false)
      
      if (success) {
        const githubNotif = document.createElement('div')
        githubNotif.className = 'editor-notification success'
        githubNotif.textContent = '☁️ Synchronisé avec GitHub!'
        document.body.appendChild(githubNotif)
        setTimeout(() => githubNotif.remove(), 3000)
      }
    }
    
    // Recharger la page pour appliquer les changements
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

  const handleExport = () => {
    const json = contentManager.exportContent()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'mason-sterling-content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const json = event.target?.result as string
      if (contentManager.importContent(json)) {
        setContent(contentManager.getContent())
        setUnsavedChanges(false)
        alert('Contenu importé avec succès!')
      } else {
        alert('Erreur lors de l\'import du fichier')
      }
    }
    reader.readAsText(file)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string
      
      // Mettre à jour le champ image approprié
      const fields = currentImageField.split('.')
      let newContent = { ...content }
      let current: any = newContent
      
      for (let i = 0; i < fields.length - 1; i++) {
        current = current[fields[i]]
      }
      
      current[fields[fields.length - 1]] = imageUrl
      setContent(newContent)
      setUnsavedChanges(true)
      setShowImageUploader(false)
    }
    reader.readAsDataURL(file)
  }

  const updateField = (path: string, value: any) => {
    const fields = path.split('.')
    let newContent = { ...content }
    let current: any = newContent
    
    for (let i = 0; i < fields.length - 1; i++) {
      current = current[fields[i]]
    }
    
    current[fields[fields.length - 1]] = value
    setContent(newContent)
    setUnsavedChanges(true)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="editor-overlay" onClick={onClose} />
      <div className="content-editor">
        <div className="editor-header">
          <h2>🎨 Éditeur de Contenu</h2>
          <div className="editor-actions">
            <button 
              className="btn-save"
              onClick={handleSave}
              disabled={!unsavedChanges || isSyncing}
            >
              {isSyncing ? '⏳ Sync...' : '💾 Sauvegarder'}
            </button>
            {!githubSync.isConfigured() && (
              <button 
                className="btn-github"
                onClick={() => {
                  const token = prompt('Entrez votre token GitHub (ghp_...):')
                  if (token) {
                    githubSync.setToken(token)
                    setGithubToken(token)
                    alert('✅ Token configuré! Vos modifications seront maintenant synchronisées avec GitHub.')
                  } else {
                    githubSync.showSetupGuide()
                  }
                }}
                title="Configurer la synchronisation GitHub"
              >
                🔗 GitHub
              </button>
            )}
            <button className="btn-export" onClick={handleExport}>
              📥 Exporter
            </button>
            <label className="btn-import">
              📤 Importer
              <input 
                type="file" 
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
              />
            </label>
            <button className="editor-close" onClick={onClose}>✕</button>
          </div>
        </div>

        <div className="editor-body">
          <div className="editor-sidebar">
            <button 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={() => setActiveSection('hero')}
            >
              🏠 Accueil
            </button>
            <button 
              className={activeSection === 'ep' ? 'active' : ''}
              onClick={() => setActiveSection('ep')}
            >
              💿 EP & Musique
            </button>
            <button 
              className={activeSection === 'singles' ? 'active' : ''}
              onClick={() => setActiveSection('singles')}
            >
              🎵 Singles
            </button>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              👤 À Propos
            </button>
            <button 
              className={activeSection === 'tour' ? 'active' : ''}
              onClick={() => setActiveSection('tour')}
            >
              🎤 Tournée
            </button>
            <button 
              className={activeSection === 'social' ? 'active' : ''}
              onClick={() => setActiveSection('social')}
            >
              📱 Réseaux Sociaux
            </button>
            <button 
              className={activeSection === 'newsletter' ? 'active' : ''}
              onClick={() => setActiveSection('newsletter')}
            >
              📧 Newsletter
            </button>
            <button 
              className={activeSection === 'seo' ? 'active' : ''}
              onClick={() => setActiveSection('seo')}
            >
              🔍 SEO
            </button>
          </div>

          <div className="editor-content">
            {activeSection === 'hero' && (
              <div className="editor-section">
                <h3>🏠 Section Accueil</h3>
                
                <div className="form-group">
                  <label>Titre Principal</label>
                  <input 
                    type="text"
                    value={content.hero.title}
                    onChange={(e) => updateField('hero.title', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Sous-titre</label>
                  <input 
                    type="text"
                    value={content.hero.subtitle}
                    onChange={(e) => updateField('hero.subtitle', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Texte du Bouton CTA</label>
                  <input 
                    type="text"
                    value={content.hero.ctaText}
                    onChange={(e) => updateField('hero.ctaText', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Lien du Bouton CTA</label>
                  <input 
                    type="text"
                    value={content.hero.ctaLink}
                    onChange={(e) => updateField('hero.ctaLink', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Image de Fond</label>
                  <div className="image-input">
                    <input 
                      type="text"
                      value={content.hero.backgroundImage}
                      onChange={(e) => updateField('hero.backgroundImage', e.target.value)}
                      placeholder="URL ou chemin de l'image"
                    />
                    <label className="btn-upload">
                      📷 Upload
                      <input 
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'ep' && (
              <div className="editor-section">
                <h3>💿 EP Love's Journey</h3>
                
                <div className="form-group">
                  <label>Titre de l'EP</label>
                  <input 
                    type="text"
                    value={content.ep.title}
                    onChange={(e) => updateField('ep.title', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    value={content.ep.description}
                    onChange={(e) => updateField('ep.description', e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="form-group">
                  <label>Lien Spotify</label>
                  <input 
                    type="url"
                    value={content.ep.spotifyLink}
                    onChange={(e) => updateField('ep.spotifyLink', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Lien Apple Music</label>
                  <input 
                    type="url"
                    value={content.ep.appleMusicLink}
                    onChange={(e) => updateField('ep.appleMusicLink', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Lien SoundCloud</label>
                  <input 
                    type="url"
                    value={content.ep.soundcloudLink}
                    onChange={(e) => updateField('ep.soundcloudLink', e.target.value)}
                  />
                </div>

                <h4>Pistes</h4>
                {content.ep.tracks.map((track, index) => (
                  <div key={index} className="track-editor">
                    <input 
                      type="text"
                      value={track.title}
                      onChange={(e) => {
                        const newTracks = [...content.ep.tracks]
                        newTracks[index].title = e.target.value
                        updateField('ep.tracks', newTracks)
                      }}
                      placeholder="Titre de la piste"
                    />
                    <input 
                      type="text"
                      value={track.duration}
                      onChange={(e) => {
                        const newTracks = [...content.ep.tracks]
                        newTracks[index].duration = e.target.value
                        updateField('ep.tracks', newTracks)
                      }}
                      placeholder="Durée"
                      style={{ width: '100px' }}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'social' && (
              <div className="editor-section">
                <h3>📱 Liens Réseaux Sociaux</h3>
                
                {Object.entries(content.social).map(([platform, url]) => (
                  <div key={platform} className="form-group">
                    <label>{platform.charAt(0).toUpperCase() + platform.slice(1)}</label>
                    <input 
                      type="url"
                      value={url}
                      onChange={(e) => updateField(`social.${platform}`, e.target.value)}
                      placeholder={`Lien ${platform}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'about' && (
              <div className="editor-section">
                <h3>👤 Section À Propos</h3>
                
                <div className="form-group">
                  <label>Titre</label>
                  <input 
                    type="text"
                    value={content.about.title}
                    onChange={(e) => updateField('about.title', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Biographie</label>
                  <textarea 
                    value={content.about.bio}
                    onChange={(e) => updateField('about.bio', e.target.value)}
                    rows={6}
                  />
                </div>

                <h4>Statistiques</h4>
                {content.about.stats.map((stat, index) => (
                  <div key={index} className="stat-editor">
                    <input 
                      type="text"
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...content.about.stats]
                        newStats[index].label = e.target.value
                        updateField('about.stats', newStats)
                      }}
                      placeholder="Label"
                    />
                    <input 
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...content.about.stats]
                        newStats[index].value = e.target.value
                        updateField('about.stats', newStats)
                      }}
                      placeholder="Valeur"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'seo' && (
              <div className="editor-section">
                <h3>🔍 SEO & Métadonnées</h3>
                
                <div className="form-group">
                  <label>Titre de la Page</label>
                  <input 
                    type="text"
                    value={content.seo.title}
                    onChange={(e) => updateField('seo.title', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    value={content.seo.description}
                    onChange={(e) => updateField('seo.description', e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="form-group">
                  <label>Mots-clés (séparés par des virgules)</label>
                  <input 
                    type="text"
                    value={content.seo.keywords.join(', ')}
                    onChange={(e) => updateField('seo.keywords', e.target.value.split(', '))}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="editor-footer">
          <p className="editor-tip">
            💡 Astuce: Utilisez Ctrl+S pour sauvegarder rapidement
          </p>
          {unsavedChanges && (
            <p className="unsaved-warning">
              ⚠️ Changements non sauvegardés
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default ContentEditor