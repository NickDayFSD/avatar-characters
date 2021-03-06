import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ _id, name, photoUrl, affiliation }) => {
  return (
    <Link to={`/character/${_id}`}>
      <figure>
        <img src={photoUrl} alt={name}/>
        <figcaption>
          <p>{name}</p>
          <p>{affiliation}</p>
        </figcaption>
      </figure>
    </Link>);
};

Character.PropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};

export default Character;
