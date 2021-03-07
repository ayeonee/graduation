import React from 'react';
import Store from '../Store/store';
import Login from './Login';

function LoginContainer(){
    return (
    <Store.Consumer>
        {(value)=>(
            <Login {...value.onLogin}/>
        )
        }
    </Store.Consumer>
    )
} 

export default LoginContainer;