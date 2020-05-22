import React, {Component, useEffect, useState} from 'react'
import {connect} from "react-redux"

import history from "../../../history"
import Header from "../../header"
import TableExample from "../../table/table"
import {Field, formValueSelector, reduxForm} from "redux-form"
import {renderSearchField} from "../../fields/fields"

import {
    getGoods,
    deleteGood,
    addCategory,
    getCategories,
    searchGoods,
    resetFilters, clearFilter, addFilter
} from "../../../actions/goods"




const SearchLine = (props) => {
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (!searchValue) {
            props.getGoods()
        }
    }, [searchValue])

    const searchSubmit = e => {
        if (searchValue) {
            props.searchGoods(searchValue)
        }
    }
    const searchEnterHandler = e => {
        if (e.key === 'Enter') {
            searchSubmit(e)
        }
    }
    const searchClickHandler = e => {
        searchSubmit(e)
    }
    return (
        <div className="ui icon input">
            <input type="text" placeholder="id или название" value={searchValue}
                   onChange={e => setSearchValue(e.target.value)}
                   onKeyPress={searchEnterHandler}/>
            <i aria-hidden="true"
               className="search circular inverted link icon"
               onClick={searchClickHandler}
            />
        </div>
    )
}

class GoodsList extends Component {

    componentDidMount() {
        this.props.getGoods()
        this.props.getCategories()
    }

    rowClickHandler = id => history.push(`/goods/${id}`)
    deleteHandler = id => this.props.deleteGood(id)
    selectCategoryHandler = id => this.props.getGoods(id)


    render() {
        const tableData = this.props.goods
        const fields = ['id', 'Наименование', 'Описание', 'Количество', 'Цена', 'Категория']
        return (
            <>
                <Header
                    title={'Товары'}
                    to={'/goods/create'}
                    subButton={{
                        to: '/goods/category',
                        title: 'Категории'
                    }}
                />
                <div style={{display: 'flex'}}>
                    <Field name='searchQuery' component={renderSearchField}
                           change={this.selectCategoryHandler} label='Категория' placeholder={'Категория'}
                           options={this.props.categories}/>
                    <SearchLine searchGoods={this.props.searchGoods} getGoods={this.selectCategoryHandler}/>
                </div>
                <TableExample
                    fields={fields}
                    data={tableData}
                    rowClickHandler={this.rowClickHandler}
                    deleteHandler={this.deleteHandler}
                />
            </>
        )
    }
}

GoodsList = reduxForm({
    form: 'goodsListForm',
    touchOnBlur: false
})(GoodsList)

// с помощью этого можно как-то достать значения формы см сюда https://redux-form.com/6.0.0-rc.3/examples/selectingformvalues/
const selector = formValueSelector('goodsListForm')

const mapStateToProps = state => {
    return {
        goods: Object.values(state.goods.goods),
        categories: Object.values(state.goods.categories),
        activeCategoryValue: selector(state, 'activeCategory')
    }
}


export default connect(mapStateToProps,
    {
        getGoods,
        deleteGood,
        addCategory,
        getCategories,
        searchGoods,
        addFilter,
        clearFilter,
        resetFilters,
    }
)(GoodsList)