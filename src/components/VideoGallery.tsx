import { useState } from 'react';
import './VideoGallery.css';

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
  category: string;
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videos: Video[] = [
    {
      id: 1,
      title: "Neon Love - Official Music Video",
      description: "Experience the visual journey of Neon Love, featuring stunning cinematography and futuristic aesthetics",
      videoUrl: "/assets/videos/mason-video1.mp4",
      thumbnailUrl: "/assets/images/headshot/headshot1.jpg",
      duration: "3:42",
      views: "125K",
      category: "Music Videos"
    },
    {
      id: 2,
      title: "Behind the Scenes - Love's Journey EP",
      description: "Get an exclusive look at the making of the Love's Journey EP",
      videoUrl: "/assets/videos/mason-video2.mp4",
      thumbnailUrl: "/assets/images/headshot/headshot2.jpg",
      duration: "5:18",
      views: "87K",
      category: "Behind the Scenes"
    },
    {
      id: 3,
      title: "Mason Sterling - Artist Spotlight",
      description: "An intimate conversation about music, storytelling, and the multiverse",
      videoUrl: "/assets/videos/mason-video1.mp4",
      thumbnailUrl: "/assets/images/headshot/headshot3.jpg",
      duration: "8:24",
      views: "203K",
      category: "Interviews"
    },
    {
      id: 4,
      title: "Endless Journey - Live Performance",
      description: "Live acoustic performance of Endless Journey from the virtual concert series",
      videoUrl: "/assets/videos/mason-video2.mp4",
      thumbnailUrl: "/assets/images/headshot/headshot4.jpg",
      duration: "4:15",
      views: "156K",
      category: "Live Performances"
    }
  ];
  
  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };
  
  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };
  
  return (
    <section id="videos" className="video-gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">Visual</span> Journey
          </h2>
          <p className="section-subtitle">
            Music videos, behind-the-scenes content, and exclusive performances
          </p>
        </div>
        
        <div className="videos-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => handleVideoSelect(video)}
            >
              <div className="video-thumbnail-container">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title}
                  className="video-thumbnail"
                />
                <div className="video-overlay">
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                      <path d="M24 20L40 30L24 40V20Z" fill="black"/>
                    </svg>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </div>
              </div>
              
              <div className="video-info">
                <span className="video-category">{video.category}</span>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-stats">
                  <span className="video-views">👁 {video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedVideo && (
          <div className="video-modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleCloseModal}>
                ✕
              </button>
              <div className="modal-video-container">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay={isPlaying}
                  className="modal-video"
                />
              </div>
              <div className="modal-info">
                <h3 className="modal-title">{selectedVideo.title}</h3>
                <p className="modal-description">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="video-cta">
          <h3 className="cta-title">Want More Content?</h3>
          <p className="cta-description">
            Subscribe to our YouTube channel for exclusive videos and live performances
          </p>
          <div className="cta-buttons">
            <a 
              href="https://youtube.com/@masonsterlign" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-youtube"
            >
              <span className="btn-icon">▶️</span>
              Subscribe on YouTube
            </a>
            <a 
              href="#newsletter" 
              className="btn btn-secondary"
            >
              <span className="btn-icon">📧</span>
              Join Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;