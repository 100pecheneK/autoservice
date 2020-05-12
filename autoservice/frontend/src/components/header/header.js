import React from 'react'
import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

const Header = ({title, create = true, to}) => (
    <Menu inverted>
        <Menu.Item
            name={title}
        />
        {to &&
        <Menu.Menu position='right'>
            <Menu.Item>
                <Link className={`ui button ${create ? 'green' : 'blue'}`} to={to}>{create ? 'Создать' : 'Назад'}</Link>
            </Menu.Item>
        </Menu.Menu>
        }
    </Menu>
)

export default Header