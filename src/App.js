import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="images/logo.png"
          alt="logo"
        />
      </div>
      {/* Header */}


      <Post />

      {/* Posts */}
    </div>
  );
}

export default App;
