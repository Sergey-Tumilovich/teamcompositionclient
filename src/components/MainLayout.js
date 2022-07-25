import React from 'react';
import PlayerList from './players/PlayerList';
import TeamView from './teams/TeamView';
import TeamList from './teams/TeamList';

class MainLayout extends React.Component {
  render(){
    return(
      <div className='ui grid'>
        <div className='eight wide column'>
          <PlayerList/>
        </div>
        <div className='eight wide column'>
          <TeamView/>
          <TeamList/>
        </div>
      </div>
    )
  }
};

export default MainLayout;