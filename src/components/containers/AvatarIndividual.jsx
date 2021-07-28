import React, { Component } from 'react';
import Individual from '../characters/CharacterDetails';
import { fetchIndividual } from '../services/avatarApi';

export default class AvatarIndividual extends Component {
  state = {
    loading: true,
    character: {}
  }

  async componentDidMount() {
    const character = await fetchIndividual(this.props.match.params.id);
    this.setState({ character, loading: false });
  }

  render() {
    const { character, loading } = this.state;

    if(loading) return <img
      src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
      alt="Loading"
    />;

    return <Individual char={character} />;
  }
}
