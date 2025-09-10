import { useState } from 'react';
import { useShopify } from '../hooks/useShopify';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const {
    cart,
    cartCount,
    cartTotal,
    checkoutUrl,
    loading,
    updateQuantity,
    removeFromCart,
    clearCart,
    applyDiscount
  } = useShopify();

  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      await removeFromCart(itemId);
    } else {
      await updateQuantity(itemId, newQuantity);
    }
  };

  const handleApplyDiscount = async () => {
    if (discountCode.trim()) {
      const success = await applyDiscount(discountCode);
      if (success) {
        setDiscountApplied(true);
        setTimeout(() => setDiscountApplied(false), 3000);
      }
    }
  };

  const handleCheckout = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Votre Panier ({cartCount})</h2>
          <button className="cart-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" opacity="0.3">
              <path d="M9 2L6 9H3L5 2H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 2L18 9H21L19 2H15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9H21L19 21H5L3 9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Votre panier est vide</p>
            <button className="btn btn-primary" onClick={onClose}>
              Continuer vos achats
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    {item.variantTitle !== 'Default Title' && (
                      <p className="cart-item-variant">{item.variantTitle}</p>
                    )}
                    <p className="cart-item-price">${item.price} CAD</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-selector">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={loading}
                        aria-label="Diminuer la quantité"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={loading}
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      disabled={loading}
                      aria-label="Retirer du panier"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="discount-section">
                <input
                  type="text"
                  placeholder="Code promo"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleApplyDiscount()}
                />
                <button 
                  className="btn btn-secondary"
                  onClick={handleApplyDiscount}
                  disabled={loading}
                >
                  Appliquer
                </button>
              </div>
              
              {discountApplied && (
                <p className="discount-success">Code promo appliqué !</p>
              )}

              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">${cartTotal} CAD</span>
                </div>
                <p className="cart-note">Livraison et taxes calculées à la caisse</p>
              </div>

              <button 
                className="btn btn-primary btn-checkout"
                onClick={handleCheckout}
                disabled={loading || !checkoutUrl}
              >
                Passer à la caisse
              </button>

              <button 
                className="btn btn-link"
                onClick={clearCart}
                disabled={loading}
              >
                Vider le panier
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;