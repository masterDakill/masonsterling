import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

interface Product {
  id: string
  title: string
  category: string
  price: number
  currency: string
  image: string
  description: string
  sizes?: string[]
  shopifyId?: string
  printifyId?: string
  inStock: boolean
  featured?: boolean
}

const MerchPage = () => {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [cartCount, setCartCount] = useState(0)

  // Product catalog with CAD pricing
  const productCatalog: Product[] = [
    // Puzzles
    {
      id: 'puzzle-1',
      title: 'Love\'s Journey Album Art Puzzle',
      category: 'puzzles',
      price: 44.99,
      currency: 'CAD',
      image: '/assets/images/merch/puzzle-loves-journey.jpg',
      description: '1000 piece premium puzzle featuring the Love\'s Journey EP artwork',
      shopifyId: '', // To be filled with actual Shopify ID
      printifyId: '', // To be filled with actual Printify ID
      inStock: true,
      featured: true
    },
    {
      id: 'puzzle-2',
      title: 'Neon Dreams City Puzzle',
      category: 'puzzles',
      price: 39.99,
      currency: 'CAD',
      image: '/assets/images/merch/puzzle-neon-dreams.jpg',
      description: '500 piece puzzle with neon city aesthetic',
      inStock: true
    },
    {
      id: 'puzzle-3',
      title: 'Mason Sterling Portrait Puzzle',
      category: 'puzzles',
      price: 42.99,
      currency: 'CAD',
      image: '/assets/images/merch/puzzle-portrait.jpg',
      description: '750 piece collector\'s edition portrait puzzle',
      inStock: true,
      featured: true
    },
    
    // Posters
    {
      id: 'poster-1',
      title: 'Love\'s Journey EP Poster',
      category: 'posters',
      price: 32.99,
      currency: 'CAD',
      image: '/assets/images/merch/poster-ep.jpg',
      description: '24x36" high-quality print on premium matte paper',
      sizes: ['18x24"', '24x36"'],
      inStock: true
    },
    {
      id: 'poster-2',
      title: 'Tour Dates 2024 Poster',
      category: 'posters',
      price: 32.99,
      currency: 'CAD',
      image: '/assets/images/merch/poster-tour.jpg',
      description: 'Limited edition tour poster with all 2024 dates',
      sizes: ['18x24"', '24x36"'],
      inStock: true
    },
    
    // T-Shirts
    {
      id: 'tshirt-1',
      title: 'Love\'s Journey Tour Tee',
      category: 'apparel',
      price: 35.99,
      currency: 'CAD',
      image: '/assets/images/merch/tshirt-tour.jpg',
      description: 'Premium cotton blend tour t-shirt',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      inStock: true,
      featured: true
    },
    {
      id: 'tshirt-2',
      title: 'Neon Love Graphic Tee',
      category: 'apparel',
      price: 35.99,
      currency: 'CAD',
      image: '/assets/images/merch/tshirt-neon.jpg',
      description: 'Soft cotton tee with neon love artwork',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      inStock: true
    },
    
    // Vinyl
    {
      id: 'vinyl-1',
      title: 'Love\'s Journey EP - Limited Edition Vinyl',
      category: 'vinyl',
      price: 49.99,
      currency: 'CAD',
      image: '/assets/images/merch/vinyl-ep.jpg',
      description: 'Limited edition colored vinyl - Only 500 copies',
      inStock: true,
      featured: true
    }
  ]

  useEffect(() => {
    // Simulate loading products (will be replaced with Shopify API call)
    setTimeout(() => {
      setProducts(productCatalog)
      setLoading(false)
    }, 500)
  }, [])

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const featuredProducts = products.filter(p => p.featured)

  const handleAddToCart = (product: Product) => {
    // TODO: Implement Shopify Buy SDK integration
    console.log('Adding to cart:', product)
    setCartCount(prev => prev + 1)
    
    // Temporary notification
    const notification = document.createElement('div')
    notification.className = 'cart-notification'
    notification.textContent = `${product.title} added to cart`
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 3000)
  }

  return (
    <main className="merch-page">
      <div className="merch-hero">
        <div className="container">
          <h1>Official Merchandise</h1>
          <p>Support the music with exclusive merch</p>
          
          {/* Cart indicator */}
          <div className="cart-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2L6 9H3L5 2H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 2L18 9H21L19 2H15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9H21L19 21H5L3 9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      {!category && featuredProducts.length > 0 && (
        <section className="featured-products">
          <div className="container">
            <h2>Featured Items</h2>
            <div className="featured-grid">
              {featuredProducts.map(product => (
                <div key={product.id} className="featured-card">
                  <div className="featured-image">
                    <img src={product.image} alt={product.title} />
                    {product.category === 'vinyl' && (
                      <div className="limited-badge">Limited Edition</div>
                    )}
                  </div>
                  <div className="featured-info">
                    <h3>{product.title}</h3>
                    <p className="featured-description">{product.description}</p>
                    <div className="featured-price">
                      ${product.price} {product.currency}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="category-filter">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
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
              Apparel
            </button>
            <button 
              className={selectedCategory === 'vinyl' ? 'active' : ''}
              onClick={() => setSelectedCategory('vinyl')}
            >
              Vinyl
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="container">
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    {!product.inStock && (
                      <div className="out-of-stock">Out of Stock</div>
                    )}
                  </div>
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-description">{product.description}</p>
                    
                    {product.sizes && (
                      <div className="product-sizes">
                        <label>Size:</label>
                        <select>
                          {product.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    
                    <div className="product-footer">
                      <span className="product-price">
                        ${product.price} {product.currency}
                      </span>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="add-to-cart-btn"
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Shopify Integration Notice */}
      <div className="integration-notice">
        <div className="container">
          <div className="notice-content">
            <h3>🛍️ Secure Checkout</h3>
            <p>Powered by Shopify • Print-on-Demand with Printify</p>
            <p>Free shipping on orders over $75 CAD</p>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="merch-newsletter">
        <div className="container">
          <h2>Get 10% Off Your First Order</h2>
          <p>Subscribe to our newsletter for exclusive deals and new product launches</p>
          <Link to="/newsletter" className="btn btn-secondary">
            Subscribe & Save
          </Link>
        </div>
      </div>
    </main>
  )
}

export default MerchPage