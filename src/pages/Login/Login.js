import React from 'react';
import './Login.css'


const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        console.log('submit', email, password)
        form.reset();
    }

    return (
        <div className='login-body'>
            <div class="box">
                <form class="form" onSubmit={handleSubmit}>

                    <h2>Sign in </h2>
                    <div class="inputbox">
                        <input type="email" name='email' required="required" />
                        <span>Email </span>
                        <i></i>
                    </div>

                    <div class="inputbox">
                        <input type="password" name='password' required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>

                    <div class="links">
                        <a>Forgot Password</a>
                        <a>Signup</a>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>

        </div>
    );
};

export default Login;