import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import {Provider} from 'react-redux';
import store from '../store';

import 'semantic-ui-css/semantic.min.css'

class Hello extends Component {
    render() {
        return (
            <h1>Hello!!!</h1>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='' component={Hello}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
