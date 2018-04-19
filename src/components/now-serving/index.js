import React from 'react';
import './now-serving.css';

const NowServing = currentlyServing => (
  <div className="serving-container">
    <h1 className="serving-title">Now Serving</h1>
    <h2 className="serving-label">{JSON.stringify(currentlyServing)}</h2>
  </div>
);

export default NowServing;
