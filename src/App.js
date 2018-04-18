import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import './App.css';

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  </div>
);

export default App;
