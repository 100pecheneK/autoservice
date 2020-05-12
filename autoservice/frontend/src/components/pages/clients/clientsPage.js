import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
import ClientsList from "./ClientsList"
import {Route, Switch} from "react-router-dom"
import AccountsList from "../accounts/accountsList"
import AccountDetail from "../accounts/accountDetail"
import PrivateRoute from "../../common/PrivateRoute"
import ClientCreate from "./clientCreate"
import ClientDetail from "./clientDetail"

class ClientsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path='/clients' component={ClientsList}/>
                    <PrivateRoute exact path='/clients/create' component={ClientCreate}/>
                    <PrivateRoute path='/clients/:id' component={ClientDetail}/>
                </Switch>
            </MainContainer>
        )
    }
}

export default ClientsPage