import React from 'react';
import './Rejister.css'

const Rejister = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        form.reset();
    }

    return (
        <div className='login-body'>
            <div class="box-sign">
                <form class="form" onSubmit={handleSubmit}>

                    <h2>Sign up </h2>
                    <div class="inputbox">
                        <input type="text" name='name' required="required" />
                        <span>Username </span>
                        <i></i>
                    </div>

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
                        <a href="#"> Forgot Password</a>
                        <a href="#">Signup</a>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>

        </div>
    );
};

export default Rejister;