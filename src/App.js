import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import Navigation from './components/Navigation.js';

const Body = styled.div`
margin: 0 auto;
`;


function App() {
  return (
    <main>
      <Body>
        <Header />
        <Navigation />
        <Route exact path='/' >
          <WelcomePage />
        </Route>

        <Route path='/characters' >
          <CharacterList />
        </Route>
      </Body>
    </main>
  );
}

export default App;
