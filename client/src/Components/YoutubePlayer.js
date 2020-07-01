import React from 'react'
import YouTube from 'react-youtube'

const YoutubePlayer = () => {
    const opts = {
        height: '195',
        width: '320',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
    )
}

export default YoutubePlayer