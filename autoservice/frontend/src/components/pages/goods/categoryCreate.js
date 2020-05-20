import React, {Component} from 'react'
import {connect} from 'react-redux'

import Header from "../../header"
import CategoryForm from "./categoryForm"
import {addCategory} from "../../../actions/goods"

class CategoryCreate extends Component {
    onSubmit = formValues => {
        this.props.addCategory(formValues)
    }

    render() {
        return (
            <>
                <Header title={'Добавление категории'} to={'/goods/category'} create={false}/>
                <CategoryForm  destroyOnUnmount={false}
                            onSubmit={this.onSubmit}/>
            </>
        )
    }
}

export default connect(null, {addCategory})(CategoryCreate)