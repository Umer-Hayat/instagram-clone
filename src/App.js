import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from "./firebase";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="/static/images/logo.png"
          alt="logo"
        />
      </div>
      {/* Header */}

      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      {/* 
      <Post />
      <Post username="Hayat" caption="Wow React is very easy" imageUrl="/static/images/react.jpg" />
      <Post username="Umer Hayat" caption="Wow Very nice" imageUrl="/static/images/react.jpg" /> */}


    </div>
  );
}

export default App;
