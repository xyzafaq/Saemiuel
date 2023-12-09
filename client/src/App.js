import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSize, setVideoSize] = useState(1);
  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  const handleSizeChange = (value) => {
    setVideoSize(value);
  };

  const renderControlButtons = () => (
    <div className="controls">
      <button className="side_btn" onClick={() => handleSizeChange(videoSize - 0.025)}>-</button>
      <button className="register_btn" onClick={handlePlay}>Start</button>
      <button className="side_btn" onClick={() => handleSizeChange(videoSize + 0.025)}>+</button>
    </div>
  );

  return (
    <div className="app">
      <div className='home' style={{gridTemplateRows: '100% 0%',overflow:'hidden'}} >
        {/* {isPlaying ? null : (<><div className="eclipse"></div></>)} */}
        <div className="flex" style={{position:'relative'}} >
          <ReactPlayer
            ref={playerRef}
            url="/video.mp4"
            playing={isPlaying}
            width={`calc(100% * ${videoSize})`}
            height="auto"
            controls={false}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload nofullscreen noremoteplayback', // Disable Safari and TV casting controls
                  playsinline: true, // Enable inline playback for iOS
                  'webkit-playsinline': true,
                },
              },
            }}
            onEnded={handleEnd}
            style={{position: 'absolute'}}
          />
        </div>
        <div className="flex_align" >
          {isPlaying ? null : renderControlButtons()}
        </div>
      </div>
    </div>
  );
};

export default App;
