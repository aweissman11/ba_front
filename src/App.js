import React from 'react';
import './App.css';

// components
import Header from './Header';
import BackgroundImage from './BackgroundImage';
import NavButtons from './NavButtons';
import OtherInfo from './OtherInfo';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Header />
      <NavButtons />
      <OtherInfo />
    </div>
  );
}

export default App;
