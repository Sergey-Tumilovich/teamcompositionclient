import React from 'react';
import { connect } from 'react-redux';
import { createTeam } from '../../actions';
import TeamForm from './TeamForm';


class TeamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTeam(formValues);
  };

  render() {
    return (
      <div>
        <h3>New Team</h3>
        <TeamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
};

export default connect(null, { createTeam })(TeamCreate);