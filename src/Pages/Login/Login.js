import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';

const Login = () => {
    const { hanldeLogin } = useContext(authContext)

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const btnHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        // console.log(email, password)

        hanldeLogin(email, password)
            .then(res => {

                const user = res.user
                console.log(user)
                setSuccess('Login Successfull')
                navigate(from, { replaced: true })

            })
            .catch(err => {

                console.log(err)
                setError(err.message);
                setError('');
                form.reset();
            })



    }
    return (
        <div>
            <h4 className='my-4 text-center'>Login</h4>
            <form onSubmit={btnHandler} className='w-75 mb-5 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required />
                </div>
                <p><small className='text-danger'>{error}</small></p>
                <p><small className='text-success'>{success}</small></p>

                <button type="submit" className="btn btn-outline-success">Login</button>
            </form>
        </div>
    );
};

export default Login;