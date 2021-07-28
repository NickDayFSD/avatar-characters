import React, { Component } from 'react';
import CharacterList from '../characters/CharacterList';
import { fetchCharacters } from '../services/avatarApi';

export default class AvatarCharacters extends Component {
  state = {
    loading: true,
    characters: []
  }

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { characters, loading } = this.state;

    if(loading) return <img
      src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
      alt="Loading"
    />;

    return <CharacterList characters={characters} />;
  }
}
