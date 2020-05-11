import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
// import TableExamplePagination from "../../table/table"

class GoodsPage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Товары'}/>
                {/*<TableExamplePagination/>*/}
            </MainContainer>
        )
    }
}

export default GoodsPage