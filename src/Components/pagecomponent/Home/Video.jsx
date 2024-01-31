import React from 'react'
import { Player } from "video-react";
import PlayVideo from "../../../assets/sales-report.mp4";
import "../../../../node_modules/video-react/dist/video-react.css";


function Video() {
  return (
    <div className="">
        <Player
          playsInline
          autoPlay
          muted
          poster="/assets/poster.png"
          src={PlayVideo}
        />
      </div>
  )
}

export default Video