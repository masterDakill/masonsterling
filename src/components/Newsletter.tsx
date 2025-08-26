import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler l'abonnement
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="newsletter success">
        <div className="container">
          <div className="newsletter-content">
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Merci de votre abonnement !</h3>
              <p>Vous recevrez les dernières nouvelles et sorties de Mason Sterling directement dans votre boîte mail.</p>
              <button 
                className="reset-btn"
                onClick={() => setIsSubscribed(false)}
              >
                S'abonner avec un autre email
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">RESTEZ CONNECTÉ</h2>
            <p className="newsletter-description">
              Abonnez-vous gratuitement pour recevoir les dernières nouvelles, 
              sorties exclusives et accès privilégié aux concerts de Mason Sterling.
            </p>
            <div className="newsletter-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">🎵</span>
                <span>Nouvelles sorties en avant-première</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎫</span>
                <span>Accès privilégié aux concerts</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📰</span>
                <span>Actualités exclusives</span>
              </div>
            </div>
          </div>
          
          <div className="newsletter-form-container">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <h3>Abonnement Gratuit</h3>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="email-input"
                  disabled={isLoading}
                />
              </div>
              <button 
                type="submit" 
                className="subscribe-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    INSCRIPTION...
                  </>
                ) : (
                  'S\'ABONNER GRATUITEMENT'
                )}
              </button>
              <p className="privacy-text">
                🔒 Vos données sont protégées. Désabonnement possible à tout moment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;