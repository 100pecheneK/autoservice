import React, {Component} from "react"
import {connect} from "react-redux"
import {addClient} from "../../../actions/clients"
import ClientForm from "./clientForm"

class ClientsCreatePage extends Component {
    onSubmit = formValues => {
        this.props.addClient(formValues)
    }

    render() {
        return (
            <ClientForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
        )
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    {addClient}
)(ClientsCreatePage)
