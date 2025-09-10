import { useState, useEffect } from 'react'
import ContentEditor from './ContentEditor'
import './EditorButton.css'

const EditorButton = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Afficher le bouton éditeur seulement en mode développement ou avec une clé secrète
    const urlParams = new URLSearchParams(window.location.search)
    const editMode = urlParams.get('edit') === 'true' || 
                     localStorage.getItem('edit_mode') === 'true' ||
                     process.env.NODE_ENV === 'development'
    
    setIsVisible(editMode)

    // Raccourci clavier : Ctrl+Shift+E pour ouvrir l'éditeur
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault()
        setIsVisible(true)
        setIsEditorOpen(true)
        localStorage.setItem('edit_mode', 'true')
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
        </div>
      )}
    </>
  )
}

export default EditorButton