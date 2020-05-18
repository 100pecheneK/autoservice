import React, {Component} from "react"
import {connect} from "react-redux"
import {getOrders, deleteOrder} from "../../../actions/orders"
import history from "../../../history"
import TableExample from "../../table/table"
import Header from "../../header"

class OrdersList extends Component {
    componentDidMount() {
        this.props.getOrders()
    }

    rowClickHandler = id => history.push(`/orders/${id}`)

    deleteHandler = id => this.props.deleteOrder(id)

    render() {
        const clients = this.props.orders
        const fields = ['id', 'Номер телефона', 'Машина', 'Дата сдачи', 'Стутус']
        return (
            <>
                <Header title={'Клиенты'} to={'/orders/create'}/>
                <TableExample
                    fields={fields}
                    data={clients}
                    rowClickHandler={this.rowClickHandler}
                    deleteHandler={this.deleteHandler}
                />
            </>
        )
    }
}

const mapStateToProps = state => ({
    orders: Object.values(state.orders)
})

export default connect(
    mapStateToProps,
    {getOrders, deleteOrder}
)(OrdersList)