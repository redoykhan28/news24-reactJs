import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(authContext);
    const location = useLocation();

    if (loader) {

        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (!user) {

        return <Navigate to='/login' state={{ from: location }} replaced></Navigate>
    }

    else {

        return children
    }


};

export default PrivateRoute;