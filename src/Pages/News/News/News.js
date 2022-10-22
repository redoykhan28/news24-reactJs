import { getByTitle } from '@testing-library/react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const newsDetails = useLoaderData();
    console.log(newsDetails)
    const { title, image_url, details, category_id } = newsDetails
    return (
        <div>
            <div className="card w-75 mx-auto p-3 rounded-3 shadow mb-4">
                <img src={image_url} className="card-img-top img-fluid" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{details}</p>
                    <Link to={`/catagory/${category_id}`} className="btn btn-primary">Go to Categories</Link>
                </div>
            </div>
        </div>
    );
};

export default News;