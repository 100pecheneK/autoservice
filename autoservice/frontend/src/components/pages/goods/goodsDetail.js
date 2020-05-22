import React, {Component} from 'react'
import {connect} from "react-redux"

import {getGood, editGood} from "../../../actions/goods"
import Header from "../../header"
import GoodsForm from "./goodsForm";


class GoodsDetail extends Component {
    componentDidMount() {
        this.props.getGood(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editGood(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <>
                <Header title={'Категория'} to={'/goods'} create={false} edit={true}/>
                <GoodsForm
                    initialValues={this.props.goods}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        goods: state.goods.goods[ownProps.match.params.id]
    })
}

export default connect(
    mapStateToProps,
    {getGood, editGood}
)(GoodsDetail)