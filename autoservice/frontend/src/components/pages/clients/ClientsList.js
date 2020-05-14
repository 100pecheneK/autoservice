import React, {Component} from "react"
import {connect} from "react-redux"
import {deleteClient, getClients} from "../../../actions/clients"
import history from "../../../history"
import TableExample from "../../table/table"
import Header from "../../header"

class ClientsList extends Component {
    componentDidMount() {
        this.props.getClients()
    }

    rowClickHandler = id => history.push(`/clients/${id}`)
    deleteHandler = id => this.props.deleteClient(id)

    render() {
        const clients = this.props.clients
        const fields = ['id', 'И', 'Ф', 'О', 'Номер телефона']
        return (
            <>
                <Header title={'Клиенты'} to={'/clients/create'}/>
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
    clients: Object.values(state.clients)
})

export default connect(
    mapStateToProps,
    {getClients, deleteClient}
)(ClientsList)