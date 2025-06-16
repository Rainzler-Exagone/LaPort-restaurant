
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <>
      {/* Animated background instead of video for better performance */}
      <div className="video-background">
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
      </div>
      <div className="video-overlay"></div>
    </>
  );
};

export default VideoBackground;
