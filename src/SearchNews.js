import React, { useState } from 'react';
import './NewsCard.css';

const SearchNews = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 12;

    const searchArticles = () => {
        if (!query) {
            setError("Please enter a search term.");
            return;
        }

        setError(null); 
        setLoading(true); 
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=popularity&apiKey=43b02cdecba94daf84807b9d04af725e`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('API response:', data); 
                if (data.articles && data.articles.length > 0) {
                    setArticles(data.articles); 
                } else {
                    setError("No articles found for this search term.");
                    setArticles([]);
                }
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching data:', error); 
                setError(error.message);
                setLoading(false); 
            });
    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Pagination logic
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="search-container1">
            <h1>Search News</h1>
            <input
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a search term..."
            />
            <button className="search-button" onClick={searchArticles}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}

            <div className="news-container">
                <div className="card-grid">
                    {currentArticles.map((article, index) => (
                        <div key={index} className="news-card">
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="news-card-image"
                                />
                            )}
                            <div className="news-card-content">
                                <h2 className="news-card-title">{article.title}</h2>
                                <p className="news-card-description">{article.description}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-btn btn-2"
                                >
                                    Read More!
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchNews;
