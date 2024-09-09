import React, { useState, useEffect } from 'react';
import './NewsCard.css'; 

const NewsUS = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 12;

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?' +
                    'country=us&' +
                    'apiKey=43b02cdecba94daf84807b9d04af725e';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    // Calculate current articles to display
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Pagination logic
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="news-container">
            <h1 className="title">Top Headlines in the US</h1>
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
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
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

export default NewsUS;
