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
      <button className="side_btn" onClick={() => handleSizeChange(videoSize - 0.1)}>-</button>
      <button className="register_btn" onClick={handlePlay}>Start</button>
      <button className="side_btn" onClick={() => handleSizeChange(videoSize + 0.1)}>+</button>
    </div>
  );

  return (
    <div className="app">
      <div className='home'>
        {isPlaying ? null : (<><div className="eclipse"></div></>)}
        <div className="flex" >
          <ReactPlayer
            ref={playerRef}
            url="/video.mp4"
            playing={isPlaying}
            width={`calc(100% * ${videoSize})`}
            height="auto"
            controls={false}
            onEnded={handleEnd}
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
