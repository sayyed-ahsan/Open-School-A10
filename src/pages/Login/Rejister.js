import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Rejister.css'

const Rejister = () => {

    const { creatUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        creatUser(email, password).then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
            .catch(e => {
                console.error(e)
                form.reset();
            });


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
                        <a href="#">have an account</a>
                    </div>
                    <input type="submit" value="Signup" />
                </form>
            </div>

        </div>
    );
};

export default Rejister;