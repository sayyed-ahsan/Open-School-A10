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
                <div class="container-fluid">
                    <Link className='logo mx-5' to={'/'}><h1><AiFillRead></AiFillRead> Open Mind School</h1></Link>
                    <form class="d-flex" role="search">
                        <Link className='header-links mx-3' to={'/'}>Home</Link>
                        <Link className='header-links mx-3' to={'/course'}>Courses</Link>
                        <Link className='header-links mx-3' to={'/blog'}>Blog</Link>
                        {
                            user ?
                                <>
                                    {user.photoURL === null ?
                                        <FaUserCircle className='my-auto'></FaUserCircle>
                                        : <img className='profile-img' src={user.photoURL} alt="" />
                                    }
                                    <button className='button-signout' onClick={handleSignOut}>Sign Out</button>
                                </>
                                :
                                <>
                                    <Link className='header-links mx-3' to={'/login'}>Login</Link>
                                    <Link className='header-links mx-3' to={'/signup'}>Signup</Link>
                                </>
                        }
                    </form>
                </div>
            </nav>

        </div>
    );
};

export default Header;