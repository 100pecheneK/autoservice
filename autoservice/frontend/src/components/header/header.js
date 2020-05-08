import React from 'react'
import {Segment} from "semantic-ui-react"

const Header = ({title}) => (
    <Segment inverted>
        {title}
    </Segment>
)

export default Header