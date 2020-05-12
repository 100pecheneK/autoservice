import React, {Component} from 'react'
import {connect} from "react-redux"
import {getAccount} from "../../../actions/accounts"
import Header from "../../header"

class AccountDetail extends Component {
    componentDidMount() {
        this.props.getAccount(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editClient(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <>
                <Header title={'Аккаунт'} to={'/accounts'} create={false}/>
                {/*<AccountForm*/}
                {/*    initialValues={this.props.accounts}*/}
                {/*    enableReinitialize={true}*/}
                {/*    onSubmit={this.onSubmit}/>*/}
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
    {getAccount}
)(AccountDetail)