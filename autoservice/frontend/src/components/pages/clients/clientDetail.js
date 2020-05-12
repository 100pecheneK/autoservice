import React, {Component} from 'react'
import {connect} from "react-redux"
import {editClient, getClient} from "../../../actions/clients"
import MainContainer from "../../mainContainer"
import Header from "../../header"
import ClientForm from "./clientForm"

class ClientDetail extends Component {
    componentDidMount() {
        this.props.getClient(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editClient(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <MainContainer>
                <Header title={'Клиент'} to={'/clients'} create={false}/>
                <ClientForm
                    initialValues={this.props.client}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}/>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return ({
        client: state.clients[ownProps.match.params.id]
    })
}

export default connect(
    mapStateToProps,
    {getClient, editClient}
)(ClientDetail)