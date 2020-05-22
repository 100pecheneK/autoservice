import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addAccount} from "../../../actions/accounts"
import AccountForm from "./accountForm"


import Header from "../../header"


class AccountCreate extends Component {

    onSubmit = formValues => {
        this.props.addAccount(formValues)
    }



    render() {
        return (
            <>
                <Header title={'Создание аккаунта'} to={'/accounts'} create={false}/>
                <AccountForm destroyOnUnmount={false} onSubmit={this.onSubmit} edit={false}/>
            </>
        )
    }
}

export default connect(
    null,
    {addAccount}
)(AccountCreate)
