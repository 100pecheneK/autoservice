import VerticalSidebar from "../sidebar"
import {Segment, Sidebar} from "semantic-ui-react"
import {Router} from "react-router-dom"
import React, {useState} from "react"
import PropTypes from "prop-types"

const MainContainer = ({children}) => (
    <React.Fragment>
        <VerticalSidebar/>
        <Sidebar.Pusher>
            <Segment basic>
                {children}
            </Segment>
        </Sidebar.Pusher>
    </React.Fragment>
)


MainContainer.propTypes = {
    content: PropTypes.node
}

export default MainContainer