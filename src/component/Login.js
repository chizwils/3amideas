import React, { Component } from 'react';

class Login extends Component {
    //state = {  }
    render() { 
        return ( 
            <div>
                <form>
                    <input placeholder='email' type='email'></input>
                    <input placeholder='password' type='password'></input>
                    <button>SignUp</button>
                    <button>Login</button>
                </form>
            </div>
         );
    }
}
 
export default Login;