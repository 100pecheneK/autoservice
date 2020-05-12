import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
import ClientsList from "./ClientsList"

class ClientsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Клиенты'} to={'/clients/create'}/>
                <ClientsList/>
            </MainContainer>
        )
    }
}
export default ClientsPage