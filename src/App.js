import React from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './components/Home/Home';
import Post from './components/Post/Post';
import ZoomHover from './components/ZoomHover/ZoomHover';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Post/>
      <ZoomHover/>
      <Footer/>
    </div>  
  );
}

export default App;
