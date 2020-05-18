import React, {Component} from 'react'
import {connect} from 'react-redux'


import Header from "../../header"
import GoodsForm from "./goodsForm";


class GoodsCreate extends Component {

    // onSubmit = formValues => {
    //     this.props.addAccount(formValues)
    // }



    render() {
        return (
            <>
                <Header title={'Создание клиента'} to={'/goods'} create={false}/>
                <GoodsForm/>
            </>
        )
    }
}

export default connect(
    null,
    null
)(GoodsCreate)
