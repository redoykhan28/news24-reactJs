import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaWhatsapp, FaLock } from 'react-icons/fa';
import BrandSlider from '../../../BrandSlider/BrandSlider';
import { authContext } from '../../../Context/AuthContext';
import './RightNav.css'


const RightNav = () => {

    const { handleGoogle } = useContext(authContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGooglebtn = () => {

        handleGoogle(googleProvider)
            .then(res => {

                const user = res.user
                console.log(user)
            })
            .catch(err => console.log(err))

    }
    return (
        <div className=' rightNav  mt-4'>
            <div className='my-4'>
                <div className="d-grid w-100  gap-2 col-6 mx-auto">
                    <button onClick={handleGooglebtn} className="btn btn-outline-danger" type="button"><FaGoogle /> Google</button>
                    <button className="btn btn-outline-primary" type="button"><FaFacebook /> Facebook</button>
                </div>
            </div>
            <div>
                <p>Find us on</p>
                <ul className="list-group">
                    <li className="btn list-group-item text-start"><FaFacebook /> Facebook</li>
                    <li className="btn list-group-item text-start"> <FaTwitter /> Twitter</li>
                    <li className="btn list-group-item text-start"> <FaWhatsapp /> Whatsapp</li>
                    <li className="btn list-group-item text-start"> <FaLock /> Privecy Policy</li>
                </ul>
            </div>
            <div className='my-5'>
                <BrandSlider></BrandSlider>
            </div>

        </div>
    );
};

export default RightNav;