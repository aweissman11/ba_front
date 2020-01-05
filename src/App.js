import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// components
import NavButtons from './Components/NavButtons/NavButtons.react';
import Campground from './Components/Campground/Campground.react';
import Transportation from './Components/Transportation/Transportation.react';
import Lodging from './Components/Lodging/Lodging.react';
import OurStory from './Components/OurStory/OurStory.react';
import EventsPage from './Components/EventsPage/EventsPage.react';
import HomePage from './Components/HomePage/HomePage.react';
import WhatToBring from './Components/WhatToBring/WhatToBring.react';
import WhatToDo from './Components/WhatToDo/WhatToDo.react';
import Dogs from './Components/Dogs/Dogs.react';
import Registry from './Components/Registry/Registry.react';
import Contact from './Components/Contact/Contact.react';
import Clothes from './Components/Clothes/Clothes.react';
import { RSVP } from './Components/Rsvp/RSVP.react';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id='app-root'>
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
            <RSVP />
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
