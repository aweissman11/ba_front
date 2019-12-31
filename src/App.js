import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// components
import NavButtons from './Components/NavButtons';
import Logistics from './Components/Logistics';
import Campground from './Components/Campground';
import Transportation from './Components/Transportation';
import Lodging from './Components/Lodging';
import OurStory from './Components/OurStory';
import EventsPage from './Components/EventsPage';
import HomePage from './Components/HomePage';
import WhatToBring from './Components/WhatToBring';
import WhatToDo from './Components/WhatToDo';
import Clothes from './Components/Clothes/Clothes.react';
import Dogs from './Components/Dogs';
import Registry from './Components/Registry';
import Contact from './Components/Contact';
import Rsvp from './Components/Rsvp';

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
