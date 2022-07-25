import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import MainLayout from './MainLayout';

import PlayerCreate from './players/PlayerCreate';
import PlayerEdit from './players/PlayerEdit';
import TeamCreate from './teams/TeamCreate';

import history from './history';

const App = () => {
  return (
    <div className="ui container">
      <HashRouter history={history}>
        <div>
          <Header />
          <Route path="/#/" exact component={MainLayout} />
          <Route path="/players/new" exact component={PlayerCreate} />
          <Route path="/players/edit/:id" exact component={PlayerEdit} />
          <Route path="/teams/new" exact component={TeamCreate} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
