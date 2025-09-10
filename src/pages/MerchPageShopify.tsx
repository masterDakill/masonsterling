import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts, useShopify } from '../hooks/useShopify'
import Cart from '../components/Cart'
import { ShopifyProduct } from '../services/shopify'

const MerchPageShopify = () => {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({})
  
  const { products, loading, error, fetchProducts, fetchProductsByCollection } = useProducts()
  const { addToCart, cartCount } = useShopify()

  useEffect(() => {
    // Charger les produits au montage
    if (selectedCategory === 'all') {
      fetchProducts()
    } else {
      // Mapper les catégories aux IDs de collections Shopify
      const collectionMap: Record<string, string> = {
        'puzzles': 'puzzles-collection-id',
        'posters': 'posters-collection-id',
        'apparel': 'apparel-collection-id',
        'vinyl': 'vinyl-collection-id'
      }
      
      const collectionId = collectionMap[selectedCategory]
      if (collectionId) {
        fetchProductsByCollection(collectionId)
      }
    }
  }, [selectedCategory])

  const handleAddToCart = async (product: ShopifyProduct) => {
    // Trouver le variant sélectionné ou prendre le premier
    const size = selectedSize[product.id]
    const variant = size 
      ? product.variants.find(v => v.title === size) || product.variants[0]
      : product.variants[0]
    
    if (variant) {
      const success = await addToCart(variant.id)
      if (success) {
        // Animation de confirmation
        const button = document.getElementById(`add-cart-${product.id}`)
        if (button) {
          button.textContent = '✓ Ajouté!'
          button.classList.add('success')
          setTimeout(() => {
            button.textContent = 'Ajouter au panier'
            button.classList.remove('success')
          }, 2000)
        }
      }
    }
  }

  const getCategoryFromProduct = (product: ShopifyProduct): string => {
    // Déterminer la catégorie basée sur le type de produit ou les tags
    if (product.productType.toLowerCase().includes('puzzle')) return 'puzzles'
    if (product.productType.toLowerCase().includes('poster')) return 'posters'
    if (product.productType.toLowerCase().includes('shirt') || 
        product.productType.toLowerCase().includes('apparel')) return 'apparel'
    if (product.productType.toLowerCase().includes('vinyl')) return 'vinyl'
    
    // Vérifier aussi les tags
    if (product.tags.some(tag => tag.toLowerCase().includes('puzzle'))) return 'puzzles'
    if (product.tags.some(tag => tag.toLowerCase().includes('poster'))) return 'posters'
    if (product.tags.some(tag => tag.toLowerCase().includes('apparel'))) return 'apparel'
    if (product.tags.some(tag => tag.toLowerCase().includes('vinyl'))) return 'vinyl'
    
    return 'other'
  }

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => getCategoryFromProduct(p) === selectedCategory)

  const featuredProducts = products.filter(p => p.tags.includes('featured'))

  return (
    <main className="merch-page">
      <div className="merch-hero">
        <div className="container">
          <h1>Boutique Officielle</h1>
          <p>Soutenez la musique avec des produits exclusifs</p>
          
          {/* Indicateur de panier */}
          <button 
            className="cart-indicator"
            onClick={() => setIsCartOpen(true)}
            aria-label="Ouvrir le panier"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2L6 9H3L5 2H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 2L18 9H21L19 2H15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9H21L19 21H5L3 9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Produits en vedette */}
      {!category && featuredProducts.length > 0 && (
        <section className="featured-products">
          <div className="container">
            <h2>Articles en Vedette</h2>
            <div className="featured-grid">
              {featuredProducts.map(product => (
                <div key={product.id} className="featured-card">
                  <div className="featured-image">
                    <img 
                      src={product.images[0]?.src || '/assets/images/placeholder.jpg'} 
                      alt={product.title} 
                    />
                    {product.tags.includes('limited-edition') && (
                      <div className="limited-badge">Édition Limitée</div>
                    )}
                  </div>
                  <div className="featured-info">
                    <h3>{product.title}</h3>
                    <p className="featured-description">{product.description}</p>
                    <div className="featured-price">
                      ${product.variants[0]?.price || '0.00'} CAD
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary"
                      disabled={!product.variants[0]?.available}
                    >
                      {product.variants[0]?.available ? 'Ajouter au panier' : 'Rupture de stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtre de catégories */}
      <div className="category-filter">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              Tous les produits
            </button>
            <button 
              className={selectedCategory === 'puzzles' ? 'active' : ''}
              onClick={() => setSelectedCategory('puzzles')}
            >
              Puzzles
            </button>
            <button 
              className={selectedCategory === 'posters' ? 'active' : ''}
              onClick={() => setSelectedCategory('posters')}
            >
              Posters
            </button>
            <button 
              className={selectedCategory === 'apparel' ? 'active' : ''}
              onClick={() => setSelectedCategory('apparel')}
            >
              Vêtements
            </button>
            <button 
              className={selectedCategory === 'vinyl' ? 'active' : ''}
              onClick={() => setSelectedCategory('vinyl')}
            >
              Vinyles
            </button>
          </div>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="products-section">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p>Chargement des produits...</p>
            </div>
          ) : error ? (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={() => fetchProducts()} className="btn btn-secondary">
                Réessayer
              </button>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>Aucun produit trouvé dans cette catégorie</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => {
                const mainVariant = product.variants[0]
                const hasMultipleSizes = product.variants.length > 1 && 
                  product.variants.some(v => v.title !== 'Default Title')
                
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img 
                        src={product.images[0]?.src || '/assets/images/placeholder.jpg'} 
                        alt={product.title} 
                      />
                      {!mainVariant?.available && (
                        <div className="out-of-stock">Rupture de stock</div>
                      )}
                    </div>
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <p className="product-category">{product.productType}</p>
                      <p className="product-description">{product.description}</p>
                      
                      {hasMultipleSizes && (
                        <div className="product-sizes">
                          <label>Taille:</label>
                          <select 
                            value={selectedSize[product.id] || ''}
                            onChange={(e) => setSelectedSize({
                              ...selectedSize,
                              [product.id]: e.target.value
                            })}
                          >
                            <option value="">Choisir...</option>
                            {product.variants.map(variant => (
                              <option 
                                key={variant.id} 
                                value={variant.title}
                                disabled={!variant.available}
                              >
                                {variant.title} {!variant.available && '(Épuisé)'}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      
                      <div className="product-footer">
                        <span className="product-price">
                          ${mainVariant?.price || '0.00'} CAD
                        </span>
                        <button 
                          id={`add-cart-${product.id}`}
                          onClick={() => handleAddToCart(product)}
                          disabled={!mainVariant?.available}
                          className="add-to-cart-btn"
                        >
                          {mainVariant?.available ? 'Ajouter au panier' : 'Épuisé'}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Notice d'intégration Shopify */}
      <div className="integration-notice">
        <div className="container">
          <div className="notice-content">
            <h3>🛍️ Paiement Sécurisé</h3>
            <p>Propulsé par Shopify • Impression à la demande avec Printify</p>
            <p>Livraison gratuite sur les commandes de plus de 75$ CAD</p>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="merch-newsletter">
        <div className="container">
          <h2>Obtenez 10% de rabais sur votre première commande</h2>
          <p>Abonnez-vous à notre infolettre pour des offres exclusives</p>
          <a href="/newsletter" className="btn btn-secondary">
            S'abonner et économiser
          </a>
        </div>
      </div>

      {/* Composant Cart */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  )
}

export default MerchPageShopify