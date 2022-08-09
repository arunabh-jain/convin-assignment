import React from 'react'

const VideoFrame = (props) => {
  return (
    <div>
        <iframe src={props.link} width="560" height="315" frameborder="0" allow="autoplay; fullscreen" 
            allowfullscreen id="frame1"/>
    </div>
  )
}

export default VideoFrame