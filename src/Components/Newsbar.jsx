import React, { useEffect, useState } from 'react'
import Newscard from '../Cards/Newscard';

const Newsbar = () => {
    const [news, setNews] = useState([]);

    const getNews = async () => {
        try {
            const res = await fetch('https://saurav.tech/NewsAPI/everything/cnn.json');
            if (!res.ok) {
                console.error("HTTP error! status: ", res.status);
                return;
            }
            const data = await res.json();
            setNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className='flex justify-between flex-wrap'>
            {
                news.map((newss, index) => {
                    return (
                        <div className='flex justify-between items-center w-fit ' key={index}>
                            <Newscard newss={newss} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Newsbar