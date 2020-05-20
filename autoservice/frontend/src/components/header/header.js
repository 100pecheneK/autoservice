import React from 'react'
import {Menu, Button} from "semantic-ui-react"
import {Link} from "react-router-dom"

const style = {
    padding:'0.5 em'
}

const Header = ({title, create = true, to, subButton=false}) => (
    <Menu inverted>
        <Menu.Item
            name={title}
            active
            style={style}
        />
        {subButton &&
        <Menu.Item  style={style}>
            <Link  to={subButton.to}>
                <Button basic inverted color={'olive'}>{subButton.title}</Button>
            </Link>
        </Menu.Item>
        }
        {to &&
        <Menu.Menu position='right'  >
            <Menu.Item style={style}>
                <Link to={to}>
                    <Button color={`${create ? 'green' : 'blue'}`}>
                        {create ? 'Создать' : 'Назад'}
                    </Button>
                </Link>
            </Menu.Item>

        </Menu.Menu>
        }
    </Menu>
)

export default Header