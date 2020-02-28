import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import LocationsCard from './LocationsCard';
import SearchForm from './SearchForm';

function LocationsList() {
    const [locations, setLocations] = useState([]);

  useEffect(() => {
    Axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/locations/')
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log('Error:', error);
      });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className='character-list'>
        <SearchForm />
          {locations.map((location, index) => {
              return (
                <LocationsCard
                  key={index}
                  name={location.name}
                  status={location.status}
                  species={location.species}
                  gender={location.gender}
                />
              );
          })};
    </section>
  );
}

export default LocationsList;
