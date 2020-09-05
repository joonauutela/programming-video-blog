import React from 'react'
import ReactPlayer from 'react-player'
import '../App.css'

const YoutubePlayer = ({ link }) => {

    const config = {
        youtube: {
            playerVars: {
                controls: 1
            }
        }
    }
    return (
        <div className="player-wrapper">
            <ReactPlayer
                className="youtube-player"
                url={link}
                config={config}
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default YoutubePlayer