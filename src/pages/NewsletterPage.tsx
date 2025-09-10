import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormData {
  email: string
  firstName: string
  lastName: string
  interests: string[]
  acceptMarketing: boolean
}

const NewsletterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    interests: [],
    acceptMarketing: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState('')

  const interests = [
    { id: 'new-music', label: 'New Music Releases' },
    { id: 'tour-dates', label: 'Tour Dates & Tickets' },
    { id: 'exclusive-content', label: 'Exclusive Content' },
    { id: 'merch-deals', label: 'Merchandise & Deals' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
    { id: 'fan-community', label: 'Fan Community Updates' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox' && name === 'interests') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }))
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validate form
    if (!formData.email) {
      setError('Email is required')
      setIsSubmitting(false)
      return
    }

    if (!formData.acceptMarketing) {
      setError('Please accept the terms to subscribe')
      setIsSubmitting(false)
      return
    }

    try {
      // TODO: Implement actual newsletter API integration
      // This would typically:
      // 1. Send data to your backend
      // 2. Backend sends confirmation email
      // 3. User clicks confirmation link (double opt-in)
      // 4. User is added to mailing list
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For now, just show success
      setIsSubscribed(true)
      
      // Track with analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: 'newsletter_page'
        })
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <main className="newsletter-page">
        <div className="newsletter-success">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h1>Almost There!</h1>
              <p className="success-message">
                We've sent a confirmation email to <strong>{formData.email}</strong>
              </p>
              <p className="success-instructions">
                Please check your inbox and click the confirmation link to complete your subscription.
                This helps us ensure you really want to receive our updates (double opt-in).
              </p>
              <div className="success-note">
                <p>Didn't receive the email?</p>
                <ul>
                  <li>Check your spam or promotions folder</li>
                  <li>Make sure you entered the correct email</li>
                  <li>Wait a few minutes and check again</li>
                </ul>
              </div>
              <Link to="/" className="btn btn-primary">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="newsletter-page">
      <div className="newsletter-hero">
        <div className="container">
          <h1>Join the Journey</h1>
          <p className="hero-subtitle">
            Be the first to know about new music, exclusive content, and special offers
          </p>
        </div>
      </div>

      <div className="newsletter-content">
        <div className="container">
          <div className="newsletter-grid">
            <div className="newsletter-benefits">
              <h2>Member Benefits</h2>
              <ul className="benefits-list">
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Early access to new singles and albums</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Exclusive behind-the-scenes content</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Pre-sale ticket access for tours</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>10% discount on all merchandise</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Monthly newsletter with personal updates</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Access to fan community events</span>
                </li>
              </ul>

              <div className="testimonial">
                <blockquote>
                  "Being part of Mason's newsletter community has been amazing! 
                  I got to hear 'Drawn to the Unknown' a week before release and 
                  scored front-row tickets to the Toronto show!"
                </blockquote>
                <cite>- Sarah M., Newsletter Member</cite>
              </div>
            </div>

            <div className="newsletter-form-section">
              <form onSubmit={handleSubmit} className="newsletter-form">
                <h2>Subscribe Now</h2>
                
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>I'm interested in:</label>
                  <div className="checkbox-group">
                    {interests.map(interest => (
                      <label key={interest.id} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest.id}
                          checked={formData.interests.includes(interest.id)}
                          onChange={handleInputChange}
                        />
                        <span>{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkbox-label terms">
                    <input
                      type="checkbox"
                      name="acceptMarketing"
                      checked={formData.acceptMarketing}
                      onChange={handleInputChange}
                      required
                    />
                    <span>
                      I agree to receive marketing emails from Mason Sterling and understand 
                      I can unsubscribe at any time. View our <Link to="/privacy">Privacy Policy</Link>.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>

                <p className="form-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof */}
      <div className="newsletter-social-proof">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <span className="stat-number">15,000+</span>
              <span className="stat-label">Subscribers</span>
            </div>
            <div className="stat">
              <span className="stat-number">Weekly</span>
              <span className="stat-label">Updates</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Spam Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="newsletter-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How often will I receive emails?</h3>
              <p>We send updates 1-2 times per week, with special announcements as needed.</p>
            </div>
            <div className="faq-item">
              <h3>Can I unsubscribe?</h3>
              <p>Yes, every email includes an unsubscribe link. You can opt out anytime.</p>
            </div>
            <div className="faq-item">
              <h3>What is double opt-in?</h3>
              <p>After signing up, you'll receive a confirmation email. Click the link to confirm your subscription.</p>
            </div>
            <div className="faq-item">
              <h3>Will you share my email?</h3>
              <p>Never. Your information is kept strictly confidential and is never sold or shared.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewsletterPage