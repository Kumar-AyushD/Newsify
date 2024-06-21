import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

const Newscard = ({ newss }) => {
    const isArticleInFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return favorites.some(fav => fav.url === newss.url);
    };

    const saveToFavorites = (article) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.some(fav => fav.url === article.url)) {
            favorites.push(article);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            toast.success('Article added to favorites!');
        } else {
            toast.error('Article is already in favorites!');
        }
    };

    return (
        <div>
            <Toaster />
            <div className="text-gray-600 body-font w-fit">
                <div className="container px-1 py-24 mx-auto w-fit">
                    <div className="p-4 w-[450] sm:w-[430] md:w-[470px] lg:w-[400px]">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={newss.urlToImage} alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">News</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{newss.title}</h1>
                                <p className="leading-relaxed mb-3">{newss.description}</p>
                                <div className="flex items-center flex-wrap">
                                    <a href={newss.url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More...
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <div onClick={() => saveToFavorites(newss)} className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        {isArticleInFavorites() ? <FaHeart color='red' size={24} /> : <FaRegHeart size={24} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newscard;
