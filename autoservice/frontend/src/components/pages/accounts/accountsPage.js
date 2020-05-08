import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
import TableExamplePagination from "../../table/table"

class AccountsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Аккаунты'}/>
                <TableExamplePagination/>
            </MainContainer>
        )
    }
}

export default AccountsPage