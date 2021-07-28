import React, { Component } from 'react';
import CharacterList from '../characters/CharacterList';
import fetchCharacters from '../services/avatarApi';

export default class AvatarCharacters extends Component {
  state = {
    loading: true,
    characters: []
  }

  async ComponentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { characters, loading } = this.state;

    if(loading) return <img src="http://gph.is/1c5ob2p" alt="Loading" />;

    return <CharacterList characters={characters} />;
  }
}

// loader gif = http://gph.is/1c5ob2p
