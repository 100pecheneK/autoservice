import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
import TableExamplePagination from "../../table/table"



class HomePage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Главная'}/>
                <TableExamplePagination/>
            </MainContainer>
        )
    }
}

export default HomePage