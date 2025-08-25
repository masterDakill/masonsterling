import './Discography.css';

interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  gradient: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
}

const albums: Album[] = [
  {
    id: 'loves-journey',
    title: "LOVE'S JOURNEY",
    artist: "MASON STERLING",
    cover: "💖", // Heart emoji as placeholder
    gradient: "linear-gradient(135deg, #FF6B9D, #C44569, #8B2635)",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#"
  },
  {
    id: 'endless-journey',
    title: "ENDLESS JOURNEY",
    artist: "MASON STERLING",
    cover: "🎸", // Guitar emoji as placeholder
    gradient: "linear-gradient(135deg, #FF9A9E, #FECFEF, #FECFEF)",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#"
  },
  {
    id: 'roads-we-travel',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING",
    cover: "🤠", // Cowboy emoji as placeholder
    gradient: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#"
  },
  {
    id: 'untitled-album',
    title: "UNTITLED",
    artist: "MASON STERLING",
    cover: "✨", // Stars emoji as placeholder
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe, #667eea)",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#"
  }
];

const StreamingIcon = ({ platform, url }: { platform: string; url: string }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'spotify':
        return (
          <svg viewBox="0 0 24 24" className="streaming-icon">
            <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        );
      case 'apple':
        return (
          <svg viewBox="0 0 24 24" className="streaming-icon">
            <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg viewBox="0 0 24 24" className="streaming-icon">
            <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a href={url} className="streaming-link" target="_blank" rel="noopener noreferrer">
      {getIcon(platform)}
    </a>
  );
};

const AlbumCard = ({ album }: { album: Album }) => {
  return (
    <div className="album-card">
      <div className="album-cover" style={{ background: album.gradient }}>
        <div className="album-cover-content">
          <span className="album-cover-icon">{album.cover}</span>
        </div>
        <div className="album-play-overlay">
          <button className="play-btn">▶</button>
        </div>
      </div>
      
      <div className="album-info">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">{album.artist}</p>
      </div>
      
      <div className="album-actions">
        <button className="listen-btn">LISTEN NOW</button>
        <div className="streaming-links">
          <StreamingIcon platform="spotify" url={album.spotifyUrl} />
          <StreamingIcon platform="apple" url={album.appleMusicUrl} />
          <StreamingIcon platform="youtube" url={album.youtubeUrl} />
        </div>
        <button className="stream-btn">STREAM</button>
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