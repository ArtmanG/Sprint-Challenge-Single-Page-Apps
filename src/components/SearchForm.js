import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard'

export default function SearchForm() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    Axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data = response.data.results;
        console.log('Data:', data);
        const result = data.filter(name =>
          name.name.toLowerCase().includes(query.toLowerCase())  
        );
        setCharacters(result);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
 
  return (
    <div>
      <section className='search-form'>
      <form>
        <input
            type='text'
            onChange={handleInputChange}
            value={query}
            name='name'
            tabIndex='0'
            placeholder='Search'
            autoComplete='off'
        />
      </form>
      </section>
      <section className='character-list'>
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
    </div>
  );
}
