
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <>
      {/* Video background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/restaurant-video.mp4" type="video/mp4" />
          <source src="/restaurant-video.webm" type="video/webm" />
          {/* Fallback animated background for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-restaurant-black via-restaurant-black-light to-restaurant-red/20 animate-pulse"></div>
          <div className="absolute inset-0">
            {/* Floating particles effect */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-restaurant-red/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </video>
      </div>
      <div className="video-overlay"></div>
    </>
  );
};

export default VideoBackground;
