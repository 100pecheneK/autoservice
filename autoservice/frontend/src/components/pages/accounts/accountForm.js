import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {hiddenField, phoneNumberField, renderField, renderSelect} from "../../fields/fields"
import Form from "../../form/Form"


class AccountForm extends Component {

    onSubmit = (values, dispatch, props) => {
        this.props.onSubmit(values)
    }

    render() {
        const options = [
            {
                id:1,
                value: 'Админ',
                title:'Админ'
            },
            {
                id:2,
                value: 'Сотрудник',
                title: 'Сотрудник'
            }
        ]

        const {edit} = this.props

        return (
            <Form
                initialValues={this.props.initialValues}
                handleSubmit={this.props.handleSubmit}
                onSubmit= {this.onSubmit}
            >
                <Field name='first_name' component={renderField} label='Имя'/>
                <Field name='last_name' component={renderField} label='Фамилия'/>
                <Field name='generic_name' component={renderField} label='Отчество'/>
                <Field name='phone_number' component={phoneNumberField} label='Номер телефона'/>
                <Field name='username' component={renderField} label='Логин'/>
                <Field name='email' component={renderField} label='Почта'/>
                { !edit &&
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
        'email',
        'password',
    ]

    fields.forEach(field => {
        if (!formValues[field]) {
            errors[field] = errorMsg
        }
    })
    if(!formValues.status){
            errors.status = 'Выберите статус пользователя'
    }
    return errors
}

export default reduxForm({
    form: 'accountForm',
    touchOnBlur: false,
    validate
})(AccountForm)
