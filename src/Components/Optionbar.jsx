import React, { useEffect, useState } from 'react'
import Newscard from '../Cards/Newscard';
const Optionbar = () => {
    const [value, setVal] = useState('Home');
    const [news, setNews] = useState([]);
    const getTheValue = (val) => {
        console.log(val)
        if (val === 'home') {
            window.location.reload();
        }
        else {
            setVal(val);
        }
    }
    const getNews = async () => {
        try {
            const res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${value}/in.json`);
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
    }, [value]);
    const getClassName = (category) => {
        return value === category
            ? 'bg-red-500 px-3 py-1 rounded-full text-xl cursor-pointer text-white'
            : ' px-3 py-1 rounded-full text-xl cursor-pointer text-black';
    };
    return (
        <div className='flex flex-col mt-5'>
            <div className='flex justify-around items-center mt-5 flex-wrap m-2 sm:m-0 md:m-0 lg:m-0 sm:flex-nowrap md:flex-nowrap lg:flex-nowrap'>
                <p onClick={() => getTheValue('home')} className={getClassName('Home')}>Home</p>
                <p onClick={() => getTheValue('sports')} className={getClassName('sports')}>Sports</p>
                <p onClick={() => getTheValue('business')} className={getClassName('business')}>Business</p>
                <p onClick={() => getTheValue('technology')} className={getClassName('technology')}>Technology</p>
                <p onClick={() => getTheValue('health')} className={getClassName('health')}>Health</p>
                <p onClick={() => getTheValue('science')} className={getClassName('science')}>Science</p>
                <p onClick={() => getTheValue('entertainment')} className={getClassName('entertainment')}>Entertainment</p>
            </div>
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
        </div >
    )
}

export default Optionbar