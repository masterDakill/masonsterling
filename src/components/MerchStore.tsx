import { useState } from 'react';
import './MerchStore.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

const MerchStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  const products: Product[] = [
    {
      id: 1,
      name: "Mason Sterling Album Art Puzzle",
      category: "puzzles",
      price: 29.99,
      description: "1000-piece premium puzzle featuring the stunning Love's Journey EP artwork",
      image: "/assets/images/book-cover.jpg",
      features: [
        "1000 precision-cut pieces",
        "Premium matte finish",
        "Includes poster guide",
        "Collector's edition box"
      ],
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      name: "Neon Love Scene Puzzle",
      category: "puzzles",
      price: 34.99,
      description: "1500-piece puzzle showcasing the iconic Neon Love cityscape",
      image: "/assets/images/headshot/headshot1.jpg",
      features: [
        "1500 interlocking pieces",
        "UV-resistant coating",
        "Premium quality cardboard",
        "Limited edition design"
      ],
      inStock: true,
      isNew: true
    },
    {
      id: 3,
      name: "Multiverse Collection Puzzle Set",
      category: "puzzles",
      price: 89.99,
      description: "3-puzzle collector's set featuring exclusive Mason Sterling artwork",
      image: "/assets/images/headshot/headshot2.jpg",
      features: [
        "Three 500-piece puzzles",
        "Exclusive artwork designs",
        "Display-ready frames included",
        "Signed certificate of authenticity"
      ],
      inStock: true,
      isFeatured: true
    },
    {
      id: 4,
      name: "Limited Edition Tour Poster",
      category: "posters",
      price: 24.99,
      description: "High-quality poster from the Love's Journey virtual tour",
      image: "/assets/images/headshot/headshot3.jpg",
      features: [
        "24\" x 36\" size",
        "Museum-quality print",
        "Acid-free paper",
        "Ships in protective tube"
      ],
      inStock: true
    },
    {
      id: 5,
      name: "Mason Sterling Signature T-Shirt",
      category: "apparel",
      price: 35.99,
      description: "Premium cotton t-shirt with exclusive Mason Sterling design",
      image: "/assets/images/headshot/headshot4.jpg",
      features: [
        "100% organic cotton",
        "Screen-printed design",
        "Available in all sizes",
        "Machine washable"
      ],
      inStock: true
    },
    {
      id: 6,
      name: "Love's Journey Vinyl Record",
      category: "music",
      price: 49.99,
      description: "Limited edition vinyl pressing of the Love's Journey EP",
      image: "/assets/images/book-cover.jpg",
      features: [
        "180g audiophile vinyl",
        "Gatefold sleeve",
        "Includes digital download",
        "Limited to 500 copies"
      ],
      inStock: false,
      isFeatured: true
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'puzzles', name: 'Puzzles', icon: '🧩' },
    { id: 'posters', name: 'Posters', icon: '🖼️' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'music', name: 'Music', icon: '💿' }
  ];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  return (
    <section id="merch" className="merch-store">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">Official</span> Merchandise
          </h2>
          <p className="section-subtitle">
            Exclusive collectibles and premium products for true fans
          </p>
        </div>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.isNew && <span className="badge badge-new">NEW</span>}
              {product.isFeatured && <span className="badge badge-featured">FEATURED</span>}
              
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`product-image ${hoveredProduct === product.id ? 'hovered' : ''}`}
                />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-features">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="product-footer">
                  <div className="product-price">
                    <span className="currency">$</span>
                    <span className="amount">{product.price.toFixed(2)}</span>
                  </div>
                  
                  <button 
                    className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <span className="cart-icon">🛒</span>
                        <span className="cart-text">Add to Cart</span>
                      </>
                    ) : (
                      <span className="cart-text">Out of Stock</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="merch-cta">
          <div className="cta-content">
            <h3 className="cta-title">Want Something Custom?</h3>
            <p className="cta-description">
              Contact us for custom merchandise, bulk orders, or special requests
            </p>
            <button className="btn btn-primary btn-3d">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchStore;