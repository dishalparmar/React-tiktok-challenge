import React from 'react';
import './Video.css';

function VideoFooter({channel, description}) {

  return (
    <div className='video-footer'>
      <div className='video-footer-text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
      </div>
        <img
          className="video-footer-record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
    </div>
    
  )
}

export default VideoFooter