import React, {useEffect, useState} from 'react';
import './App.css';
import Video from './Video/Video';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos')
      .onSnapshot((snapshot) => {
        setVideos(snapshot.docs.map((doc) => doc.data()));
      })
  }, []);

  return (
    <div className="app">
      <div className='app-video'>
        {videos.map(({url, channel, description, likes, comments, shares}) =>
            <Video key={url} 
                   url={url}
                   channel={channel}
                   likes={likes}
                   comments={comments}
                   description={description}
                   shares={shares}
          />
        )}
      </div>
    </div>
  );
}

export default App;
