import React, {Component} from 'react'

import {Switch} from 'react-router-dom'
import PrivateRoute from "../../common/PrivateRoute"

import MainContainer from '../../mainContainer'
import AccountDetail from "./accountDetail"
import AccountCreate from "./accountCreate"
import AccountsList from "./accountsList"




class AccountsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path='/accounts' component={AccountsList}/>
                    <PrivateRoute exact path='/accounts/create' component={AccountCreate}/>
                    <PrivateRoute path='/accounts/:id' component={AccountDetail}/>
                </Switch>
            </MainContainer>
        )
    }
}

export default AccountsPage