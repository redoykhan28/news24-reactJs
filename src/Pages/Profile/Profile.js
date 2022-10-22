import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import './Profile.css'


const Profile = () => {
    const { user, displayUserName } = useContext(authContext)
    const [name, setName] = useState(user.displayName)
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)

    const btnHandler = (e) => {
        e.preventDefault();
        handleProfile(name, photoUrl);
        toast.success('Profile Updated')
        e.target.reset();
    }

    const nameUpdate = (e) => {

        setName(e.target.value)
    }

    const photoUpdate = (e) => {
        setPhotoUrl(e.target.value)
    }

    const handleProfile = (name, photoUrl) => {

        displayUserName(name, photoUrl)
            .then(() => console.log('Pfofile updated:', name, photoUrl))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h4 className='text-center my-4 mb-5'>Welcome to your profile {name}</h4>
            <div className="card cd">
                <img src={photoUrl} className="card-img-top rounded-circle w-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center"> <b>Email:</b> {user.email}</p>
                </div>
            </div>

            <h4 className='mb-4 mt-5 text-center'>Update Your Profile</h4>

            <form onSubmit={btnHandler} className='w-75 mb-5 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input readOnly defaultValue={user.email} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Your Name</label>
                    <input onChange={nameUpdate} defaultValue={name} type="text" name='name' className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder='FullName' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail3" className="form-label">Photo URL</label>
                    <input onChange={photoUpdate} defaultValue={photoUrl} type="text" name='email' className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder='PhotoUrl' required />
                </div>


                <button type="submit" className="btn btn-info text-white">Update</button>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    );
};

export default Profile;