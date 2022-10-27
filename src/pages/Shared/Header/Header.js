import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { AiFillRead } from 'react-icons/ai';

import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
    }


    return (
        <div>

            <nav class="navbar bg-light">
                <div class="container-fluid d-flex flex-column flex-md-row mx-md-4">
                    <Link className='logo site-name' to={'/'}><h2><AiFillRead></AiFillRead> Open School</h2></Link>
                    <form class="d-flex flex-column flex-sm-row justify-content-center align-items-center " role="search">
                        <Link className='header-links mx-3 n-link' to={'/'}>Home</Link>
                        <Link className='header-links mx-3 n-link' to={'/course'}>Courses</Link>
                        <Link className='header-links mx-3 n-link' to={'/blog'}>Blog</Link>
                        {
                            user ?
                                <>
                                    {user.photoURL === null ?
                                        <FaUserCircle className='my-auto'></FaUserCircle>
                                        :
                                        <div className='name-parent'>
                                            <img className='profile-img' src={user.photoURL} alt="" />
                                            <p className='name-p'>{user.displayName}</p>
                                        </div>
                                    }
                                    <Link className='header-links mx-3 n-link'><span onClick={handleSignOut}>Sign Out</span></Link>
                                </>
                                :
                                <>
                                    <Link className='header-links mx-3 n-link' to={'/login'}>Login</Link>
                                    <Link className='header-links mx-3 n-link' to={'/signup'}>Signup</Link>
                                </>

                        }

                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>

                    </form>

                </div>
            </nav>

        </div>
    );
};

export default Header;