import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-danger">{field.meta.touched ? field.meta.error : ''}</div>
			</div>
		)
	}
	onSubmit(values) {
		console.log(values);
	}

	render() {
		// 
		const { handleSubmit } = this.props

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field 
					label="Title"
					name="title" 
					component={this.renderField}
				/>
				<Field 
					label="Categories"
					name="categories" 
					component={this.renderField}
				/>
				<Field 
					label="Post Content"
					name="content" 
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

// values is an object that holds the values that the user has entered
function validate(values) {
	const errors = {};

	// validate the inputs from values
	if (!values.title) {
		errors.title = "Enter a title!"
	}
	if (!values.categories) {
		errors.categories = "Enter some categories!"
	}
	if (!values.content) {
		errors.content = "Enter some content!"
	}

	// if errors is empty, the form is fine to submit
	// if errors has any properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);