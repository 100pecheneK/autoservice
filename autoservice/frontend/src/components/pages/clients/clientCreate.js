import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addClient} from '../../../actions/clients'
import ClientForm from './clientForm'
import Header from "../../header"
import MainContainer from "../../mainContainer"

class ClientCreate extends Component {
    onSubmit = formValues => {
        this.props.addClient(formValues)
    }

    render() {
        return (
            <MainContainer>
                <Header title={'Создание клиента'} to={'/clients'} create={false}/>
                <ClientForm destroyOnUnmount={false} onSubmit={this.onSubmit}/>
            </MainContainer>
        )
    }
}

export default connect(
    null,
    {addClient}
)(ClientCreate)