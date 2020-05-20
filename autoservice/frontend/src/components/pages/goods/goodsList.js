import React, {Component, useEffect, useState} from 'react'
import {connect} from "react-redux"

import history from "../../../history"
import Header from "../../header"
import TableExample from "../../table/table"
import {Button, Icon, Dropdown, Form} from "semantic-ui-react"
import {Field, formValueSelector, reduxForm} from "redux-form"
import {renderSearchField} from "../../fields/fields"

import {getGoods, deleteGood, addCategory, getCategories, searchGoods, sortGoods} from "../../../actions/goods"

const FilterLine = (props) => {
    const [filterValue, setFilterValue] = useState('')
    const [asc, setAsc] = useState(true)
    const [options] = useState([
            {key: 'price', value: 'price', text: 'Цена'},
            {key: 'quantity', value: 'quantity', text: 'Количество'},
        ]
    )

    const changeHandler = (filterValue, asc) => {
        setFilterValue(filterValue)
        props.sortGoods(filterValue, asc)
    }

    return (
        <div>
            {/*TODO: Не знаю, как вытащить value ||| P.S. с селектом та же шляпа*/}
            {/*<Dropdown*/}
            {/*    onChange={(e) => changeHandler(e)}*/}
            {/*    placeholder='Сортировать по'*/}
            {/*    selection*/}
            {/*    value = {filterValue}*/}
            {/*    options={options}*/}
            {/*/>*/}

            <Form>
                <select name="filter" id="filter" onChange={(e)=>changeHandler(e.target.value, asc)}>
                    <option/>
                    {options.map(option => (
                        <option value={option.value} key={option.key}>{option.text}</option>
                    ))}

                </select>
            </Form>


            {/*TODO: при выборе опции первые 2 щелчка отправляются с одним значением => это ломает всю фильрацию*/}
            <Button onClick={() => {
                setAsc(!asc)
                changeHandler(filterValue, !asc)
            }}
            >
                <Icon disabled name={`${asc ? 'sort amount up' : 'sort amount down'}`}/>
            </Button>

        </div>

    )
}


const SearchLine = (props) => {
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        //TODO: добавить useCallback, если что
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
            <input type="text" placeholder="Поиск по id и названию" value={searchValue}
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
                <div>
                    <Field name='searchQuery' component={renderSearchField}
                           change={this.selectCategoryHandler} label='Категория' placeholder={'Категория'}
                           options={this.props.categories}/>

                    <SearchLine searchGoods={this.props.searchGoods} getGoods={this.selectCategoryHandler}/>

                </div>
                <FilterLine sortGoods={this.props.sortGoods}/>
                <TableExample
                    fields={fields}
                    data={this.props.goods}
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


export default connect(mapStateToProps, {
    getGoods,
    deleteGood,
    addCategory,
    getCategories,
    searchGoods,
    sortGoods
})(GoodsList)