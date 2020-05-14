import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {hiddenField, phoneNumberField, renderEmailField, renderField, renderSelect} from "../../fields/fields"
import Form from "../../form/Form"


class AccountForm extends Component {

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        const {edit} = this.props
        const options = [
            {
                value: 'Сотрудник',
                title: 'Сотрудник'
            },
            {
                value: 'Админ',
                title: 'Админ'
            }
        ]

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
                <Field name='username' component={renderField} label='Логин'/>
                <Field name='email' type={'email'} required component={renderEmailField} label='Почта'/>
                {!edit &&
                <Field name='password' component={renderField} label='Пароль'/>
                }
                <Field name='status' component={renderSelect} label='Статус' options={options}/>
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
    const errors = {}
    const errorMsg = 'Не менее 1 символа'
    const fields = [
        'first_name',
        'last_name',
        'generic_name',
        'phone_number',
        'username',
        'email'
    ]

    fields.forEach(field => {
        if (!formValues[field]) {
            errors[field] = errorMsg
        }
    })
    if (!formValues.status) {
        errors.status = 'Выберите статус пользователя'
    }
    if (!formValues.password) {
        errors.password = 'Это поле обязателньо'
    } else if (formValues.password.length < 4) {
        errors.password = 'Не меньше 4 символов'
    }

    return errors
}

export default reduxForm({
    form: 'accountForm',
    touchOnBlur: false,
    validate
})(AccountForm)
