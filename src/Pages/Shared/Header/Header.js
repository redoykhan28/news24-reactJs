import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext';
import './Header.css'
import { FaUserTie } from 'react-icons/fa';

const Header = () => {
    const { handleSignOut, user } = useContext(authContext);
    const handleLogOut = () => {

        handleSignOut()
            .then(() => { })
    }
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg bg-white shadow fixed-top py-3">
                <div className="container d-flex  justify-content-between align-items-center">
                    <div className="f-postion">
                        <Link className="navbar-brand" to="/">
                            <button className="btn btn-primary">Times24</button>
                            <span className="mx-1 text-primary">Portal</span>
                        </Link>
                    </div>
                    <div className="s-position">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {

                                    user ?
                                        <div className='d-flex align-items-center mt-3 mt-lg-0'>
                                            <Link className='text-decoration-none' to='/profile'>
                                                {
                                                    user.photoURL === null ? <span className='emogi rounded-circle'><FaUserTie></FaUserTie></span>
                                                        :
                                                        <img className='img-fluid rounded-circle p-img' src={user.photoURL} alt="" />
                                                }
                                                <span className='mx-2  text-muted'>{user.displayName}</span>
                                            </Link>
                                            <button onClick={handleLogOut} className='btn btn-secondary mx-2'>SignOut</button>
                                        </div>
                                        :
                                        <>
                                            <Link to='/login' className='btn btn-outline-success mx-2'>Login</Link>
                                            <Link to='/registration' className='btn btn-outline-danger'>SignUp</Link>
                                        </>
                                }




                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;