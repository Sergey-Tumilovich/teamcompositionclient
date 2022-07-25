import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TeamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
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

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="name" component={this.renderInput} label="Enter Team Name" />
        <label>Team Composition</label>
        <Field
          name="composition"
          component="select"
        >
          
          <option value=""></option>
          <option value="4-5-1">4-5-1</option>
          <option value="4-4-2">4-4-2</option>
          <option value="4-3-3">4-3-3</option>
        </Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  
  if (!formValues.role) {
    errors.description = 'You must enter a role';
  }
  
  return errors;
};
  
export default reduxForm({
    form: 'teamForm',
    validate,
})(TeamForm);