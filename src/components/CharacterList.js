import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard'

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map((character, index) => {
        return (
          <CharacterCard
            key={index}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
          />
        );
      })};
    </section>
  );
}

export default CharacterList;