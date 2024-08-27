import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsIndia from './NewsIndia';
import NewsUS from './NewsUS';
import ToggleSwitch from './ToggleSwitch'; // Import the ToggleSwitch component
import './App.css';

const Home = () => {
    return (
        <div className="home-container">
            <p className="app-description">
                Welcome to World Wide News Hub, your go-to source for the latest news from India and the United States.
                Stay informed with real-time updates and comprehensive coverage from trusted sources around the world.
            </p>
        </div>
    );
};

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Router>
            <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <h1 className="app-title">WORLD WIDE NEWS HUB</h1>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/india-news" className="nav-link">India News</Link>
                        </li>
                        <li>
                            <Link to="/us-news" className="nav-link">US News</Link>
                        </li>
                    </ul>
                </nav>

                <ToggleSwitch className="dark-mode-toggle" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/india-news" element={<NewsIndia />} />
                        <Route path="/us-news" element={<NewsUS />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
