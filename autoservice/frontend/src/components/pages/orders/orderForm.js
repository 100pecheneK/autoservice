import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {
    hiddenField,
    hiddenFieldError, phoneNumberField,
    renderDatePicker,
    renderField, renderSearchField,
    renderTextField
} from "../../fields/fields"
import Form from "../../form/Form"
import {validators} from "../../../utils"
import {connect} from "react-redux"
import {
    getClientContactFull,
    getClientsContact,
    clearClientContactFull
} from "../../../actions/clientsContact"
import {Button} from "semantic-ui-react"

class OrderForm extends Component {

    componentDidMount() {
        this.props.getClientsContact()
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    selectHandler = clientId => {
        if (clientId) {
            this.props.getClientContactFull(clientId)
        } else {
            this.props.clearClientContactFull()
        }
    }

    render() {
        return (
            <>
                {
                    !this.props.performCreate &&
                    <Button disabled onClick={this.props.onOrderDone}>Завершить заказ</Button>
                }
                <Form
                    initialValues={this.props.initialValues}
                    handleSubmit={this.props.handleSubmit}
                    performCreate={this.props.performCreate}
                    onSubmit={this.onSubmit}
                >
                    {
                        this.props.performCreate ?
                            <Field
                                change={this.selectHandler}
                                name='client_id'
                                label='Клиент'
                                options={this.props.clientsContact}
                                component={renderSearchField}
                            /> :
                            <Field
                                name='phone_number'
                                component={phoneNumberField}
                                label='Номер телефона'/>
                    }
                    <Field name='first_name' component={renderField} label='Имя'/>
                    <Field name='last_name' component={renderField} label='Фамилия'/>
                    <Field name='generic_name' component={renderField} label='Отчество'/>
                    {
                        this.props.performCreate ?
                            Object.keys(this.props.initialValues).length ?
                                <Field name='phone_number' component={hiddenField}/> :
                                <Field
                                    name='phone_number'
                                    component={phoneNumberField}
                                    label='Номер телефона'/> : null
                    }
                    <Field name='car' component={renderField} label='Машина'/>
                    <Field name='client_description' component={renderTextField} label='Комментарий клиента'/>
                    <Field name='staff_description' component={renderTextField} label='Комментарий сотрудника'/>
                    <Field name='date_end' component={renderDatePicker} label='Дата завершения'/>
                    <Field name='non_field_errors' type='hidden' component={hiddenFieldError}
                    />
                </Form>
            </>
        )
    }
}

const validate = formValues => {
    const fields = [
        'first_name',
        'last_name',
        'generic_name',
        'phone_number',
        'client_description',
        'staff_description',
        'date_end',
        'car'
    ]
    return validators(formValues, fields)
}

OrderForm = reduxForm({
    form: 'orderForm',
    touchOnBlur: false,
    enableReinitialize: true,
    validate
})(OrderForm)

const mapStateToProps = state => {
    return ({
        clientsContact: Object.values(state.clientsContact.contact),
        initialValues: state.clientsContact.selectedContactFull
    })
}

export default connect(
    mapStateToProps,
    {getClientsContact, getClientContactFull, clearClientContactFull}
)(OrderForm)
