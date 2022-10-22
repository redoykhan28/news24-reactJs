import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';


const Registration = () => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const { handleSignUp, displayUserName, handleVarificationMail } = useContext(authContext)

    const btnHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let name = form.name.value
        let email = form.email.value;
        let photoUrl = form.photoUrl.value
        let password = form.password.value;
        let confirm = form.confirm.value

        // console.log(name, email, password, confirm)

        if (password !== confirm) {

            setError('Password mismatched!')
        }

        if (password.length < 8) {

            setError('Password Should be 8 lenght long!')
        }

        handleSignUp(email, password)
            .then(result => {

                const user = result.user
                console.log(user);
                setSuccess('SignUp Successfull')
                setError('')
                form.reset();
                handleMailVarification()
                handleProfile(name, photoUrl);
                setSuccess('')

            })
            .catch(err => {

                console.log(err)
            })

    }

    const handleProfile = (name, photoUrl) => {

        displayUserName(name, photoUrl)
            .then(() => console.log('Pfofile updated:', name, photoUrl))
            .catch(err => console.log(err))
    }

    const handleMailVarification = () => {

        handleVarificationMail()
            .then(() => {

                toast.success('A varification link send to youe email! please varify..');

            })

    }

    return (
        <div>
            <h4 className='my-4 text-center'>SignUp</h4>
            <form onSubmit={btnHandler} className='w-75 mb-5 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">UserName</label>
                    <input type="text" name='name' className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder='UserName' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">PhotoUrl</label>
                    <input type="text" name='photoUrl' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='PhotoUrl' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name='confirm' className="form-control" id="exampleInputPassword1" placeholder='Confirm Password' required />
                </div>
                <p><small className='text-danger'>{error}</small></p>
                <p><small className='text-success'>{success}</small></p>

                <button type="submit" className="btn btn-outline-danger">SignUp</button>
            </form>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Registration;