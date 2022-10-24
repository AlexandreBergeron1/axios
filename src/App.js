import React from 'react';
import style from './App.css';
//Import all components
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  //constants
  const name = "Alexandre";
  const message = "This is my message.";

  //create our functions

  return (
    <div>
      <h1>Bonjour {name}</h1>
      <CreatePost />
      <PostList />
    </div> 
  );
};

export default App;
