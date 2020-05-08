import {Icon, Menu, Sidebar} from "semantic-ui-react"
import {Link} from "react-router-dom"
import React from "react"
import store from "../../store"
import {logout} from "../../actions/auth"

const VerticalSidebar = () => (
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
        <Menu.Item as={Link} to='/accounts'>
            <Icon name='home'/>
            Аккаунты
        </Menu.Item>
        <Menu.Item as={Link} to='/clients'>
            <Icon name='home'/>
            Клиенты
        </Menu.Item>
        <Menu.Item as={Link} to='/goods'>
            <Icon name='home'/>
            Товары
        </Menu.Item>
        <Menu.Item as={Link} to='/orders'>
            <Icon name='home'/>
            Заказы
        </Menu.Item>
        <Menu.Item as='a' onClick={() => store.dispatch(logout())}>
            <Icon name='home'/>
            Выход
        </Menu.Item>
    </Sidebar>
)

export default VerticalSidebar