import React, {Component} from 'react'
import MainContainer from "../../mainContainer"
import Header from "../../header"
import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {Link} from "react-router-dom"


class HomePage extends Component {

    render() {

        const crudOper = 'Просмотр, редактирование, создание и удаление'
        const permissions = {
            admin: 'Только администраторы',
            staff: 'Сотрудники и администраторы'
        }
        const links = [
            {
                "title": "Аккаунты",
                "permission": permissions.admin,
                "description": "Просмотр, редактирование и создание сотрудников и администраторов",
                "list_link": "/accounts",
                "create_link": "/accounts/create",
                "icon": "user"
            },
            {
                "title": "Клиенты",
                "permission": permissions.staff,
                "description": `${crudOper} клиентов`,
                "list_link": "/clients",
                "create_link": "/clients/create",
                "icon": "address book"
            },
            {
                "title": "Товары",
                "permission": permissions.staff,
                "description": `${crudOper} товаров`,
                "list_link": "/goods",
                "create_link": "/goods/create",
                "icon": "shop"
            },
            {
                "title": "Категории",
                "permission": permissions.staff,
                "description": `${crudOper} категорий товаров`,
                "list_link": "/goods/category",
                "create_link": "/goods/category/create",
                "icon": "shop"
            },
            {
                "title": "Заказы",
                "permission": permissions.staff,
                "description": `${crudOper} заказов`,
                "list_link": "/orders",
                "create_link": "/orders/create",
                "icon": "clipboard check"
            },
        ]
        return (
            <MainContainer>
                <Header title={'Главная'}/>
                <Card.Group>
                    {links.map(({title, permission, description, list_link, create_link, icon}, i) => (
                        <Card key={i}>
                            <Card.Content>
                                <Card.Header>{title} <Icon name={icon}/></Card.Header>
                                <Card.Meta>{permission}</Card.Meta>
                                <Card.Description>
                                    {description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' as={Link} to={list_link}>
                                        Смотреть
                                    </Button>
                                    <Button basic color='green' as={Link} to={create_link}>
                                        Создать
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </MainContainer>
        )
    }
}

export default HomePage