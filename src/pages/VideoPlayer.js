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
      <div className="update-text">
        <h1>Update: April 16</h1>
        </div>
      <div className="video-container">
      <iframe
        title="Add feature Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pBsvFSVmRnQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      <div className="update-text">
        <h1>Update: April 22</h1>
        </div>
        <div className="video-container">
      <iframe
        title="Add feature Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DEc8O0z6kms"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      <div className="update-text">
        <h1>Update: April 29</h1>
        </div>

        <div className="video-container">
      <iframe
        title="Add feature Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uYa55BX3lHc"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
    
  );
};

export default VideoPlayer;
