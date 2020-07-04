import React from 'react'
import ReactPlayer from 'react-player'
import '../App.css'

const YoutubePlayer = () => {

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
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                config={config}
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default YoutubePlayer