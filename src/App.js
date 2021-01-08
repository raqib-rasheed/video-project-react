import React from 'react'
import './App.css';
import video from "./util/forest_fire_mountains_natural_disaster_634.mp4"


function App() {
  const [playing,setPlaying] = React.useState(true)
  function controlVideo(e){
    let video = e.target.parentElement.parentNode.firstChild
    setPlaying(!playing)
    playing?video.pause():video.play()
  }
  return (
    <div id="container">
      <video name="video" className="video-container"  muted autoPlay loop>
        <source src={video} />
      </video>
      <div className="overlay" /> 
      <h1>Video Project</h1>
      <div id="btn-container">
      <button 
      onClick={controlVideo}
      className="btn btn-outline-light">Play | Pause</button>
      </div>
    </div>
  )
}

export default App;
