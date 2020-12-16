import React from "react";
import { Field, reduxForm } from 'redux-form'

export const Login = (props: any) => {
    const {handleSubmit} = props
    //debugger
    return(
        <div>
            <h1>Login</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Enter you email</span><br/>
                    <Field name='email' component='input' type="text"/>
                </div>
                <div>
                    <span>Enter you password</span><br/>
                    <Field name='password' component='input' type="password"/>
                </div>
                <div>
                    <span>Remember me</span><br/>
                    <Field name='rememberMe' component='input' type="checkbox"/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(Login)