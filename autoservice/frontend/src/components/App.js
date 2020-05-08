import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'

import LoginForm from "./auth"
import history from '../history'
import {Provider} from 'react-redux'
import store from '../store'
import PrivateRoute from "./common/PrivateRoute"

import {loadUser, logout} from "../actions/auth"


class Hello extends Component {
    render() {
        return (
            <button onClick={()=>store.dispatch(logout())}>EXIT</button>
        );
    }
}

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path='/' component={Hello}/>
                        <Route exact path='/login' component={LoginForm}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(<App/>, document.querySelector('#app'));
