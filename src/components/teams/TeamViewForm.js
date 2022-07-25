import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

class TeamViewForm extends React.Component{
  componentDidMount(){
    console.log('MOUNTED')
  }

  componentDidUpdate(){
    console.log('UPDATED');
  }

    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
    }

    renderToolbar(id){
      return (
        <div className='right floated content'>
          <button className='ui button primary' onClick={()=>this.props.fetchTeam(id)}>
            Remove from Team
          </button>
        </div>
      )
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
          </div>
        );
      };

    limitOf(part){
      return 0;
    }

    renderP(input){
      return <span>{input}</span>
    }

    setLimitText(team){
      const teamLimit = team.composition.split('-');
      return(
        <div>
          <p>{team.defenders}/{teamLimit[0]} Defenders, 
          {team.midfielders}/{teamLimit[1]} Midfielders, 
          {team.forwards}/{teamLimit[2]} Forwards</p>
        </div>
      )
    }
    
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  onMovePlayer = (player) =>{
    this.props.onMovePlayer(player);
  }

  removeFromTeam(fields,index){
    fields.remove(index);
  }

  renderMembers({fields}){
    if(fields.length===0) return <div>No players yet, add them now!</div>
    return (
    <div className='ui celled list'>
      {fields.map((member, index,fields) => (
        <li key={index} className="item">
          <div className='ui right floated content'>
          <button
            className='ui button primary'
            onClick={()=>{
              fields.remove(index);
              }}>Remove from Team</button>
          </div>
          <i className='large middle aligned icon futbol outline'/>
          <Field
            name={`${member}.name`}
            component="input"
            readOnly={true}
            label=""
          />
          <Field
            name={`${member}.role`}
            type="text"
            component="input"
            readOnly={true}
            label=""
          />
        </li>
      )
    )}
    </div>)
  }

  render() {
    if(!this.props.initialValues) return <div>Load a team to edit it here</div>
  return (
    <form
      onSubmit={this.props.handleSubmit(this.onSubmit)}
      className="ui form error">
      <Field name="name" component={this.renderInput} label="Change Name" />
      <label>Change Composition</label>
      <Field
        name="composition"
        component="select"
      >
        <option value=""></option>
        <option value="4-5-1">4-5-1</option>
        <option value="4-4-2">4-4-2</option>
        <option value="4-3-3">4-3-3</option>
      </Field>
      <FieldArray 
        name="players" 
        component={
          this.renderMembers
        } />
      <button type="submit" className="ui button primary">Save Team</button>
    </form>
    );
  }
}
  
export default reduxForm({
  form: 'teamViewForm',
  enableReinitialize: true,
})(TeamViewForm);