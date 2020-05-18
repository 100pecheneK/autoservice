import React, {Component} from 'react'
import {connect} from "react-redux"

import {getAccount, editAccount} from "../../../actions/accounts"
import Header from "../../header"
import AccountForm from "./accountForm"


class AccountDetail extends Component {
    componentDidMount() {
        this.props.getAccount(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editAccount(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <>
                <Header title={'Аккаунт'} to={'/accounts'} create={false} edit={true}/>
                <AccountForm
                    edit={true}
                    initialValues={this.props.accounts}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        accounts: state.accounts[ownProps.match.params.id]
    })
}

export default connect(
    mapStateToProps,
    {getAccount, editAccount}
)(AccountDetail)