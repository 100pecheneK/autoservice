import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {hiddenField, phoneNumberField, renderField} from "../../fields/fields"
import Form from "../../form/Form"
import {validators} from "../../../utils"


class ClientForm extends Component {

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
                <Field name='first_name' component={renderField} label='Имя'/>
                <Field name='last_name' component={renderField} label='Фамилия'/>
                <Field name='generic_name' component={renderField} label='Отчество'/>
                <Field name='phone_number' component={phoneNumberField} label='Номер телефона'/>
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
        'first_name',
        'last_name',
        'generic_name',
        'phone_number'
    ]
    return validators(formValues, fields)
}

export default reduxForm({
    form: 'clientForm',
    touchOnBlur: false,
    validate
})(ClientForm)
