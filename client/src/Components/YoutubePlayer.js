import React from 'react'
import YouTube from 'react-youtube'

const YoutubePlayer = ({ link }) => {

    const opts = {
        height: '195',
        width: '320',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            autohide: 1,
            enablejsapi: 1,
            wmode: 'opaque',
            origin: 'http://localhost:3000',
            widget_referrer: window.location.href
        },
    }
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        <YouTube videoId={link} opts={opts} onReady={_onReady} />
    )
}

export default YoutubePlayer