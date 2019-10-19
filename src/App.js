import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// components
import NavButtons from './NavButtons';
import OtherInfo from './OtherInfo';
import PicturePage from './PicturePage';
import EventsPage from './EventsPage';
import Homepage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavButtons />
        <Switch>
          <Route path='/schedule'>
            <EventsPage />
          </Route>
          <Route path='/story'>
            <PicturePage />
          </Route>
          <Route path='/logistics'>
            <OtherInfo />
          </Route>
          <Route path='/stuff'>
            <EventsPage />
          </Route>
          <Route path='/todo'>
            <EventsPage />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
      {/* <div className='footer'></div> */}
    </BrowserRouter>
  );
}

export default App;
