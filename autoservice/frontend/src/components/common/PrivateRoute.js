import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({component: Component, auth, admin=false, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            if (auth.isLoading) {
                return <div>Loading...</div>
            } else if (!auth.token) {
                return <Redirect to='/login'/>
            }else if (admin && !auth.isSuperuser) {
                return <Redirect to='/'/>
            } else {
                return <Component {...props} />
            }
        }}
    />
)

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)