import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsIndia from './NewsIndia';
import NewsUS from './NewsUS';
import SearchNews from './SearchNews'; 
import './App.css';

const Home = () => {
    return (
        <div className="home-container">
            <p className="app-description">
                Explore the latest and most comprehensive news coverage from around the globe with World Wide News Hub. Our platform brings you real-time updates and detailed stories from trusted sources in India and the United States. Whether you're interested in breaking news, in-depth analysis, or trending topics, we've got you covered.
            </p>
            <p className="app-description">
                <strong>Key Features:</strong><br />
                - <strong>Up-to-Date News:</strong> Stay informed with the latest headlines and news articles from major sources.<br />
                - <strong>Search Functionality:</strong> Easily find news on specific topics or keywords with our intuitive search feature.<br />
                - <strong>User-Friendly Navigation:</strong> Enjoy seamless browsing through a clean and responsive interface.<br />
                - <strong>Dynamic Updates:</strong> Get real-time updates on breaking news and important stories as they unfold.<br />
            </p>
            <p className="app-description">
                At World Wide News Hub, we are committed to delivering accurate, timely, and relevant news to keep you connected with what's happening around the world. Dive in to discover more and stay informed with our comprehensive news coverage!
            </p>
            <div className="social-media-links">
                <h2>Reach me:</h2>
                <a href="https://x.com/_AshutoshJha" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                <a href="https://www.instagram.com/ashuutoshjha/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                <a href="https://www.linkedin.com/in/ashutosh-jha-230750270/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
        </div>
    );
};

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <div className="app-container">
                <h1 className="app-title">NEWS</h1>
                <nav className="navbar">
                    <span className="menu-icon" onClick={toggleMenu}>☰</span>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/india-news" className="nav-link">India News</Link>
                        </li>
                        <li>
                            <Link to="/us-news" className="nav-link">US News</Link>
                        </li>
                        <li>
                            <Link to="/search-news" className="nav-link">Search News</Link>
                        </li>
                    </ul>
                </nav>

                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/india-news" element={<NewsIndia />} />
                        <Route path="/us-news" element={<NewsUS />} />
                        <Route path="/search-news" element={<SearchNews />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
