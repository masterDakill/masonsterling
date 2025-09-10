import { useState, useEffect } from 'react';
import shopifyService, { ShopifyProduct, CartItem } from '../services/shopify';

export const useShopify = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState('0.00');
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialiser le panier
    updateCartState();

    // Écouter les mises à jour du panier
    const handleCartUpdate = (event: CustomEvent) => {
      updateCartState();
    };

    window.addEventListener('cart-updated', handleCartUpdate as EventListener);
    
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate as EventListener);
    };
  }, []);

  const updateCartState = () => {
    setCart(shopifyService.getCart());
    setCartCount(shopifyService.getCartCount());
    setCartTotal(shopifyService.getCartTotal());
    setCheckoutUrl(shopifyService.getCheckoutUrl());
  };

  const addToCart = async (variantId: string, quantity: number = 1) => {
    setLoading(true);
    setError(null);
    try {
      await shopifyService.addToCart(variantId, quantity);
      return true;
    } catch (err) {
      setError('Erreur lors de l\'ajout au panier');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (lineItemId: string, quantity: number) => {
    setLoading(true);
    setError(null);
    try {
      await shopifyService.updateQuantity(lineItemId, quantity);
      return true;
    } catch (err) {
      setError('Erreur lors de la mise à jour');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (lineItemId: string) => {
    setLoading(true);
    setError(null);
    try {
      await shopifyService.removeFromCart(lineItemId);
      return true;
    } catch (err) {
      setError('Erreur lors de la suppression');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    setError(null);
    try {
      await shopifyService.clearCart();
      return true;
    } catch (err) {
      setError('Erreur lors du vidage du panier');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const applyDiscount = async (code: string) => {
    setLoading(true);
    setError(null);
    try {
      await shopifyService.applyDiscount(code);
      updateCartState();
      return true;
    } catch (err) {
      setError('Code promo invalide');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    cart,
    cartCount,
    cartTotal,
    checkoutUrl,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    applyDiscount
  };
};

export const useProducts = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await shopifyService.fetchAllProducts();
      setProducts(data);
      return data;
    } catch (err) {
      setError('Erreur lors du chargement des produits');
      console.error(err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCollection = async (collectionId: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await shopifyService.fetchProductsByCollection(collectionId);
      setProducts(data);
      return data;
    } catch (err) {
      setError('Erreur lors du chargement de la collection');
      console.error(err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await shopifyService.searchProducts(query);
      setProducts(data);
      return data;
    } catch (err) {
      setError('Erreur lors de la recherche');
      console.error(err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductsByCollection,
    searchProducts
  };
};