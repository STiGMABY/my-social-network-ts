import React from "react";

export const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <hr/>
            <div>
                <div>
                    <span>Enter you email</span><br/>
                    <input type="text"/>
                </div>
                <div>
                    <span>Enter you password</span><br/>
                    <input type="password"/>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}