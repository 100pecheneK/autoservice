import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
import AccountsTable from "./accountsTable"

class AccountsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Аккаунты'}/>
                <AccountsTable/>
            </MainContainer>
        )
    }
}

export default AccountsPage