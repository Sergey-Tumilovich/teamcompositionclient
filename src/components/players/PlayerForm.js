import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PlayerForm extends React.Component {
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
        <Field name="name" component={this.renderInput} label="Enter Name" />
        <label>Enter Role</label>
        <Field
          name="role"
          component="select"
        >
          
          <option value=""></option>
          <option value="forward">Forward</option>
          <option value="defender">Defender</option>
          <option value="midfielder">Midfielder</option>
        </Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.title = 'You must enter a name';
  }

  if (!formValues.role) {
    errors.description = 'You must enter a role';
  }

  return errors;
};

export default reduxForm({
  form: 'playerForm',
  validate,
})(PlayerForm);

