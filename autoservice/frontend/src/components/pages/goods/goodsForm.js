import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {validators} from "../../../utils"
import {connect} from 'react-redux'

import Form from "../../form/Form"
import {hiddenField, renderField, renderSelect} from "../../fields/fields"
import {getCategories} from "../../../actions/goods"


class GoodsForm extends Component {

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    componentDidMount() {
        this.props.getCategories()
    }

    render() {
        // const {edit} = this.props


        return (
            <Form
                initialValues={this.props.initialValues}
                handleSubmit={this.props.handleSubmit}
                onSubmit={this.onSubmit}
            >
                <Field name='title' component={renderField} label='Наименование'/>
                <Field name='description' component={renderField} label='Описание'/>
                <Field name='quantity' component={renderField} label='Количество'/>
                <Field name='price' component={renderField} label='Цена'/>

                <Field name='category' component={renderSelect} label='Категория' options={this.props.categories}/>
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
        'description',
        'quantity',
        'price',
        'category',
    ]
    return validators(formValues, fields)
}

const mapStateToProps = state => {
    return{
        categories: Object.values(state.goods.categories)
    }
}

export default connect(mapStateToProps, {getCategories})(reduxForm({
    form: 'goodForm',
    touchOnBlur: false,
    validate
})(GoodsForm))
