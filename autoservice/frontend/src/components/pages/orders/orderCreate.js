import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from "../../header"
import OrderForm from "./orderForm"
import {addOrder} from '../../../actions/orders'

class OrderCreate extends Component {
    onSubmit = formValues => {
        this.props.addOrder(formValues)
    }

    render() {
        return (
            <>
                <Header title={'Создание заказа'} to={'/orders'} create={false}/>
                <OrderForm
                    destroyOnUnmount={false}
                    onSubmit={this.onSubmit}
                    performCreate={true}
                />
            </>
        )
    }
}

export default connect(
    null,
    {addOrder}
)(OrderCreate)
