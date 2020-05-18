import React, {Component} from 'react'
import {connect} from "react-redux"
import Item,{Button, Divider} from "semantic-ui-react"

import history from "../../../history"
import Header from "../../header"
import MainContainer from "../../mainContainer";

class GoodsList extends Component {

    // componentDidMount() {
    //     this.props.getAccounts()
    // }

    // rowClickHandler = id => history.push(`/goods/${id}`)
    // deleteHandler = id => this.props.deleteAccount(id)

    render() {


        return (
            <>
                <Header title={'Товары'} to={'/goods/create'}/>
                Просмотр
            </>
        )
    }
}

// const mapStateToProps = state => {
//     const stateToProps = {
//         accounts: Object.values(state.accounts),
//     }
//     if (state.auth.user){
//         stateToProps.userId = state.auth.user.id
//     }
//     return stateToProps
// }


export default connect(
    null,
    null
)(GoodsList)