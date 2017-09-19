import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './postits.png';
import PostitForm from './components/PostitForm';
import PostitList from './components/PostitList';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>OMG IT IS YOUR POST-ITS!</h1>
    </div>
    <div>
      <PostitForm />
      <PostitList />
      <Footer />
    </div>
  </div>
)

export default App;
