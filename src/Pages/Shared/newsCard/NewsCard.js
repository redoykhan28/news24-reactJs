import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaEye, FaRegClipboard, FaShareAlt } from 'react-icons/fa';
import './NewsCard.css'

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, rating, total_view, author } = news

    return (
        <div className='my-5'>
            <div className="card text-center border-1 pb-2 rounded-3 shadow">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <div className='me-2'>
                            <img className='img-fluid author-image rounded-circle' src={author.img} alt="" />
                        </div>
                        <div>
                            <h5 className='p-0 m-0'>{author.name ? author.name : 'No Info'}</h5>
                            <small className='text-muted'>{author.published_date ? author.published_date : 'No published info'}</small>
                        </div>
                    </div>

                    <div>
                        <span className='mx-2'><FaRegClipboard></FaRegClipboard></span>
                        <span><FaShareAlt></FaShareAlt></span>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title my-3">{title}</h5>
                    <img className='img-fluid w-100' src={image_url} alt="" />
                    <p className="card-text text-start my-3">{details.slice(0, 200)}... <Link to={`/news/${_id}`}>see more</Link></p>
                </div>
                <div className="card-footer text-muted d-flex align-items-center justify-content-between">
                    <div>
                        <span><FaStar className='text-warning'></FaStar> {rating.number ? rating.number : 'No ratings'}</span>
                    </div>
                    <div>
                        <span><FaEye /> {total_view ? total_view : 'No View'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;