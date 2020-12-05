import React from "react";

export const Registration = () => {
    return (
        <div>
            <h1>Registration</h1>
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
                <div>
                    <span>Repeat your password</span><br/>
                    <input type="password" />
                </div>
                <button>Registration</button>
            </div>
        </div>
    )
}