import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// components
import NavButtons from './NavButtons';
import Logistics from './Logistics';
import OurStory from './OurStory';
import EventsPage from './EventsPage';
import HomePage from './HomePage';
import WhatToBring from './WhatToBring';
import WhatToDo from './WhatToDo';
import Clothes from './Clothes';
import Registry from './Registry';
import Contact from './Contact';
import Rsvp from './Rsvp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavButtons />
        <Switch>
          <Route path='/events'>
            <EventsPage />
          </Route>
          <Route path='/story'>
            <OurStory />
          </Route>
          <Route path='/logistics'>
            <Logistics />
          </Route>
          <Route path='/stuff'>
            <WhatToBring />
          </Route>
          <Route path='/todo'>
            <WhatToDo />
          </Route>
          <Route path='/clothes'>
            <Clothes />
          </Route>
          <Route path='/registry'>
            <Registry />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/rsvp'>
            <Rsvp />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
      {/* <div className='footer'></div> */}
    </BrowserRouter>
  );
}

export default App;
