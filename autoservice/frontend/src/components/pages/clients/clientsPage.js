import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
// import TableExamplePagination from "../../table/table"

class ClientsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Клиенты'}/>
                {/*<TableExamplePagination/>*/}
            </MainContainer>
        )
    }
}
export default ClientsPage