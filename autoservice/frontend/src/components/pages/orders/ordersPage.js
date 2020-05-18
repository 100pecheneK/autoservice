import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import {Switch} from "react-router-dom"
import PrivateRoute from "../../common/PrivateRoute"
import OrderCreate from "./orderCreate"
import OrderDetail from "./orderDetail"
import OrdersList from "./ordersList"

class OrdersPage extends Component {
    render() {
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path='/orders' component={OrdersList}/>
                    <PrivateRoute exact path='/orders/create' component={OrderCreate}/>
                    <PrivateRoute path='/orders/:id' component={OrderDetail}/>
                </Switch>
            </MainContainer>
        )
    }
}

export default OrdersPage