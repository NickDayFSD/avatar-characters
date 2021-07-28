import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character
        {...character}
      />
    </li>
  ));
  return <ul>{characterElements}</ul>;
};

CharacterList.PropTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CharacterList;
