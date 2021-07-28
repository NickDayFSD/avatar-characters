import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, photoUrl, affiliation }) => (
  <figure>
    <img src={photoUrl} alt={name}/>
    <figcaption>
      <p>{name}</p>
      <p>{affiliation}</p>
    </figcaption>
  </figure>
);

Character.PropTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};

export default Character;
