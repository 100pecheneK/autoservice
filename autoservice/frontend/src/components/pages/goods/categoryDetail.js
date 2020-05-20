import React, {Component} from 'react'
import Header from "../../header"
import CategoryForm from "./categoryForm"

import {editCategory, getCategory} from "../../../actions/goods"
import {connect} from "react-redux";


class CategoryDetail extends Component {
    componentDidMount() {
        this.props.getCategory(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editCategory(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <>
                <Header title={'Категория товара'} to={'/goods/category'} create={false} edit={true}/>
                <CategoryForm
                    initialValues={this.props.categories}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        categories: state.goods.categories[ownProps.match.params.id]
    })
}

export default connect(
    mapStateToProps,
    {getCategory, editCategory}
)(CategoryDetail)