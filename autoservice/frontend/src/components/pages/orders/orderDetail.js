import React, {Component} from 'react'
import {connect} from "react-redux"
import {editOrder, getOrder} from "../../../actions/orders"
import Header from "../../header"
import OrderForm from "./orderForm"

class OrderDetail extends Component {
    componentDidMount() {
        this.props.getOrder(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editOrder(this.props.match.params.id, formValues)
    }
    onOrderDone = () => {
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <>
                <Header title={'Заказ'} to={'/orders'} create={false}/>
                <OrderForm
                    onSubmit={this.onSubmit}
                    performCreate={false}
                    onOrderDone={this.onOrderDone}
                />
            </>
        )
    }
}


export default connect(
    null,
    {getOrder, editOrder}
)(OrderDetail)