import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
import { fetchTeams, fetchTeam, deleteTeam } from '../../actions';

class TeamList extends React.Component{
  componentDidMount(){
    this.props.fetchTeams();
  }


  renderCreate(){
    return(
      <div>
        <Link to="/teams/new" className='ui button primary'>New Team...</Link>
      </div>
    )
  }

  renderToolbar(id){//team
    return (
      <div className='right floated content'>
        <button className='ui button primary' onClick={()=>this.props.fetchTeam(id)}>
          Load
        </button>
        <button className='ui button negative' onClick={()=>this.props.deleteTeam(id)}>
          Delete
        </button>
      </div>
    )
  }

  renderList(){
    return this.props.teams.map(team=>{
      return(
        <div className='item' key={team.id}>
          {this.renderToolbar(team.id)}
          <i className='large middle aligned icon users'/>
          <div className='content'>
            {team.name}
            <div className='description'>{team.composition}</div>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <h2>Teams</h2>
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
    teams: Object.values(state.teams),
    selectedTeam: state.selected
  };
}

export default connect (mapStateToProps, { fetchTeams, fetchTeam, deleteTeam })(TeamList);