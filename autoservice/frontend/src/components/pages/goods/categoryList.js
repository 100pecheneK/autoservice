import React, {Component} from 'react'

import {getCategories, editCategory, deleteCategory, addCategory} from "../../../actions/goods"
import {connect} from "react-redux"

import Header from "../../header";
import TableExample from "../../table/table";
import history from "../../../history";


class CategoryList extends Component {

    onSubmit = formValues => {
        this.props.addCategory(formValues)
    }


    componentDidMount() {
        this.props.getCategories()
    }

    rowClickHandler = id => history.push(`/goods/category/${id}`)
    deleteHandler = id => this.props.deleteCategory(id)

    render() {
        const fields = ['id', 'Наименование']
        return (
            <>
                <Header
                    title={'Категории'}
                    to={'/goods/category/create'}
                    subButton={{
                        to: '/goods',
                        title: 'Товары'
                    }}
                />
                <TableExample
                    fields={fields}
                    data={this.props.categories}
                    rowClickHandler={this.rowClickHandler}
                    deleteHandler={this.deleteHandler}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: Object.values(state.goods.categories)
    }
}



export default connect(mapStateToProps, {getCategories, deleteCategory, editCategory, addCategory})(CategoryList)