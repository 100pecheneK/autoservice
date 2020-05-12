import React, {Component} from 'react'
import {connect} from "react-redux"
import {deleteAccount, getAccounts} from "../../../actions/accounts"
import history from "../../../history"
import TableExample from "../../table/table"
import makeMeFio from "../../../utils/makeMeFio"
import Header from "../../header"

class AccountsTable extends Component {

    componentDidMount() {
        this.props.getAccounts()
    }

    rowClickHandler = id => history.push(`/accounts/${id}`)
    deleteHandler = id => this.props.deleteAccount(id)

    render() {
        const accounts = this.props.accounts
        const fields = ['id', 'И', 'Ф', 'О', 'Логин', 'Email', 'Телефон', 'Статус']
        return (
            <>
                <Header title={'Аккаунты'} to={'/accounts/create'}/>
                <TableExample
                    fields={fields}
                    data={accounts}
                    rowClickHandler={this.rowClickHandler}
                    deleteHandler={this.deleteHandler}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    // console.log(Object.values(state.accountReducer))
    return {
        accounts: Object.values(state.accounts)
    }
}


export default connect(
    mapStateToProps,
    {getAccounts, deleteAccount}
)(AccountsTable)