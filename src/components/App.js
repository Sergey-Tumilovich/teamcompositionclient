import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import MainLayout from './MainLayout';

import PlayerCreate from './players/PlayerCreate';
import PlayerEdit from './players/PlayerEdit';
import TeamCreate from './teams/TeamCreate';

import history from './history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          {/* PlayerList */}
          <Route path="/" exact component={MainLayout} />
          <Route path="/players/new" exact component={PlayerCreate} />
          <Route path="/players/edit/:id" exact component={PlayerEdit} />
          <Route path="/teams/new" exact component={TeamCreate} />
        </div>
      </Router>
    </div>
  );
};

export default App;
