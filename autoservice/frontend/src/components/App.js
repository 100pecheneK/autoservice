import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import LoginForm from "./auth"
import history from '../history'
import {Provider} from 'react-redux'
import store from '../store'
import PrivateRoute from "./common/PrivateRoute"

import {loadUser} from "../actions/auth"
import './app.css'
import {
    AccountsPage,
    ClientsPage,
    GoodsPage,
    HomePage,
    Orders,
} from './pages'
import ClientCreate from "./pages/clients/clientCreate"
import ClientDetail from "./pages/clients/clientDetail"


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute path='/accounts' component={AccountsPage}/>
                        <PrivateRoute path='/clients' component={ClientsPage}/>
                        <PrivateRoute exact path='/goods' component={GoodsPage}/>
                        <PrivateRoute exact path='/' component={HomePage}/>
                        <PrivateRoute exact path='/orders' component={Orders}/>
                        <Route exact path='/login' component={LoginForm}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

const styleLink = document.createElement("link")
styleLink.rel = "stylesheet"
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"
document.head.appendChild(styleLink)

ReactDOM.render(<App/>, document.querySelector('#app'))
