import React from 'react';
import YouTube from 'react-youtube';

class Imagine extends React.Component {
  render() {
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   },
    // };

    return (
    //   <YouTube
    //     videoId="0Jz0VSg76J4&t"
    //     opts={opts}
    //     onReady={this.onReady}
    //   />
    <div>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/0Jz0VSg76J4" 
            title="YouTube video player" 
            frameborder="0"      
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen>
        </iframe>
    </div>
    );
  }

//   onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
}


export default Imagine