import React from 'react';

const Individual = (char) => {
  <figure>
    <img src={char.photoUrl} alt={char.name} />
    <figcaption>
      <p>name: {char.name}</p>
      <p>affiliation: {char.affiliation}</p>
      <p>gender: {char.gender}</p>
      <p>weapon: {char.weapon}</p>
      <p>profession: {char.profession}</p>
      <p>position: {char.position}</p>
    </figcaption>
  </figure>;
};

export default Individual;
