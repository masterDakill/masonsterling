import './Discography.css';

interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  gradient: string;
  soundcloudUrl: string;
  isAvailable: boolean;
}

const albums: Album[] = [
  {
    id: 'loves-journey',
    title: "LOVE'S JOURNEY",
    artist: "MASON STERLING",
    cover: "💖",
    gradient: "linear-gradient(135deg, #FF6B9D, #C44569, #8B2635)",
    soundcloudUrl: "https://soundcloud.com/masonsterling/loves-journey",
    isAvailable: true
  },
  {
    id: 'endless-journey',
    title: "ENDLESS JOURNEY", 
    artist: "MASON STERLING",
    cover: "🎸",
    gradient: "linear-gradient(135deg, #FF9A9E, #FECFEF, #FECFEF)",
    soundcloudUrl: "https://soundcloud.com/masonsterling/endless-journey",
    isAvailable: true
  },
  {
    id: 'roads-we-travel',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING", 
    cover: "🤠",
    gradient: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel",
    isAvailable: true
  },
  {
    id: 'untitled-album',
    title: "UPCOMING RELEASE",
    artist: "MASON STERLING",
    cover: "✨",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe, #667eea)",
    soundcloudUrl: "",
    isAvailable: false
  }
];

const AlbumCard = ({ album }: { album: Album }) => {
  return (
    <div className={`album-card ${!album.isAvailable ? 'unavailable' : ''}`}>
      <div className="album-cover" style={{ background: album.gradient }}>
        <div className="album-cover-content">
          <span className="album-cover-icon">{album.cover}</span>
        </div>
        {album.isAvailable && (
          <div className="album-play-overlay">
            <button className="play-btn">▶</button>
          </div>
        )}
      </div>
      
      <div className="album-info">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">{album.artist}</p>
      </div>
      
      <div className="album-actions">
        {album.isAvailable ? (
          <>
            <button 
              className="listen-btn"
              onClick={() => window.open(album.soundcloudUrl, '_blank')}
            >
              LISTEN NOW
            </button>
            <div className="soundcloud-embed">
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(album.soundcloudUrl)}&color=%23ff6b35&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
              />
            </div>
          </>
        ) : (
          <div className="coming-soon">
            <span className="coming-soon-text">BIENTÔT DISPONIBLE</span>
            <p className="coming-soon-desc">Restez connecté pour les nouvelles sorties</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Discography = () => {
  return (
    <section id="music" className="discography">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">DISCOGRAPHY</h2>
        </div>
        
        <div className="albums-grid">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;