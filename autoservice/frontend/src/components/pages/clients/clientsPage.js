import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import ClientsList from "./ClientsList"
import {Switch} from "react-router-dom"
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