import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../actions/auth';


import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'

class LoginForm extends Component {
    renderField = ({input, label, type, meta: {touched, error}}) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <Form.Input fluid type={type} icon='user' iconPosition='left' placeholder={label} {...input}/>
                {touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
            </div>
        );
    };

    hiddenField = ({type, meta: {error}}) => {
        return (
            <div className='field'>
                <input type={type}/>
                {error && <div className='ui red message'>{error}</div>}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.login(formValues);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/'/>;
        }
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' color='teal' textAlign='center'>
                        <Image src='https://react.semantic-ui.com/logo.png'/> Вход
                    </Header>
                    <Form size='large' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Segment stacked>
                            <Field
                                name='username'
                                type='text'
                                component={this.renderField}
                                label='Логин'
                            />
                            <Field
                                name='password'
                                type='password'
                                component={this.renderField}
                                label='Пароль'
                            />
                            <Field
                                name='non_field_errors'
                                type='hidden'
                                component={this.hiddenField}
                            />

                            <Button color='teal' fluid size='large'>
                                Войти
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

LoginForm = connect(
    mapStateToProps,
    {login}
)(LoginForm);

export default reduxForm({
    form: 'loginForm'
})(LoginForm);

