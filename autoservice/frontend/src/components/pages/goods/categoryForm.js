import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {hiddenField, renderField} from "../../fields/fields";
import Form from "../../form/Form";
import {validators} from "../../../utils";
import {Button, Modal} from "semantic-ui-react";

class CategoryForm extends Component {

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
                    <Form
                        initialValues={this.props.initialValues}
                        handleSubmit={this.props.handleSubmit}
                        onSubmit={this.onSubmit}
                    >
                        <Field name='title' component={renderField} label='Наименование'/>

                        <Field
                            name='non_field_errors'
                            type='hidden'
                            component={hiddenField}
                        />
                    </Form>

        )
    }
}

const validate = formValues => {
    const fields = [
        'title',
    ]
    return validators(formValues, fields)
}

export default reduxForm({
    form: 'categoryForm',
    touchOnBlur: false,
    validate
})(CategoryForm)