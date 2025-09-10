import { useState, useEffect } from 'react'
import ContentEditor from './ContentEditor'
import { checkEditorAccess, logoutEditor } from '../config/editor.config'
import './EditorButton.css'

const EditorButton = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier l'accès à l'éditeur avec le système de sécurité
    const hasAccess = checkEditorAccess()
    setIsVisible(hasAccess)

    // Raccourci clavier : Ctrl+Shift+E SEULEMENT si déjà autorisé
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E' && hasAccess) {
        e.preventDefault()
        setIsEditorOpen(true)
      }
      
      // Ctrl+S pour sauvegarder quand l'éditeur est ouvert
      if (e.ctrlKey && e.key === 's' && isEditorOpen) {
        e.preventDefault()
        // Déclencher la sauvegarde via un événement custom
        window.dispatchEvent(new CustomEvent('editor-save'))
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isEditorOpen])

  if (!isVisible) return null

  return (
    <>
      <button 
        className="editor-button"
        onClick={() => setIsEditorOpen(true)}
        title="Ouvrir l'éditeur de contenu (Ctrl+Shift+E)"
      >
        <span className="editor-icon">✏️</span>
        <span className="editor-text">Éditer</span>
      </button>

      <ContentEditor 
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
      />

      {/* Instructions */}
      {!isEditorOpen && (
        <div className="editor-hint">
          <p>Mode édition activé</p>
          <p className="hint-shortcut">Ctrl+Shift+E pour éditer</p>
          <button 
            onClick={logoutEditor}
            className="logout-btn"
            title="Se déconnecter de l'éditeur"
          >
            🚪 Déconnexion
          </button>
        </div>
      )}
    </>
  )
}

export default EditorButton