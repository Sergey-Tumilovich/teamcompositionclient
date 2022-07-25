import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
import { fetchPlayers, deletePlayer } from '../../actions';

class PlayerList extends React.Component{
  componentDidMount(){
    this.props.fetchPlayers();
  }

  renderCreate(){
    return(
      <div>
        <Link to="/players/new" className='ui button primary'>New Player...</Link>
      </div>
    )
  }

  addPlayerToSelectedTeam(team,player){
    let innerId = 1;
    if(team.players.length>0){ 
      let maxPlayer = team.players.reduce((a,b)=>{
        return Math.max(a.id,b.id)
      });
      innerId = maxPlayer.id+1;
    }
    console.log("next id");
    console.log(innerId);
    //not a good solution for React/Redux
    //but since JSON server is not good with nesting routes... ;)
    const newPlayers= team.players;
    newPlayers.push({...player,id:innerId});
    const newSelected = {...team,players:newPlayers};
    this.setState({selectedTeam:newSelected});
    // team.players.push({...player,id:innerId});
  }

  moveToTeam(player){
    //no selected team?
    if(!this.props.selectedTeam) return;
    //1. Put this player to a current team' players[] list
    this.addPlayerToSelectedTeam(this.props.selectedTeam, _.pick(player,'name','role'));
    //2. Delete this player from a list
  }

  renderToolbar(player){
    return (
      <div className='right floated content'>
        <Link to={`/players/edit/${player.id}`} 
        className='ui button primary'>Edit Player</Link>
        <button className='ui button primary' onClick={()=>this.moveToTeam(player)}>
          Add to Current Team
        </button>
        <button className='ui button negative' onClick={()=>this.props.deletePlayer(player.id)}>
          Delete
        </button>
      </div>
    )
  }

  renderList(){
    return this.props.players.map(player=>{
      return(
        <div className='item' key={player.id}>
          {this.renderToolbar(player)}
          <i className='large middle aligned icon futbol outline'/>
          <div className='content'>
            {player.name}
            <div className='description'>{player.role}</div>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <div>
          <h2>Player Pool</h2>
        </div>
        <div className='ui celled list'>
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { 
    players: Object.values(state.players),
    selectedTeam: state.selected.selectedTeam
   };
};

export default connect(
  mapStateToProps,
   {fetchPlayers,
    deletePlayer
  }) (PlayerList);
