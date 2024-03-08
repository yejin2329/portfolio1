import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <iframe
        title="Project Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7IIsSE2qjTI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
