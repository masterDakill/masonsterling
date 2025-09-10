import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import MusicPlayer from '../components/MusicPlayer'
import VideoGallery from '../components/VideoGallery'
import MerchStore from '../components/MerchStore'
import About from '../components/About'
import Tour from '../components/Tour'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <main>
      <Hero />
      
      {/* EP Feature Section */}
      <section className="ep-feature" id="music">
        <div className="container">
          <h2 className="section-title">Love's Journey EP</h2>
          <p className="section-subtitle">Experience the complete sonic journey</p>
          <MusicPlayer />
          <div className="ep-cta">
            <Link to="/music/ep-loves-journey" className="btn btn-primary">
              <span>Explore Full EP</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Singles */}
      <section className="singles-section">
        <div className="container">
          <h2 className="section-title">Latest Singles</h2>
          <div className="singles-grid">
            <Link to="/single/drawn-to-the-unknown" className="single-card">
              <div className="single-cover">
                <img src="/assets/images/drawn-to-unknown-cover.jpg" alt="Drawn to the Unknown" />
                <div className="play-overlay">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <h3>Drawn to the Unknown</h3>
              <p className="release-date">Released Nov 2024</p>
            </Link>
            
            <Link to="/single/more-than-my-name" className="single-card">
              <div className="single-cover">
                <img src="/assets/images/more-than-my-name-cover.jpg" alt="More than my Name" />
                <div className="play-overlay">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <h3>More than my Name</h3>
              <p className="release-date">Coming Dec 2024</p>
            </Link>
          </div>
        </div>
      </section>

      <VideoGallery />
      
      {/* Merchandise Preview */}
      <section className="merch-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Official Merchandise</h2>
            <Link to="/merch" className="view-all-link">
              View All Products →
            </Link>
          </div>
          <MerchStore featured={true} limit={4} />
        </div>
      </section>

      <About />
      <Tour />
      <Newsletter />
      <Contact />
    </main>
  )
}

export default HomePage