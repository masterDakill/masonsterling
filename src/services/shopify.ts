import Client from '@shopify/buy-button-js';

// Configuration Shopify
// NOTE: Remplacez ces valeurs par vos vraies credentials Shopify
const SHOPIFY_CONFIG = {
  domain: process.env.VITE_SHOPIFY_DOMAIN || 'your-shop.myshopify.com',
  storefrontAccessToken: process.env.VITE_SHOPIFY_STOREFRONT_TOKEN || 'your-storefront-access-token'
};

// Types pour les produits
export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  images: Array<{
    src: string;
    altText?: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    price: string;
    available: boolean;
  }>;
  productType: string;
  vendor: string;
  tags: string[];
}

export interface CartItem {
  id: string;
  title: string;
  variantId: string;
  variantTitle: string;
  price: string;
  quantity: number;
  image: string;
}

class ShopifyService {
  private client: any;
  private checkout: any;
  private cart: CartItem[] = [];

  constructor() {
    this.initClient();
  }

  private async initClient() {
    try {
      this.client = Client.buildClient(SHOPIFY_CONFIG);
      // Créer ou récupérer le checkout existant
      const checkoutId = localStorage.getItem('shopify_checkout_id');
      if (checkoutId) {
        this.checkout = await this.client.checkout.fetch(checkoutId);
        // Si le checkout est complété, en créer un nouveau
        if (this.checkout.completedAt) {
          this.checkout = await this.createNewCheckout();
        }
      } else {
        this.checkout = await this.createNewCheckout();
      }
    } catch (error) {
      console.error('Erreur initialisation Shopify:', error);
    }
  }

  private async createNewCheckout() {
    const checkout = await this.client.checkout.create();
    localStorage.setItem('shopify_checkout_id', checkout.id);
    return checkout;
  }

  // Récupérer tous les produits
  async fetchAllProducts(): Promise<ShopifyProduct[]> {
    try {
      const products = await this.client.product.fetchAll(100);
      return products.map(this.formatProduct);
    } catch (error) {
      console.error('Erreur récupération produits:', error);
      return [];
    }
  }

  // Récupérer les produits par collection/catégorie
  async fetchProductsByCollection(collectionId: string): Promise<ShopifyProduct[]> {
    try {
      const collection = await this.client.collection.fetchWithProducts(collectionId);
      return collection.products.map(this.formatProduct);
    } catch (error) {
      console.error('Erreur récupération collection:', error);
      return [];
    }
  }

  // Récupérer un produit par ID
  async fetchProduct(productId: string): Promise<ShopifyProduct | null> {
    try {
      const product = await this.client.product.fetch(productId);
      return this.formatProduct(product);
    } catch (error) {
      console.error('Erreur récupération produit:', error);
      return null;
    }
  }

  // Rechercher des produits
  async searchProducts(query: string): Promise<ShopifyProduct[]> {
    try {
      const products = await this.client.product.fetchQuery({
        query: `title:*${query}* OR product_type:*${query}*`,
        sortBy: 'RELEVANCE'
      });
      return products.map(this.formatProduct);
    } catch (error) {
      console.error('Erreur recherche produits:', error);
      return [];
    }
  }

  // Formater un produit Shopify
  private formatProduct(product: any): ShopifyProduct {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      images: product.images.map((img: any) => ({
        src: img.src,
        altText: img.altText
      })),
      variants: product.variants.map((variant: any) => ({
        id: variant.id,
        title: variant.title,
        price: variant.price,
        available: variant.available
      })),
      productType: product.productType,
      vendor: product.vendor,
      tags: product.tags
    };
  }

  // Ajouter au panier
  async addToCart(variantId: string, quantity: number = 1) {
    try {
      const lineItemsToAdd = [{
        variantId,
        quantity
      }];
      
      this.checkout = await this.client.checkout.addLineItems(
        this.checkout.id,
        lineItemsToAdd
      );
      
      this.updateLocalCart();
      this.notifyCartUpdate();
      
      return this.checkout;
    } catch (error) {
      console.error('Erreur ajout au panier:', error);
      throw error;
    }
  }

  // Mettre à jour la quantité
  async updateQuantity(lineItemId: string, quantity: number) {
    try {
      const lineItemsToUpdate = [{
        id: lineItemId,
        quantity
      }];
      
      this.checkout = await this.client.checkout.updateLineItems(
        this.checkout.id,
        lineItemsToUpdate
      );
      
      this.updateLocalCart();
      this.notifyCartUpdate();
      
      return this.checkout;
    } catch (error) {
      console.error('Erreur mise à jour quantité:', error);
      throw error;
    }
  }

  // Retirer du panier
  async removeFromCart(lineItemId: string) {
    try {
      this.checkout = await this.client.checkout.removeLineItems(
        this.checkout.id,
        [lineItemId]
      );
      
      this.updateLocalCart();
      this.notifyCartUpdate();
      
      return this.checkout;
    } catch (error) {
      console.error('Erreur suppression du panier:', error);
      throw error;
    }
  }

  // Mettre à jour le panier local
  private updateLocalCart() {
    if (!this.checkout) return;
    
    this.cart = this.checkout.lineItems.map((item: any) => ({
      id: item.id,
      title: item.title,
      variantId: item.variant.id,
      variantTitle: item.variant.title,
      price: item.variant.price,
      quantity: item.quantity,
      image: item.variant.image?.src || ''
    }));
  }

  // Notifier les changements du panier
  private notifyCartUpdate() {
    window.dispatchEvent(new CustomEvent('cart-updated', {
      detail: {
        cart: this.cart,
        checkout: this.checkout
      }
    }));
  }

  // Obtenir le panier actuel
  getCart(): CartItem[] {
    return this.cart;
  }

  // Obtenir le nombre d'articles
  getCartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Obtenir le total
  getCartTotal(): string {
    if (!this.checkout) return '0.00';
    return this.checkout.totalPrice;
  }

  // Obtenir l'URL de checkout
  getCheckoutUrl(): string {
    if (!this.checkout) return '';
    return this.checkout.webUrl;
  }

  // Vider le panier
  async clearCart() {
    try {
      this.checkout = await this.createNewCheckout();
      this.cart = [];
      this.notifyCartUpdate();
      return this.checkout;
    } catch (error) {
      console.error('Erreur vidage panier:', error);
      throw error;
    }
  }

  // Appliquer un code promo
  async applyDiscount(discountCode: string) {
    try {
      this.checkout = await this.client.checkout.addDiscount(
        this.checkout.id,
        discountCode
      );
      return this.checkout;
    } catch (error) {
      console.error('Erreur application code promo:', error);
      throw error;
    }
  }

  // Retirer un code promo
  async removeDiscount() {
    try {
      this.checkout = await this.client.checkout.removeDiscount(this.checkout.id);
      return this.checkout;
    } catch (error) {
      console.error('Erreur suppression code promo:', error);
      throw error;
    }
  }
}

// Export d'une instance unique (singleton)
const shopifyService = new ShopifyService();
export default shopifyService;