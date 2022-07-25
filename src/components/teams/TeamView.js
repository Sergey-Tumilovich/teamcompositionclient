import React from 'react';
import { connect } from 'react-redux';
import { editTeam, createPlayer } from '../../actions';
import TeamViewForm from './TeamViewForm';

class TeamView extends React.Component{

onMovePlayer = (player) =>{
  this.props.createPlayer(player);
}

onSubmit = (formValues) =>{
  this.props.editTeam(this.props.selectedTeam.id,formValues);
}

render(){
  return (
    <div>
      <h3>Edit Team</h3>
      <TeamViewForm
        initialValues={this.props.selectedTeam}
        onSubmit={this.onSubmit}
        onMovePlayer={this.onMovePlayer} />
    </div>
  )
}
};

const mapStateToProps = (state) =>{
  return {selectedTeam: state.selected.selectedTeam}
}

export default connect(mapStateToProps,{editTeam})(TeamView);