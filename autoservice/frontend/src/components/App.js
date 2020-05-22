import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
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
    OrdersPage,
} from './pages'


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute admin path='/accounts' component={AccountsPage}/>
                        <PrivateRoute path='/clients' component={ClientsPage}/>
                        <PrivateRoute path='/goods' component={GoodsPage}/>
                        <PrivateRoute exact path='/' component={HomePage}/>
                        <PrivateRoute path='/orders' component={OrdersPage}/>
                        <Route exact path='/login' component={LoginForm}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'))
