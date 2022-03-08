import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function  Video({ url, channel, description, song, likes, comments, shares }) {

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {

    if(playing) {
      setPlaying(false);
      videoRef.current.pause();
    }else {
      setPlaying(true);
      videoRef.current.play();
    }

  }


  return (
    <div className='video'>
      <video src={url}
             className='video-player'
             loop
             ref={videoRef}
             onClick={handlePlay}
      />
      <VideoSidebar likes={likes}
                    comments={comments}
                    shares={shares}
      />
      <VideoFooter channel={channel}
                   description={description}
      />
    </div>
  )
}

export default  Video