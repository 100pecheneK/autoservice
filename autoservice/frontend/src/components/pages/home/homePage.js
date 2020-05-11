import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"



class HomePage extends Component {
    render() {
        return (
            <MainContainer>
                <Header title={'Главная'}/>
            </MainContainer>
        )
    }
}

export default HomePage