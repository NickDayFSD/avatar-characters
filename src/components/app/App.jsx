import React from 'react';
import AvatarCharacters from '../containers/AvatarCharacters';
import AvatarIndividual from '../characters/CharacterDetails';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/">
          <AvatarCharacters />
        </Route>

        <Route path="/character/:id">
          <AvatarIndividual />
        </Route>

      </Switch>
    </Router>
  );
}
