import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
// import TableExamplePagination from "../../table/table"

class Orders extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Заказы'}/>
                {/*<TableExamplePagination/>*/}
            </MainContainer>
        )
    }
}
export default Orders