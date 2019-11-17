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
import Campground from './Campground';
import Transportation from './Transportation';
import Lodging from './Lodging';
import OurStory from './OurStory';
import EventsPage from './EventsPage';
import HomePage from './HomePage';
import WhatToBring from './WhatToBring';
import WhatToDo from './WhatToDo';
import Clothes from './Clothes';
import Dogs from './Dogs';
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
          <Route path='/campground'>
            <Campground />
          </Route>
          <Route path='/transportation'>
            <Transportation />
          </Route>
          <Route path='/lodging'>
            <Lodging />
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
          <Route path='/dogs'>
            <Dogs />
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
