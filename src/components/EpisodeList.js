import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import EpisodeCard from './EpisodeCard';
import SearchForm from './SearchForm';

const Body = styled.div`
margin: 0 auto;
`;

function EpisodeList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Error:', error);
      });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className='character-list'>
      <Body>
        <SearchForm />
          {characters.map((character, index) => {
              return (
                <EpisodeCard
                  key={index}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                />
              );
          })};
      </Body>
    </section>
  );
}

export default EpisodeList;