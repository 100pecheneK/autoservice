import React, {Component} from 'react'
import {Switch} from "react-router-dom"

import MainContainer from "../../mainContainer"
import Header from "../../header"
import PrivateRoute from "../../common/PrivateRoute"

import GoodsList from "./goodsList"
import GoodsCreate from "./goodsCreate"
import GoodsDetail from "./goodsDetail"

import CategoryList from "./categoryList"
import CategoryCreate from "./categoryCreate"
import CategoryDetail from "./categoryDetail"

class GoodsPage extends Component {



    render() {
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path='/goods' component={GoodsList}/>
                    <PrivateRoute exact path='/goods/category' component={CategoryList}/>
                    <PrivateRoute exact path='/goods/category/create' component={CategoryCreate}/>
                    <PrivateRoute exact path='/goods/create' component={GoodsCreate}/>
                    <PrivateRoute path='/goods/category/:id' component={CategoryDetail}/>
                    <PrivateRoute path='/goods/:id' component={GoodsDetail}/>

                </Switch>

            </MainContainer>
        )
    }
}

export default GoodsPage






