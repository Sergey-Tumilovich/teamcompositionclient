import React from 'react';
import { connect } from 'react-redux';
import { createPlayer } from '../../actions';
import PlayerForm from './PlayerForm';

class PlayerCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createPlayer(formValues);
  };

  render() {
    return (
      <div>
        <h3>New Player</h3>
        <PlayerForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createPlayer })(PlayerCreate);
