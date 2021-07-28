import React, { Component } from 'react';
import CharacterDetails from '../characters/CharacterDetails';
import { fetchIndividual } from '../services/avatarApi';

export default class AvatarIndividual extends Component {
  state = {
    loading: true,
    character: {}
  }

  async componentDidMount(id) {
    const character = await fetchIndividual(id);
    this.setState({ character, loading: false });
  }

  render() {
    const { character, loading } = this.state;

    if(loading) return <img
      src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
      alt="Loading"
    />;

    return <CharacterDetails char={character} />;
  }
}
