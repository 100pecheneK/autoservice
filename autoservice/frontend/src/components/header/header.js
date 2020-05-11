import React from 'react'
import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

const Header = ({title, linkName='Создать', to}) => (
    <Menu inverted>
        <Menu.Item
            name={title}
        />
        {to &&
        <Menu.Menu position='right'>
            <Menu.Item
                name={linkName}
                as={Link}
                to={to}
            />
        </Menu.Menu>
        }
    </Menu>
)

export default Header