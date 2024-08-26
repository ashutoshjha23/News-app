import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsIndia from './NewsIndia';
import NewsUS from './NewsUS';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <Link to="/india-news" className="nav-link">India News</Link>
                        </li>
                        <li>
                            <Link to="/us-news" className="nav-link">US News</Link>
                        </li>
                    </ul>
                </nav>

                <div className="content-container">
                    <Routes>
                        <Route path="/india-news" element={<NewsIndia />} />
                        <Route path="/us-news" element={<NewsUS />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
