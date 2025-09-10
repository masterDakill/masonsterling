import { useState } from 'react'
import { Link } from 'react-router-dom'

const SingleMoreThanMyName = () => {
  const [emailSubscribed, setEmailSubscribed] = useState(false)
  const releaseDate = new Date('2024-12-20')
  const now = new Date()
  const daysUntilRelease = Math.ceil((releaseDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email notification signup
    setEmailSubscribed(true)
  }

  return (
    <main className="single-page unreleased">
      <div className="single-hero">
        <div className="container">
          <div className="single-content">
            <div className="single-artwork">
              <img 
                src="/assets/images/more-than-my-name-cover.jpg" 
                alt="More than my Name - Single Cover" 
              />
              <div className="single-badge coming-soon">COMING SOON</div>
            </div>
            
            <div className="single-info">
              <h1>More than my Name</h1>
              <p className="single-artist">Mason Sterling</p>
              <p className="single-details">Releasing December 20, 2024</p>
              <p className="single-genre">Pop Rock • Alternative • 3:54</p>
              
              <div className="countdown-section">
                <div className="countdown">
                  <span className="countdown-number">{daysUntilRelease}</span>
                  <span className="countdown-label">days until release</span>
                </div>
              </div>
              
              <div className="single-description">
                <p>
                  "More than my Name" is an empowering anthem about identity, self-discovery, 
                  and breaking free from expectations. This powerful track showcases Sterling's 
                  evolution as an artist with soaring vocals and dynamic production.
                </p>
              </div>

              <div className="pre-release-section">
                <h3>Pre-Save Now</h3>
                <p>Be the first to hear it when it drops</p>
                <div className="presave-buttons">
                  <button className="presave-btn spotify disabled">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span>Pre-save on Spotify</span>
                    <span className="coming-label">Available Dec 20</span>
                  </button>
                  
                  <button className="presave-btn apple disabled">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043-1.054-.69-2.39-1.048-3.815-1.048A11.263 11.263 0 0012 1.843a11.253 11.253 0 00-5.759-2c-1.425 0-2.761.358-3.815 1.048-1.118.733-1.863 1.733-2.18 3.043a9.283 9.283 0 00-.24 2.19c-.016.184-.016 6.268-.016 6.268s0 6.084.016 6.268a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043 1.054.69 2.39 1.048 3.815 1.048 2.006.116 3.932-.426 5.76-2 1.827 1.574 3.753 2.116 5.759 2 1.425 0 2.761-.358 3.815-1.048 1.118-.733 1.863-1.733 2.18-3.043a9.283 9.283 0 00.24-2.19c.016-.184.016-6.268.016-6.268s0-6.084-.016-6.268zM12 19.843c-3.866 0-7-3.133-7-7s3.134-7 7-7 7 3.133 7 7-3.134 7-7 7zm0-11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                    </svg>
                    <span>Pre-add on Apple Music</span>
                    <span className="coming-label">Available Dec 20</span>
                  </button>
                </div>
              </div>

              <div className="notify-section">
                {!emailSubscribed ? (
                  <form onSubmit={handleNotifyMe} className="notify-form">
                    <h3>Get Notified on Release Day</h3>
                    <div className="form-group">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="email-input"
                      />
                      <button type="submit" className="btn btn-primary">
                        Notify Me
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="notify-success">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <p>You'll be notified when "More than my Name" is released!</p>
                  </div>
                )}
              </div>

              <div className="preview-section">
                <h3>Preview</h3>
                <p>Listen to a 30-second preview on SoundCloud</p>
                <a 
                  href="https://soundcloud.com/mason-sterling/more-than-my-name-preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="preview-btn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Play Preview on SoundCloud</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teaser-section">
        <div className="container">
          <h2>Behind the Song</h2>
          <div className="teaser-content">
            <div className="teaser-video">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/..." 
                title="More than my Name - Behind the Scenes"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="teaser-text">
              <h3>The Story</h3>
              <p>
                "More than my Name" was written during a period of intense self-reflection. 
                It's about recognizing that we are more than the labels others give us, 
                more than our past, and more than our mistakes. This song is for anyone 
                who's ever felt boxed in by expectations.
              </p>
              <blockquote>
                "We all have moments where we need to remind ourselves that we define who we are, 
                not the world around us. This song is that reminder."
                <cite>- Mason Sterling</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="related-content">
        <div className="container">
          <h2>Available Now</h2>
          <div className="related-grid">
            <Link to="/single/drawn-to-the-unknown" className="related-card">
              <img src="/assets/images/drawn-to-unknown-cover.jpg" alt="Drawn to the Unknown" />
              <h3>Drawn to the Unknown</h3>
              <p>Single • Available Now</p>
            </Link>
            
            <Link to="/music/ep-loves-journey" className="related-card">
              <img src="/assets/images/book-cover.jpg" alt="Love's Journey EP" />
              <h3>Love's Journey EP</h3>
              <p>5 Tracks • Streaming Now</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="single-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Don't Miss the Release</h2>
            <p>Join the newsletter for exclusive content and early access</p>
            <Link to="/newsletter" className="btn btn-primary">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleMoreThanMyName