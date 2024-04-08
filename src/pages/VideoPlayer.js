import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
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
      <div className="update-text">
        <h1>Update</h1>
        </div>
      <div className="video-container">
      <iframe
        title="Add feature Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UsnpBkTuNJE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
