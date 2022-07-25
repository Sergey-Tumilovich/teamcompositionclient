import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { fetchPlayer, editPlayer } from '../../actions';
import PlayerForm from './PlayerForm';

class PlayerEdit extends React.Component {
  componentDidMount(){
    this.props.fetchPlayer(this.props.match.params.id);
  }

  onSubmit = (formValues) =>{
    this.props.editPlayer(this.props.match.params.id,formValues);
  }

  render(){
    return (
      <div>
        <h3>Edit Player</h3>
        <PlayerForm
          initialValues={_.pick(this.props.player, 'name', 'role')} 
          onSubmit={this.onSubmit} />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) =>{
  return {player: state.players[ownProps.match.params.id]}
}

export default connect (mapStateToProps, {fetchPlayer, editPlayer})(PlayerEdit);
