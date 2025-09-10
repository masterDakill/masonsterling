import { useState } from 'react'
import { Link } from 'react-router-dom'

const SingleDrawnToTheUnknown = () => {
  const [showLyrics, setShowLyrics] = useState(false)

  const lyrics = `[Verse 1]
Standing at the edge of what I know
The familiar fades, uncertainty grows
Every step forward feels like falling
Into something beautiful, something calling

[Chorus]
I'm drawn to the unknown
Like a moth to the flame
Can't fight this pull, it's grown
Nothing will be the same
The mystery calls my name
I'm drawn to the unknown

[Verse 2]
Maps can't guide me where I'm going
No compass points to what I'm knowing
Trust becomes my only anchor
In this dance with beautiful danger

[Bridge]
Sometimes the greatest treasures
Hide beyond our deepest fears
What seems like reckless measures
Might be wisdom through the years

[Chorus]
I'm drawn to the unknown
Like a moth to the flame
Can't fight this pull, it's grown
Nothing will be the same
The mystery calls my name
I'm drawn to the unknown

[Outro]
Into the unknown I go
Into the unknown I grow`

  return (
    <main className="single-page">
      <div className="single-hero">
        <div className="container">
          <div className="single-content">
            <div className="single-artwork">
              <img 
                src="/assets/images/drawn-to-unknown-cover.jpg" 
                alt="Drawn to the Unknown - Single Cover" 
              />
              <div className="single-badge">SINGLE</div>
            </div>
            
            <div className="single-info">
              <h1>Drawn to the Unknown</h1>
              <p className="single-artist">Mason Sterling</p>
              <p className="single-details">Released November 15, 2024</p>
              <p className="single-genre">Alternative • Indie Rock • 4:27</p>
              
              <div className="single-description">
                <p>
                  "Drawn to the Unknown" explores the magnetic pull of uncertainty and the courage 
                  required to step beyond comfort zones. This anthemic track combines atmospheric 
                  production with Sterling's signature introspective lyricism.
                </p>
              </div>

              <div className="streaming-section">
                <h3>Stream Now</h3>
                <div className="streaming-links">
                  <a 
                    href="https://open.spotify.com/track/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="stream-button spotify"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span>Spotify</span>
                  </a>
                  
                  <a 
                    href="https://music.apple.com/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="stream-button apple"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043-1.054-.69-2.39-1.048-3.815-1.048A11.263 11.263 0 0012 1.843a11.253 11.253 0 00-5.759-2c-1.425 0-2.761.358-3.815 1.048-1.118.733-1.863 1.733-2.18 3.043a9.283 9.283 0 00-.24 2.19c-.016.184-.016 6.268-.016 6.268s0 6.084.016 6.268a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043 1.054.69 2.39 1.048 3.815 1.048 2.006.116 3.932-.426 5.76-2 1.827 1.574 3.753 2.116 5.759 2 1.425 0 2.761-.358 3.815-1.048 1.118-.733 1.863-1.733 2.18-3.043a9.283 9.283 0 00.24-2.19c.016-.184.016-6.268.016-6.268s0-6.084-.016-6.268zM12 19.843c-3.866 0-7-3.133-7-7s3.134-7 7-7 7 3.133 7 7-3.134 7-7 7zm0-11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                    </svg>
                    <span>Apple Music</span>
                  </a>
                  
                  <a 
                    href="https://soundcloud.com/mason-sterling/drawn-to-the-unknown" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="stream-button soundcloud"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.007-.057-.05-.1-.101-.1zm-.899.828c-.051 0-.094.043-.099.098l-.2 1.329.2 1.32c.006.057.049.097.099.097.051 0 .094-.04.1-.097l.236-1.32-.236-1.329c-.006-.055-.049-.098-.1-.098zm1.783-.948c-.051 0-.095.044-.099.099l-.281 2.276.281 2.277c.005.055.048.099.099.099.052 0 .094-.044.1-.099l.318-2.277-.318-2.276c-.006-.055-.048-.099-.1-.099zm.894-.078c-.051 0-.094.042-.101.1l-.246 2.354.246 2.35c.007.058.05.1.101.1.05 0 .094-.042.099-.1l.283-2.35-.283-2.354c-.005-.058-.049-.1-.099-.1zm.895.058c-.053 0-.096.043-.101.099l-.211 2.296.211 2.291c.005.056.048.099.101.099.052 0 .094-.043.099-.099l.246-2.291-.246-2.296c-.005-.056-.047-.099-.099-.099zm.899.019c-.051 0-.096.045-.101.1l-.176 2.277.176 2.271c.005.055.05.1.101.1.053 0 .095-.045.099-.1l.211-2.271-.211-2.277c-.004-.055-.046-.1-.099-.1zm.9.078c-.052 0-.096.044-.102.099l-.141 2.199.141 2.195c.006.055.05.099.102.099.052 0 .095-.044.099-.099l.176-2.195-.176-2.199c-.004-.055-.047-.099-.099-.099zm.899.058c-.053 0-.097.045-.101.1l-.106 2.141.106 2.134c.004.055.048.1.101.1.052 0 .095-.045.099-.1l.141-2.134-.141-2.141c-.004-.055-.047-.1-.099-.1zm.9.078c-.054 0-.098.044-.102.099l-.071 2.063.071 2.058c.004.055.048.099.102.099.053 0 .096-.044.099-.099l.106-2.058-.106-2.063c-.003-.055-.046-.099-.099-.099zm.898.039c-.053 0-.098.045-.101.1l-.036 2.024.036 2.019c.003.055.048.1.101.1.054 0 .097-.045.1-.1l.071-2.019-.071-2.024c-.003-.055-.046-.1-.1-.1zm11.214.561h-.002c-2.477 0-4.486 2.009-4.486 4.487 0 .245.02.485.057.717-.104-.023-.213-.036-.324-.036-1.418 0-2.567 1.149-2.567 2.567s1.149 2.567 2.567 2.567h6.817c1.358 0 2.46-1.102 2.46-2.461 0-1.358-1.102-2.46-2.46-2.46-.226 0-.444.031-.651.088.023-.172.035-.347.035-.524 0-2.003-1.623-3.626-3.626-3.626-.61 0-1.184.151-1.687.419-.2.106-.253.195-.253.389v7.154c0 .202.085.349.235.41.087.035.177.053.265.053z"/>
                    </svg>
                    <span>SoundCloud</span>
                  </a>
                  
                  <a 
                    href="https://youtube.com/watch?v=..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="stream-button youtube"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              <div className="lyrics-section">
                <button 
                  className="lyrics-toggle-btn"
                  onClick={() => setShowLyrics(!showLyrics)}
                >
                  {showLyrics ? 'Hide' : 'Show'} Lyrics
                </button>
                
                {showLyrics && (
                  <div className="lyrics-content">
                    <pre>{lyrics}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-video">
        <div className="container">
          <h2>Music Video</h2>
          <div className="video-wrapper">
            <iframe 
              width="100%" 
              height="600" 
              src="https://www.youtube.com/embed/..." 
              title="Drawn to the Unknown - Official Music Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="related-content">
        <div className="container">
          <h2>More Music</h2>
          <div className="related-grid">
            <Link to="/music/ep-loves-journey" className="related-card">
              <img src="/assets/images/book-cover.jpg" alt="Love's Journey EP" />
              <h3>Love's Journey EP</h3>
              <p>5 Tracks • 2024</p>
            </Link>
            
            <Link to="/single/more-than-my-name" className="related-card">
              <img src="/assets/images/more-than-my-name-cover.jpg" alt="More than my Name" />
              <h3>More than my Name</h3>
              <p>Coming December 2024</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="single-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Get Exclusive Content</h2>
            <p>Join the newsletter for early access to new music and special offers</p>
            <Link to="/newsletter" className="btn btn-primary">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleDrawnToTheUnknown