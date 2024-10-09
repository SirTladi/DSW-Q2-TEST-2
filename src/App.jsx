import React from 'react';
import SimpleCounter from './SimpleCounter';
import StarRating from './StarRating';
import InstagramHeart from './InstagramHeart';
import ThumbsUp from './ThumbsUp';
import ProgressRing from './ProgressRing';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <div className="card">
        <h2>Simple Counter</h2>
        <SimpleCounter />
      </div>

      <div className="card">
        <h2>Star Rating</h2>
        <StarRating />
      </div>

      <div className="card">
        <h2>Instagram Heart</h2>
        <InstagramHeart />
      </div>

      <div className="card">
        <h2>Thumbs Up</h2>
        <ThumbsUp />
      </div>

      <div className="card">
        <h2>Progress Ring</h2>
        <ProgressRing />
      </div>
    </div>
  );
}

export default App;
