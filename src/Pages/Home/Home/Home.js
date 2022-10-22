import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/newsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData()
    // console.log(allNews)
    return (
        <div>
            <h4 className='my-5'>All News: {allNews.length}</h4>
            <div>
                {
                    allNews.map(news => <NewsCard keys={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Home;