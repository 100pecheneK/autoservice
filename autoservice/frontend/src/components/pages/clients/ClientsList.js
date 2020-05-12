import React, {Component} from "react"
import {connect} from "react-redux"
import {deleteClient, getClients} from "../../../actions/clients"
import history from "../../../history"
import TableExample from "../../table/table"
import {makeMeFio} from "../../../utils"

class ClientsList extends Component {
    componentDidMount() {
        this.props.getClients()
    }

    rowClickHandler = id => history.push(`/clients/${id}`)
    deleteHandler = id => this.props.deleteClient(id)

    render() {
        const clients = makeMeFio(this.props.clients)
        const fields = ['id', 'ФИО', 'Номер телефона']
        return (
            <TableExample
                fields={fields}
                data={clients}
                rowClickHandler={this.rowClickHandler}
                deleteHandler={this.deleteHandler}
            />
        )
    }
}

const mapStatetoProps = state => ({
    clients: Object.values(state.clients)
})

export default connect(
    mapStatetoProps,
    {getClients, deleteClient}
)(ClientsList)