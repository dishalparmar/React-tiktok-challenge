import React, { useState } from 'react';
import './Video.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function VideoSidebar({likes, comments, shares}) {

  const [liked, setLiked] = useState(false);

  return (
    <div className='video-sidebar'>
      <div className='video-sidebar-icon'>
        {liked ? (<FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} />) : 
        (<FavoriteBorderIcon fontSize='large' onClick={(e) => setLiked(true)} />) }
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className='video-sidebar-icon'>
        <InsertCommentOutlinedIcon fontSize='large'/>
        <p>{comments}</p>
      </div>

      <div className='video-sidebar-icon'>
        <ShareOutlinedIcon fontSize='large'/>
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar