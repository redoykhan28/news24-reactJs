import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/newsCard/NewsCard';

const Catagory = () => {
    const catagory = useLoaderData();
    console.log(catagory)
    return (
        <div>
            <h4 className='my-5'>Total news in this category: {catagory.length}</h4>

            <div>
                {
                    catagory.map(cat => <NewsCard keys={cat._id} news={cat}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Catagory;