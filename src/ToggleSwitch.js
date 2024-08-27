import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ darkMode, toggleDarkMode }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
        </label>
    );
};

export default ToggleSwitch;
