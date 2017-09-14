import React, { Component } from  'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component{
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }
  render() {
      return (
        <form>
            <Field
              label="Title"
              name="title"
              component={ this.renderField }
            />
        </form>
      );
  }
}

function validate(values){
  const errors = {};
  return error;
}

export default reduxForm({
  form: 'PostNewForm'
})(PostsNew);
