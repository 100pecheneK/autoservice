import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"

class ClientsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Клиенты'} to={'/clients/create'}/>
            </MainContainer>
        )
    }
}
export default ClientsPage