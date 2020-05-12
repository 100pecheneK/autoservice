import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import MainContainer from '../../mainContainer'
import AccountDetail from "./accountDetail"
import AccountsList from "./accountsList"
import Header from "../../header"
import PrivateRoute from "../../common/PrivateRoute"


class AccountsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path='/accounts' component={AccountsList}/>
                    <PrivateRoute path='/accounts/:id' component={AccountDetail}/>
                </Switch>
            </MainContainer>
        )
    }
}

export default AccountsPage