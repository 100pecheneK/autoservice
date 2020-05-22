import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addGood} from "../../../actions/goods"

import Header from "../../header"
import GoodsForm from "./goodsForm"


class GoodsCreate extends Component {

    onSubmit = formValues => {
        this.props.addGood(formValues)
    }


    render() {
        return (
            <>
                <Header title={'Добавление товара'} to={'/goods'} create={false}/>
                <GoodsForm  destroyOnUnmount={false}
                            onSubmit={this.onSubmit}/>
            </>
        )
    }
}

export default connect(
    null,
    {addGood}
)(GoodsCreate)
