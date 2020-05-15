import {Icon, Menu, Sidebar} from "semantic-ui-react"
import {Link} from "react-router-dom"
import React, {Component} from "react"
import store from "../../store"
import {logout} from "../../actions/auth"
import {connect} from "react-redux"

class VerticalSidebar extends Component {

    render() {

        return (
            <Sidebar
                as={Menu}
                inverted
                vertical
                visible={true}
                width='thin'
            >
                <Menu.Item as={Link} to='/'>
                    <Icon name='home'/>
                    Главная
                </Menu.Item>
                {this.props.isSuperuser &&
                <Menu.Item as={Link} to='/accounts'>
                    <Icon name='address book'/>
                    Аккаунты
                </Menu.Item>}
                <Menu.Item as={Link} to='/clients'>
                    <Icon name='user'/>
                    Клиенты
                </Menu.Item>
                <Menu.Item as={Link} to='/goods'>
                    <Icon name='shop'/>
                    Товары
                </Menu.Item>
                <Menu.Item as={Link} to='/orders'>
                    <Icon name='clipboard check'/>
                    Заказы
                </Menu.Item>
                <Menu.Item as='a' onClick={() => store.dispatch(logout())}>
                    <Icon name='log out'/>
                    Выход
                </Menu.Item>
            </Sidebar>
        )
    }
}

const mapDispatchToProps = state => ({
    isSuperuser: state.auth.isSuperuser
})

export default connect(
    mapDispatchToProps,
    null
)(VerticalSidebar)