import React from 'react';
import './App.css';

// components
import Header from './Header';
import BackgroundImage from './BackgroundImage';
import OtherInfo from './OtherInfo';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Header />
      <OtherInfo />
    </div>
  );
}

export default App;
