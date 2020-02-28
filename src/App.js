import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import Navigation from './components/Navigation.js';


function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path='/' >
        <WelcomePage />
      </Route>

      <Route path='/characters' >
        <CharacterList />
      </Route>
    </main>
  );
}

export default App;
