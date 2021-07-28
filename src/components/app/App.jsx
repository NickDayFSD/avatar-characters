import React from 'react';
import AvatarCharacters from '../containers/AvatarCharacters';
import AvatarIndividual from '../containers/AvatarIndividual';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
  
          <Route path="/" exact={true}
            render={routerProps => (
              <AvatarCharacters {...routerProps}/>
            )}>
          </Route>
  
          <Route path="/character/:id" exact={true}
            component={AvatarIndividual}
          >
          </Route>
  
        </Switch>
      </Router>
    </div>
  );
}
