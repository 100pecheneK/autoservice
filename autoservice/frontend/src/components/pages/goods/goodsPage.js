import React, {Component} from 'react'
import {Switch} from "react-router-dom"

import MainContainer from "../../mainContainer"
import Header from "../../header"
import PrivateRoute from "../../common/PrivateRoute"

import GoodsList from "./goodsList"
import GoodsCreate from "./goodsCreate"




class GoodsPage extends Component {



    render() {
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path='/goods' component={GoodsList}/>
                    <PrivateRoute exact path='/goods/create' component={GoodsCreate}/>
                    {/*<PrivateRoute path='/goods/:id' component={ClientDetail}/>*/}
                </Switch>

            </MainContainer>
        )
    }
}

export default GoodsPage






