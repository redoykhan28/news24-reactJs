import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {

    const [Catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news_catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])

    return (
        <div className="leftNav mt-4">
            <h4 className='text-start mb-4'>All Catagories</h4>
            {
                Catagories.map(catagory => <p key={catagory.id}>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'text-secondary text-decoration-none fw-bold'} to={`/catagory/${catagory.id}`}> {catagory.name}</NavLink>
                </p>)
            }
        </div >
    );
};

export default LeftNav;